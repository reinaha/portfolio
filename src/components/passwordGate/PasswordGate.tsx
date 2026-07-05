import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';

import { usePortfolioSectionNav } from '@/components/portfolio/portfolioSections/PortfolioSectionNavContext';
import { CASE_STUDY_PASSWORD } from '@/config/passwordGate';

import { PasswordGateLockProvider } from './PasswordGateLockContext';

const STORAGE_KEY = 'protected-case-studies-unlocked';
const COLLAPSED_HEIGHT = 480;
const GATE_NAV_LABEL = 'Work Process';

type PasswordGateProps = {
    children: ReactNode;
};

const isUnlocked = () => sessionStorage.getItem(STORAGE_KEY) === 'true';

let gateInstanceCounter = 0;

export const PasswordGate = ({ children }: PasswordGateProps) => {
    const [unlocked, setUnlocked] = useState(isUnlocked);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollAnchorRef = useRef<HTMLSpanElement>(null);
    const wasUnlocked = useRef(unlocked);
    // Stable per-instance id — most pages only have one gate, but this stays
    // safe if a page ever has more than one.
    const gateIdRef = useRef<string>();
    if (!gateIdRef.current) gateIdRef.current = `password-gate-${gateInstanceCounter++}`;

    useEffect(() => {
        if (unlocked && !wasUnlocked.current) {
            (containerRef.current ?? scrollAnchorRef.current)?.scrollIntoView({
                block: 'start',
                behavior: 'smooth',
            });
        }
        wasUnlocked.current = unlocked;
    }, [unlocked]);

    // While locked, the gate itself is the one thing worth a nav dot — the
    // major sections in its blurred preview aren't reachable yet, so they
    // skip registering individually (see PortfolioMajorSection).
    const { registerSection, unregisterSection } = usePortfolioSectionNav() ?? {};
    useEffect(() => {
        if (unlocked || !registerSection || !unregisterSection || !containerRef.current) {
            return;
        }
        const gateId = gateIdRef.current as string;
        registerSection(gateId, GATE_NAV_LABEL, containerRef.current);
        return () => unregisterSection(gateId);
    }, [unlocked, registerSection, unregisterSection]);

    if (unlocked) {
        // No wrapping element here — these children are typically several
        // sibling major sections (e.g. ProjectContext + Discovery + ...), and
        // wrapping them would nest them one level deeper than their layout
        // parent's Stack expects, silently swallowing its inter-section
        // spacing. The anchor span is the scroll-to-top target instead.
        return (
            <>
                <span ref={scrollAnchorRef} />
                {children}
            </>
        );
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (input === CASE_STUDY_PASSWORD) {
            sessionStorage.setItem(STORAGE_KEY, 'true');
            setUnlocked(true);
        } else {
            setError(true);
        }
    };

    return (
        <Box
            ref={containerRef}
            position="relative"
            sx={{ height: COLLAPSED_HEIGHT, overflow: 'hidden', borderRadius: 2 }}
        >
            <Box
                aria-hidden
                sx={{ filter: 'blur(24px)', pointerEvents: 'none', userSelect: 'none' }}
            >
                <PasswordGateLockProvider value={true}>
                    {children}
                </PasswordGateLockProvider>
            </Box>
            <Stack
                component="form"
                onSubmit={handleSubmit}
                spacing={2}
                alignItems="center"
                justifyContent="center"
                sx={{
                    position: 'absolute',
                    inset: 0,
                    padding: 3,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                }}
            >
                <Typography variant="h5">Work Process</Typography>
                <Typography variant="body2" color="text.secondary">
                    Enter the access code to view the detailed design process, research,
                    and decision-making behind the project.
                </Typography>
                <TextField
                    type="password"
                    size="small"
                    value={input}
                    onChange={(event) => {
                        setInput(event.target.value);
                        setError(false);
                    }}
                    error={error}
                    helperText={error ? 'Incorrect password' : ' '}
                />
                <Button type="submit" variant="contained">
                    Unlock
                </Button>
            </Stack>
        </Box>
    );
};

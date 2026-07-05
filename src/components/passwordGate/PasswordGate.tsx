import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { FormEvent, ReactNode, useEffect, useRef, useState } from 'react';

import { CASE_STUDY_PASSWORD } from '@/config/passwordGate';

const STORAGE_KEY = 'protected-case-studies-unlocked';
const COLLAPSED_HEIGHT = 480;

type PasswordGateProps = {
    children: ReactNode;
};

const isUnlocked = () => sessionStorage.getItem(STORAGE_KEY) === 'true';

export const PasswordGate = ({ children }: PasswordGateProps) => {
    const [unlocked, setUnlocked] = useState(isUnlocked);
    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const wasUnlocked = useRef(unlocked);

    useEffect(() => {
        if (unlocked && !wasUnlocked.current) {
            containerRef.current?.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
        wasUnlocked.current = unlocked;
    }, [unlocked]);

    if (unlocked) {
        return <Box ref={containerRef}>{children}</Box>;
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
                {children}
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

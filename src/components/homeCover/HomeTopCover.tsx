import { keyframes } from '@emotion/react';
import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useEffect, useState } from 'react';

import { AnimatedMouseScrollIcon } from '@/icons';

const dmSans = "'DM Sans', sans-serif";

// The line reads "who enjoys turning complex problems into products <suffix>" —
// only the suffix cycles, typed/deleted like a typewriter, while the shared
// lead-in stays put.
const HERO_PREFIX = 'who enjoys turning complex problems into products ';
const HERO_SUFFIXES = [
    "people don't have to think twice about.",
    'that generate business value.',
    'that are ready for what comes next.',
];

const TYPE_SPEED_MS = 40;
const DELETE_SPEED_MS = 25;
const PAUSE_MS = 2600;

const blink = keyframes`
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
`;

const useTypewriterSuffix = (suffixes: string[]) => {
    const [suffixIndex, setSuffixIndex] = useState(0);
    const [charCount, setCharCount] = useState(suffixes[0].length);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentSuffix = suffixes[suffixIndex];

        if (!isDeleting && charCount === currentSuffix.length) {
            const timeout = setTimeout(() => setIsDeleting(true), PAUSE_MS);
            return () => clearTimeout(timeout);
        }

        if (isDeleting && charCount === 0) {
            setIsDeleting(false);
            setSuffixIndex((prev) => (prev + 1) % suffixes.length);
            return undefined;
        }

        const timeout = setTimeout(
            () => setCharCount((prev) => prev + (isDeleting ? -1 : 1)),
            isDeleting ? DELETE_SPEED_MS : TYPE_SPEED_MS
        );
        return () => clearTimeout(timeout);
    }, [charCount, isDeleting, suffixIndex, suffixes]);

    return suffixes[suffixIndex].slice(0, charCount);
};

export const HomeTopCover = () => {
    const theme = useTheme();
    const suffix = useTypewriterSuffix(HERO_SUFFIXES);
    const isDarkMode = theme.palette.mode === 'dark';
    const subtitleColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#616161';
    const vignette = isDarkMode
        ? 'radial-gradient(ellipse at 50% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 65%)'
        : 'radial-gradient(ellipse at 50% 50%, rgba(0,0,0,0.06) 0%, rgba(0,0,0,0) 65%)';

    return (
        <Box
            position="relative"
            width="100%"
            display="flex"
            flexDirection="column"
            sx={{
                height: 'clamp(760px, calc(100vh - 80px), 900px)',
                background: vignette,
            }}
        >
            <Stack
                flexGrow={1}
                justifyContent="center"
                width="100%"
                maxWidth="1024px"
                marginX="auto"
                sx={{ transform: 'translateY(-32px)' }}
            >
                <Typography
                    sx={{
                        fontFamily: dmSans,
                        fontWeight: 300,
                        fontSize: '22px',
                        lineHeight: '33px',
                        color: subtitleColor,
                    }}
                >
                    Hi, I&apos;m Sumin, a Product Designer,
                </Typography>
                <Typography
                    sx={{
                        fontFamily: dmSans,
                        fontWeight: 500,
                        fontSize: '60px',
                        lineHeight: '65px',
                        letterSpacing: '-1.5px',
                        color: theme.palette.primary.main,
                        paddingTop: 3,
                        minHeight: '207px',
                    }}
                >
                    {HERO_PREFIX}
                    {suffix}
                    <Box
                        component="span"
                        sx={{
                            display: 'inline-block',
                            width: '3px',
                            height: '48px',
                            marginLeft: '4px',
                            verticalAlign: '-8px',
                            backgroundColor: theme.palette.primary.main,
                            animation: `${blink} 1s step-end infinite`,
                        }}
                    />
                </Typography>
            </Stack>
            <Stack alignItems="center" paddingBottom={20}>
                <AnimatedMouseScrollIcon />
            </Stack>
        </Box>
    );
};

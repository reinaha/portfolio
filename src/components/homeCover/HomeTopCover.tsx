import { Box, Stack, Typography, useTheme } from '@mui/material';

import { AnimatedMouseScrollIcon } from '@/icons';

const dmSans = "'DM Sans', sans-serif";

export const HomeTopCover = () => {
    const theme = useTheme();
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
                    }}
                >
                    who enjoys turning complex problems into products people don&apos;t
                    have to think twice about
                </Typography>
            </Stack>
            <Stack alignItems="center" paddingBottom={20}>
                <AnimatedMouseScrollIcon />
            </Stack>
        </Box>
    );
};

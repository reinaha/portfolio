import { Box, Stack, Typography, useTheme } from '@mui/material';

export const IntroSection = () => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';

    return (
        <Stack
            id="work"
            width="100%"
            direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
            maxWidth="1024px"
            marginX="auto"
            spacing={{ lg: 8, md: 6, sm: 4, xs: 4 }}
            paddingY={17}
        >
            <Typography
                sx={{
                    fontSize: '35px',
                    fontWeight: 600,
                    lineHeight: '45.5px',
                    letterSpacing: '-0.5px',
                    color: theme.palette.primary.main,
                    maxWidth: { lg: '579px', xs: '100%' },
                }}
            >
                Designing scalable digital products across aviation, SaaS, and enterprise
                platforms.
            </Typography>
            <Typography
                sx={{
                    fontSize: '22px',
                    fontWeight: 400,
                    lineHeight: '34px',
                    letterSpacing: '0px',
                    color: secondaryColor,
                    maxWidth: { lg: '390px', xs: '100%' },
                }}
            >
                {'Plus, my background in marketing, '}
                <Box
                    component="span"
                    onClick={() =>
                        document
                            .getElementById('visualwork')
                            ?.scrollIntoView({ behavior: 'smooth' })
                    }
                    sx={{
                        textDecoration: 'underline',
                        cursor: 'pointer',
                        '&:hover': {
                            color: isDarkMode ? '#ffffff' : '#000000',
                        },
                    }}
                >
                    visual design and interaction design
                </Box>
                {' gives me more ways to solve product problems.'}
            </Typography>
        </Stack>
    );
};

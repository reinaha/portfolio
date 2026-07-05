import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import { defaultTheme, lightTheme } from '@/themes/default';

import TopNavBar from '../navigation/TopNavBar';

const THEME_OVERRIDE_STORAGE_KEY = 'theme-mode-override';

const readStoredThemeOverride = (): boolean | null => {
    const stored = localStorage.getItem(THEME_OVERRIDE_STORAGE_KEY);
    if (stored === 'dark') return true;
    if (stored === 'light') return false;
    return null;
};

export const DefaultLayout = () => {
    const isPortfolioRoute = useMatch('/work/*');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // `null` means "no manual override" — fall back to system preference.
    const [darkModeOverride, setDarkModeOverride] = useState<boolean | null>(
        readStoredThemeOverride
    );

    const isDarkMode = darkModeOverride !== null ? darkModeOverride : prefersDarkMode;
    const theme = isDarkMode ? defaultTheme : lightTheme;

    const toggleTheme = () => {
        const next = !isDarkMode;
        setDarkModeOverride(next);
        localStorage.setItem(THEME_OVERRIDE_STORAGE_KEY, next ? 'dark' : 'light');
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TopNavBar themeToggle={{ isDarkMode, onToggle: toggleTheme }} />
            {!isPortfolioRoute ? (
                <Container
                    disableGutters
                    sx={{
                        paddingBottom: '3em',
                        paddingLeft: '18px',
                        paddingRight: '18px',
                    }}
                >
                    <Outlet />
                </Container>
            ) : (
                <Outlet />
            )}
        </ThemeProvider>
    );
};

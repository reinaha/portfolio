import { Container, CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { useState } from 'react';
import { Outlet, useMatch } from 'react-router-dom';

import { defaultTheme, lightTheme } from '@/themes/default';

import TopNavBar from '../navigation/TopNavBar';

export const DefaultLayout = () => {
    const isPortfolioRoute = useMatch('/work/*');
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    // Dev-only manual theme override (see TopNavBar's dev toggle). `null` means
    // "no override" — fall back to the normal route/system-preference logic.
    const [devDarkMode, setDevDarkMode] = useState<boolean | null>(null);

    const isDarkMode =
        import.meta.env.DEV && devDarkMode !== null ? devDarkMode : prefersDarkMode;
    const theme = isDarkMode ? defaultTheme : lightTheme;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TopNavBar
                devThemeToggle={
                    import.meta.env.DEV
                        ? { isDarkMode, onToggle: () => setDevDarkMode(!isDarkMode) }
                        : undefined
                }
            />
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

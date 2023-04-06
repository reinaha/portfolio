import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet, useMatch } from 'react-router-dom';

import { defaultTheme, lightTheme } from '@/themes/default';

import TopNavBar from '../navigation/TopNavBar';

export const DefaultLayout = () => {
    const isPortfolioRoute = useMatch('/portfolio/*');

    return (
        <ThemeProvider theme={isPortfolioRoute ? lightTheme : defaultTheme}>
            <CssBaseline enableColorScheme />
            <TopNavBar />
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

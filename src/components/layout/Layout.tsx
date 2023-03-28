import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { LayoutProps } from '../../models';
import TopNavBar from '../navigation/TopNavBar';

export const Layout = ({ theme }: LayoutProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TopNavBar />
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
        </ThemeProvider>
    );
};

import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';

import { LayoutProps } from '../../models';
import TopNavBar from '../navigation/TopNavBar';

export const PortfolioLayout = ({ theme }: LayoutProps) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TopNavBar />
            <Container
                disableGutters
                sx={{
                    paddingBottom: '3em',
                    paddingLeft: '1em',
                    paddingRight: '1em',
                }}
            >
                <Outlet />
            </Container>
        </ThemeProvider>
    );
};

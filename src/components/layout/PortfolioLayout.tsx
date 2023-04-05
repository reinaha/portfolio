import { CssBaseline, ThemeProvider } from '@mui/material';
import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';

import { LayoutProps } from '../../models';
import TopNavBar from '../navigation/TopNavBar';

export const PortfolioLayout = ({ theme }: LayoutProps) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline enableColorScheme />
            <TopNavBar />
            <Outlet />
        </ThemeProvider>
    );
};

import { createTheme } from '@mui/material';

export const defaultTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFFFFF',
        },
        secondary: {
            main: '#292D32',
        },
        background: {
            default: '#292D32',
        },
    },
    spacing: 22,
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
    },
    spacing: 22,
});

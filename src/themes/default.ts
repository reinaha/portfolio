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
    typography: {
        fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
    },
});

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#FFFFFF',
        },
    },
    spacing: 22,
    typography: {
        fontFamily: ['Inter', 'Roboto', 'sans-serif'].join(','),
        h1: {
            fontWeight: 700,
            fontSize: '80px',
        },
    },
});

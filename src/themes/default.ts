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
            fontStyle: 'normal',
            fontSize: '50px',
            letterSpacing: '-1.5px',
            wordBreak: 'break-word',
        },
        h2: {
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '40px',
            wordBreak: 'break-word',
        },
        h3: {
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '30px',
            wordBreak: 'break-word',
        },
        h4: {
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '28px',
            wordBreak: 'break-word',
        },
        h5: {
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '22px',
            wordBreak: 'break-word',
        },
        subtitle1: {
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '22px',
            wordBreak: 'break-word',
        },
        body1: {
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '18px',
            wordBreak: 'break-word',
        },
        body2: {
            fontWeight: 400,
            fontStyle: 'normal',
            fontSize: '18px',
            wordBreak: 'break-word',
        },
    },
});

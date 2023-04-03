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
    spacing: 4,
    typography: {
        fontFamily: ['Raleway', 'Inter', 'Roboto', 'sans-serif'].join(','),
        h1: {
            fontWeight: 700,
            fontStyle: 'normal',
            fontSize: '50px',
            letterSpacing: '-1.5px',
            wordBreak: 'break-word',
        },
        h2: {
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '70px',
            lineHeight: '150%',
            letterSpacing: '-0.02em',
            color: '#131214',
            wordBreak: 'break-word',
        },
        h3: {
            /**Portfolio Section Heading */
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '15px',
            lineHeight: '22.5px',
            wordBreak: 'break-word',
            color: '#131214',
        },
        h4: {
            fontWeight: 600,
            fontStyle: 'normal',
            fontSize: '15px',
            lineHeight: '22.5px',
            wordBreak: 'break-word',
            color: '#131214',
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
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '24px',
            fontSize: '16px',
            wordBreak: 'break-word',
        },
        body2: {
            fontWeight: 500,
            fontStyle: 'normal',
            fontSize: '14px',
            wordBreak: 'break-word',
        },
    },
});

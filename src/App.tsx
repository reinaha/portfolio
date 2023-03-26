import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import Router from './routes/router';
import { defaultTheme } from './themes/default';

function App() {
    return (
        <ThemeProvider theme={defaultTheme}>
            <CssBaseline enableColorScheme />
            <Router />
        </ThemeProvider>
    );
}

export default App;

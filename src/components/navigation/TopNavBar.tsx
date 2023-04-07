import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { NavBarIcons } from './NavBarIcons';
import { NavBarLogo } from './NavBarLogo';

export default function TopNavBar() {
    const location = useLocation();
    const theme = useTheme();
    const isDarkTheme = theme.palette.mode === 'dark';

    return (
        <AppBar
            position="sticky"
            elevation={0}
            color="secondary"
            enableColorOnDark
            sx={{ marginTop: 9.5 }}
        >
            <Container disableGutters sx={{ paddingLeft: 2, paddingRight: 2 }}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <NavBarLogo
                            isDarkTheme={isDarkTheme}
                            curPath={location.pathname}
                        />
                    </Box>
                    <NavBarIcons isDarkTheme={isDarkTheme} curPath={location.pathname} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

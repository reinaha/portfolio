import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';

import { NavBarIcons } from './NavBarIcons';
import { NavBarLogo } from './NavBarLogo';

export default function TopNavBar() {
    const isDarkTheme = useTheme().palette.mode === 'dark';

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
                        <NavBarLogo isDarkTheme={isDarkTheme} />
                    </Box>
                    <NavBarIcons isDarkTheme={isDarkTheme} />
                </Toolbar>
            </Container>
        </AppBar>
    );
}

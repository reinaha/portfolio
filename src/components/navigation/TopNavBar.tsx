import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { AppBar, Box, IconButton, Stack, Toolbar, useTheme } from '@mui/material';
import { useLocation } from 'react-router-dom';

import { NavBarIcons } from './NavBarIcons';
import { NavBarLogo } from './NavBarLogo';

type ThemeToggle = {
    isDarkMode: boolean;
    onToggle: () => void;
};

type TopNavBarProps = {
    themeToggle?: ThemeToggle;
};

export default function TopNavBar({ themeToggle }: TopNavBarProps) {
    const location = useLocation();
    const theme = useTheme();
    const isDarkTheme = theme.palette.mode === 'dark';

    return (
        <AppBar
            id="top-nav-bar"
            position="sticky"
            elevation={0}
            color="secondary"
            enableColorOnDark
            sx={{ marginTop: 9.5 }}
        >
            <Box maxWidth="1024px" marginX="auto" width="100%">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                        <NavBarLogo
                            isDarkTheme={isDarkTheme}
                            curPath={location.pathname}
                        />
                    </Box>
                    <Stack direction="row" alignItems="center" spacing={2}>
                        {themeToggle && (
                            <IconButton
                                aria-label="Toggle color theme"
                                onClick={themeToggle.onToggle}
                                color="inherit"
                            >
                                {themeToggle.isDarkMode ? (
                                    <LightModeIcon fontSize="small" />
                                ) : (
                                    <DarkModeIcon fontSize="small" />
                                )}
                            </IconButton>
                        )}
                        <NavBarIcons
                            isDarkTheme={isDarkTheme}
                            curPath={location.pathname}
                        />
                    </Stack>
                </Toolbar>
            </Box>
        </AppBar>
    );
}

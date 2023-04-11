import MenuIcon from '@mui/icons-material/Menu';
import {
    Button,
    IconButton,
    Menu,
    MenuItem,
    Stack,
    Typography,
    useTheme,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import { NavBarButtons, NavBarDownloads } from '@/data/NavBarIcons';
import { NavBarComponent } from '@/models';

export const NavBarIcons = ({ isDarkTheme, curPath }: NavBarComponent) => {
    const theme = useTheme();
    const lessThanSmall = useMediaQuery(theme.breakpoints.down('md'));

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            {lessThanSmall ? (
                <>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {NavBarButtons.map((icon) => {
                            return <MenuItem key={icon.key}>{icon.text}</MenuItem>;
                        })}
                    </Menu>
                </>
            ) : (
                <Stack direction="row" spacing={4}>
                    {NavBarButtons.map((icon) => {
                        const buttonColor = isDarkTheme
                            ? icon.bgColor?.dark
                            : icon.bgColor?.light;
                        return (
                            <Button
                                key={icon.key}
                                component={Link}
                                to={icon.path || ''}
                                state={{ section: icon.section, from: curPath }}
                                replace
                                color="primary"
                                disableElevation
                                target={icon.target}
                                download={icon.download}
                                sx={{
                                    bgcolor: buttonColor,
                                    borderRadius: 25,
                                    paddingLeft: 4.5,
                                    paddingRight: 4.5,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    '&:hover': {
                                        '& .MuiTypography-root': {
                                            transform: 'scale(1.2)',
                                        },
                                    },
                                }}
                            >
                                <Typography
                                    variant="button"
                                    textTransform="none"
                                    sx={{ transition: 'transform 0.3s ease-in-out' }}
                                >
                                    {icon.text}
                                </Typography>
                            </Button>
                        );
                    })}
                    {NavBarDownloads.map((icon) => {
                        const buttonColor = isDarkTheme
                            ? icon.bgColor?.dark
                            : icon.bgColor?.light;

                        return (
                            <Button
                                key={icon.key}
                                color="primary"
                                disableElevation
                                onClick={icon.onClick}
                                sx={{
                                    bgcolor: buttonColor,
                                    borderRadius: 25,
                                    paddingLeft: 4.5,
                                    paddingRight: 4.5,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    '&:hover': {
                                        '& .MuiTypography-root': {
                                            transform: 'scale(1.2)',
                                        },
                                    },
                                }}
                            >
                                <Typography
                                    variant="button"
                                    textTransform="none"
                                    sx={{ transition: 'transform 0.3s ease-in-out' }}
                                >
                                    {icon.text}
                                </Typography>
                            </Button>
                        );
                    })}
                </Stack>
            )}
        </>
    );
};

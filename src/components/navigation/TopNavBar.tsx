import {
    AppBar,
    Box,
    Button,
    Container,
    Icon,
    IconButton,
    Toolbar,
    useTheme,
} from '@mui/material';
import { Link } from 'react-router-dom';

import LogoDark from '../../../resources/LogoDark.svg';
import LogoLight from '../../../resources/LogoLight.svg';

const pages = [
    {
        key: 0,
        text: 'Home',
        path: '/',
    },
    {
        key: 1,
        text: 'Work',
        path: '/portfolio',
    },
    {
        key: 2,
        text: 'Contact',
        path: '/contact',
    },
];

export default function TopNavBar() {
    const isDarkTheme = useTheme().palette.mode === 'dark';
    console.log(isDarkTheme);

    return (
        <AppBar position="sticky" elevation={0} color="secondary" enableColorOnDark>
            <Container disableGutters sx={{ paddingLeft: '8px', paddingRight: '8px' }}>
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <IconButton sx={{ padding: '0px', height: '1.5em' }}>
                            <Icon sx={{ height: '100%', width: '100%' }}>
                                <img
                                    src={isDarkTheme ? LogoDark : LogoLight}
                                    alt="logo"
                                    style={{ height: '100%' }}
                                />
                            </Icon>
                        </IconButton>
                    </Box>
                    <Box>
                        {pages.map((page) => (
                            <Button
                                key={page.key}
                                component={Link}
                                to={page.path}
                                color="primary"
                                disableElevation
                                sx={{
                                    marginLeft: '2em',
                                }}
                            >
                                {page.text}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
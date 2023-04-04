import {
    AppBar,
    Box,
    Button,
    Container,
    Icon,
    IconButton,
    Stack,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import LogoDark from '@resources/Logos/LogoDark.svg';
import LogoLight from '@resources/Logos/LogoLight.svg';
import { Link } from 'react-router-dom';

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
        text: 'Hire Me',
        path: '/contact',
    },
    {
        key: 3,
        text: 'Download CV',
        path: '/contact',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
    },
    {
        key: 4,
        text: 'Download Portfolio',
        path: '/contact',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
    },
];

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
                    <Stack direction="row" spacing={4}>
                        {pages.map((page) => {
                            const buttonColor = isDarkTheme
                                ? page.bgColor?.dark
                                : page.bgColor?.light;

                            return (
                                <Button
                                    key={page.key}
                                    component={Link}
                                    to={page.path}
                                    color="primary"
                                    disableElevation
                                    sx={{
                                        bgcolor: buttonColor,
                                        borderRadius: 25,
                                        paddingLeft: 4.5,
                                        paddingRight: 4.5,
                                        paddingTop: 2,
                                        paddingBottom: 2,
                                    }}
                                >
                                    <Typography variant="button" textTransform="none">
                                        {page.text}
                                    </Typography>
                                </Button>
                            );
                        })}
                    </Stack>
                </Toolbar>
            </Container>
        </AppBar>
    );
}

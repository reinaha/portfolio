import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
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
        text: 'About',
        path: '/',
    },
    {
        key: 3,
        text: 'Contact',
        path: '/',
    },
];

export default function TopNavBar() {
    return (
        <AppBar position="sticky" elevation={0} color="secondary" enableColorOnDark>
            <Container>
                <Toolbar>
                    <Typography sx={{ flexGrow: 1 }}>수민</Typography>
                    <Box>
                        {pages.map((page) => (
                            <Button
                                key={page.key}
                                component={Link}
                                to={page.path}
                                color="primary"
                                disableElevation
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

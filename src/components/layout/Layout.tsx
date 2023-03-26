import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import TopNavBar from '../navigation/TopNavBar';

export function Layout() {
    return (
        <>
            <TopNavBar />
            <Container
                disableGutters
                sx={{
                    paddingBottom: '3em',
                    paddingLeft: '18px',
                    paddingRight: '18px',
                }}
            >
                <Outlet />
            </Container>
        </>
    );
}

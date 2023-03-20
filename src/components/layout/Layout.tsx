import { Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

import TopNavBar from '../navigation/TopNavBar';

export default function Layout() {
    return (
        <>
            <TopNavBar />
            <Container disableGutters sx={{ marginBottom: '3em' }}>
                <Outlet />
            </Container>
        </>
    );
}

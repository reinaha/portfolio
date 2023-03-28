import { Box, Paper, Stack, Typography } from '@mui/material';

import Cover from '../../resources/OsstemDentalEshop/Cover.jpg';

export function Portfolio() {
    return (
        <Stack spacing={1}>
            <img alt="Cover" src={Cover} />
            <Box>
                <Typography>Commercial</Typography>
                <Typography variant="h1">Osstem dental e-shop</Typography>
            </Box>
        </Stack>
    );
}

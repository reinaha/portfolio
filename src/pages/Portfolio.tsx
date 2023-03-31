import { Box, Stack, Typography } from '@mui/material';

import Cover from '../../resources/OsstemDentalEshop/Cover.jpg';
import Cover2 from '../../resources/OsstemDentalEshop/Cover2.jpg';

export function Portfolio() {
    return (
        <Stack spacing={1}>
            <img
                alt="Cover"
                src={Cover2}
                // style={{ maxHeight: '70vh', objectFit: 'cover' }}
            />
            <Box>
                <Box sx={{ display: 'flex', flexDirection: 'row', marginTop: 1 }}>
                    <Typography sx={{ marginRight: 3 }}>Commercial</Typography>
                    <Typography sx={{ marginRight: 3 }}>Application</Typography>
                    <Typography sx={{ marginRight: 3 }}>Feb 2022 - May 2022</Typography>
                </Box>
                <Typography variant="h1">Osstem dental e-shop</Typography>
            </Box>
        </Stack>
    );
}

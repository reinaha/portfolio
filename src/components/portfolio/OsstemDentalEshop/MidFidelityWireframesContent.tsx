import { Box, Stack } from '@mui/material';

import Wireframe from '../../../../resources/OsstemDentalEshop/Wireframe.jpg';

export const MidFidelityWireframesContent = () => {
    return (
        <Stack spacing={1.4} alignItems="center">
            <Box component="img" alt="Cover" src={Wireframe} />
        </Stack>
    );
};

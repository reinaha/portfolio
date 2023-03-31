import { Box, Stack } from '@mui/material';

import Components from '../../../../../resources/OsstemDentalEshop/Components.jpg';

export const ComponentsAndElementsContent = () => {
    return (
        <Stack spacing={1.4}>
            <Box component="img" alt="Cover" src={Components} />
        </Stack>
    );
};

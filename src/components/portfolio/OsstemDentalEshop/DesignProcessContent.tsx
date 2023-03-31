import { Box, Stack, Typography } from '@mui/material';

import Chart1 from '../../../../resources/OsstemDentalEshop/Chart1.jpg';

export const DesignProcessContent = () => {
    return (
        <Stack spacing={1.4} alignItems="flex-start">
            <Typography>
                This project spanned over a period of three months from Feb 2022 - May
                2022
            </Typography>
            <Box component="img" alt="Cover" src={Chart1} />
        </Stack>
    );
};

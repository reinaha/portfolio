import { Box, Stack, Typography } from '@mui/material';

import Retrospective1 from '../../../../../resources/OsstemDentalEshop/Retrospective1.jpg';
import Retrospective2 from '../../../../../resources/OsstemDentalEshop/Retrospective2.jpg';

export const RetrospectiveContent = () => {
    return (
        <Stack spacing={1.4}>
            <Typography variant="h5">
                Sign-up progress bar with poor intuitiveness
            </Typography>
            <Typography>
                I regret not designing a progress bar with three dots instead of a line,
                since the sign-up process consisted of only three steps. This would have
                made it more intuitive for users to understand the progress of the sign-up
                process.
            </Typography>
            <Box
                component="img"
                alt="Cover"
                src={Retrospective1}
                sx={{ paddingTop: '1em', paddingBottom: '1em' }}
            />
            <Typography variant="h5">
                The Category menu design can be confusing with the filter
            </Typography>
            <Typography>
                A user provided feedback that they were confused whether the Category page
                was a menu page or a filter page. It would have been better to clearly
                distinguish between menu and filter and design accordingly.
            </Typography>
            <Box
                component="img"
                alt="Cover"
                src={Retrospective2}
                sx={{ paddingTop: '1em', paddingBottom: '1em' }}
            />
        </Stack>
    );
};

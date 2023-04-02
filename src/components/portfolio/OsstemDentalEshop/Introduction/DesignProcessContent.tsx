import { Box, Typography } from '@mui/material';
import Chart1 from '@resources/OsstemDentalEshop/Chart1.jpg';

import { PortfolioContainer } from '@/components';

export const DesignProcessContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                This project spanned over a period of three months from Feb 2022 - May
                2022
            </Typography>
            <Box paddingTop={0.5} component="img" alt="Cover" src={Chart1} />
        </PortfolioContainer>
    );
};

import { Box } from '@mui/material';
import Chart2 from '@resources/OsstemDentalEshop/Chart2.jpg';

import { PortfolioContainer } from '@/components';

export const InformationArchitectureContent = () => {
    return (
        <PortfolioContainer>
            <Box paddingTop={0.5} component="img" alt="Cover" src={Chart2} />
        </PortfolioContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskStructureTwoDiagram } from '@/images/AirNZNextGenKiosk';

export const StructureTwoContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Expanding the Product Structure
            </Typography>
            <Typography>
                Once the core journey was established, the product structure was
                progressively expanded by introducing new features, defining customer and
                staff responsibilities, prioritising functionality, and validating how
                each feature should integrate into the overall journey. This iterative
                process ensured the experience could evolve while maintaining a clear and
                consistent check-in flow.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskStructureTwoDiagram} />
        </PortfolioSectionContainer>
    );
};

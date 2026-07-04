import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskStructureOneDiagram } from '@/images/AirNZNextGenKiosk';

export const StructureOneContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Establishing the Core Journey
            </Typography>
            <Typography>
                Discovery insights were first translated into a core MVP journey by
                defining the primary screens, mandatory flows, conditional paths, and
                supporting interactions. This established a scalable foundation that could
                support increasing passenger scenarios and future feature expansion
                without restructuring the overall experience.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskStructureOneDiagram} />
        </PortfolioSectionContainer>
    );
};

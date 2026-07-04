import { Divider } from '@mui/material';

import { PortfolioContainer } from '@/components';
import {
    AirportValidationMajorSection,
    DiscoveryMajorSection,
    HeaderContent,
    InternalValidationMajorSection,
    IntroductionMajorSection,
    ProjectContextMajorSection,
    SolutionMajorSection,
    StructureMajorSection,
} from '@/components/portfolio/AirNZNextGenKiosk';
import { AirNZNextGenKioskHeaderCover } from '@/images/AirNZNextGenKiosk';

export const AirNZNextGenKiosk = () => {
    return (
        <PortfolioContainer
            headerProps={{
                title: 'Product Design',
                headerContent: <HeaderContent />,
                coverImg: AirNZNextGenKioskHeaderCover,
                paddingTop: 30,
            }}
        >
            <IntroductionMajorSection />
            <Divider />
            <ProjectContextMajorSection />
            <Divider />
            <DiscoveryMajorSection />
            <Divider />
            <StructureMajorSection />
            <Divider />
            <InternalValidationMajorSection />
            <Divider />
            <AirportValidationMajorSection />
            <Divider />
            <SolutionMajorSection />
            <Divider />
        </PortfolioContainer>
    );
};

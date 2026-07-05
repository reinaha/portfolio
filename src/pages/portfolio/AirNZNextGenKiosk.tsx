import { Divider } from '@mui/material';

import { PasswordGate, PortfolioContainer } from '@/components';
import {
    AirportValidationMajorSection,
    DiscoveryMajorSection,
    HeaderContent,
    InternalValidationMajorSection,
    IntroductionMajorSection,
    OutcomeMajorSection,
    ProjectContextMajorSection,
    SolutionMajorSection,
    StructureMajorSection,
    SummaryMajorSection,
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
            <PasswordGate>
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
            </PasswordGate>
            <OutcomeMajorSection />
            <Divider />
            <SummaryMajorSection />
            <Divider />
        </PortfolioContainer>
    );
};

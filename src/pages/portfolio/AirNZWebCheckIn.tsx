import { Divider } from '@mui/material';

import { PasswordGate, PortfolioContainer } from '@/components';
import {
    ChallengesMajorSection,
    HeaderContent,
    IntroductionMajorSection,
    OutcomeMajorSection,
    ProjectContextMajorSection,
    SummaryMajorSection,
} from '@/components/portfolio/AirNZWebCheckIn';
import { AirNZWebCheckInHeaderCover } from '@/images/AirNZWebCheckIn';

export const AirNZWebCheckIn = () => {
    return (
        <PortfolioContainer
            headerProps={{
                title: 'Product Design',
                headerContent: <HeaderContent />,
                coverImg: AirNZWebCheckInHeaderCover,
                paddingTop: 30,
            }}
        >
            <IntroductionMajorSection />
            <Divider />
            <PasswordGate>
                <ProjectContextMajorSection />
                <Divider />
                <ChallengesMajorSection />
                <Divider />
            </PasswordGate>
            <OutcomeMajorSection />
            <Divider />
            <SummaryMajorSection />
            <Divider />
        </PortfolioContainer>
    );
};

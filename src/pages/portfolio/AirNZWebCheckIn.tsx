import { Divider } from '@mui/material';

import { PortfolioContainer } from '@/components';
import {
    ChallengesMajorSection,
    HeaderContent,
    IntroductionMajorSection,
    OutcomeMajorSection,
    ProjectContextMajorSection,
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
            <ProjectContextMajorSection />
            <Divider />
            <ChallengesMajorSection />
            <Divider />
            <OutcomeMajorSection />
            <Divider />
        </PortfolioContainer>
    );
};

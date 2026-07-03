import { PortfolioMajorSection } from '@/components';
import { AirNZWebCheckInProjectContextCover } from '@/images/AirNZWebCheckIn';

import {
    ChallengeOneContent,
    ChallengeThreeContent,
    ChallengeTwoContent,
    OverviewContent,
} from './Challenges';

const challengesSections = [
    { title: 'Overview', content: <OverviewContent /> },
    { title: 'Challenge 01', content: <ChallengeOneContent /> },
    { title: 'Challenge 02', content: <ChallengeTwoContent /> },
    { title: 'Challenge 03', content: <ChallengeThreeContent /> },
];

export const ChallengesMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Key Challenges',
                subTitles: challengesSections.map((s) => s.title),
            }}
            portfolioSections={challengesSections}
            coverImage={AirNZWebCheckInProjectContextCover}
        />
    );
};

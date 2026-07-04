import { PortfolioMajorSection } from '@/components';

import {
    AdaptiveJourneyContent,
    MultipleStakeholdersContent,
    PhysicalDigitalExperienceContent,
    SolutionOverviewContent,
    UniversalAccessibilityContent,
} from './Solution';

const solutionSections = [
    { title: 'Overview', content: <SolutionOverviewContent /> },
    { title: 'Solution 01', content: <AdaptiveJourneyContent /> },
    {
        title: 'Solution 02',
        content: <PhysicalDigitalExperienceContent />,
    },
    {
        title: 'Solution 03',
        content: <MultipleStakeholdersContent />,
    },
    {
        title: 'Solution 04',
        content: <UniversalAccessibilityContent />,
    },
];

export const SolutionMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Solution',
                subTitles: solutionSections.map((s) => s.title),
            }}
            portfolioSections={solutionSections}
        />
    );
};

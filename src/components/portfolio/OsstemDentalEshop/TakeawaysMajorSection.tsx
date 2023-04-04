import { PortfolioMajorSection } from '@/components';

import { LearnedContent, RetrospectiveContent } from './Takeaways';

const takeawaysSections = [
    { title: 'What I Learned', content: <LearnedContent /> },
    { title: 'Retrospective', content: <RetrospectiveContent /> },
];

export const TakeawaysMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Takeaways',
                subTitles: takeawaysSections.map((s) => s.title),
            }}
            portfolioSections={takeawaysSections}
        />
    );
};

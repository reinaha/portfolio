import { PortfolioMajorSection } from '@/components';

import { LearnedContent } from './Takeaways';

const takeawaysSections = [{ title: 'What I Learned', content: <LearnedContent /> }];

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

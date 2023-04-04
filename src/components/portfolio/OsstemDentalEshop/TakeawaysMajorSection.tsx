import { PortfolioMajorSection } from '@/components';

import { LearnedContent, RetrospectiveContent } from './Takeaways';

export const TakeawaysMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Takeaways',
            }}
            portfolioSections={[
                { title: 'What I Learned', content: <LearnedContent /> },
                { title: 'Retrospective', content: <RetrospectiveContent /> },
            ]}
        />
    );
};

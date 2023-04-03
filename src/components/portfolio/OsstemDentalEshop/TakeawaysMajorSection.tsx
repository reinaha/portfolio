import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';
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

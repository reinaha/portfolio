import { PortfolioMajorSection } from '@/components';

import {
    ChallengesContent,
    DesignProcessContent,
    GoalsContent,
    IntroductionContent,
    SitemapContent,
    WireframesContent,
} from './Introduction';

export const IntroductionMajorSection = () => {
    return (
        <PortfolioMajorSection
            portfolioSections={[
                { title: 'Introduction', content: <IntroductionContent /> },
                { title: 'Target', content: <IntroductionContent /> },
                { title: 'Goals', content: <GoalsContent /> },
                { title: 'Challenges', content: <ChallengesContent /> },
                { title: 'Design Process', content: <DesignProcessContent /> },
                {
                    title: 'Sitemap',
                    content: <SitemapContent />,
                },
                {
                    title: 'Wireframes',
                    content: <WireframesContent />,
                },
            ]}
        />
    );
};

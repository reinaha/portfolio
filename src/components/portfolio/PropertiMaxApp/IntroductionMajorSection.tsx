import { PortfolioMajorSection } from '@/components';

import {
    ChallengesContent,
    DesignProcessContent,
    GoalsContent,
    IntroductionContent,
    SitemapContent,
    WireframesContent,
} from './Introduction';

const introductionSections = [
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
];

export const IntroductionMajorSection = () => {
    return <PortfolioMajorSection portfolioSections={introductionSections} />;
};

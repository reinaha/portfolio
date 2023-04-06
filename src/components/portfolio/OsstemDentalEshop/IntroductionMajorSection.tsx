import { PortfolioMajorSection } from '@/components';

import {
    ChallengesContent,
    DesignProcessContent,
    GoalsContent,
    IntroductionContent,
    PrototypeContent,
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
    {
        title: 'Prototype',
        content: <PrototypeContent />,
    },
];

export const IntroductionMajorSection = () => {
    return <PortfolioMajorSection portfolioSections={introductionSections} />;
};

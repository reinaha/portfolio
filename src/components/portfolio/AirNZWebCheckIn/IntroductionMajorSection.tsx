import { PortfolioMajorSection } from '@/components';

import { IntroductionContent } from './Introduction';

const introductionSections = [
    { title: 'Introduction', content: <IntroductionContent /> },
];

export const IntroductionMajorSection = () => {
    return <PortfolioMajorSection portfolioSections={introductionSections} />;
};

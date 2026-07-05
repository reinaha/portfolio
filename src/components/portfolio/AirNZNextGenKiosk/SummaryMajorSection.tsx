import { PortfolioMajorSection } from '@/components';
import { AirNZNextGenKioskSummaryLaunchImpact } from '@/images/AirNZNextGenKiosk';

import { ProjectSummaryContent } from './Summary';

const summarySections = [
    { title: 'Project Summary', content: <ProjectSummaryContent /> },
];

export const SummaryMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Designed for \nReal-World Complexity',
                subTitles: [''],
            }}
            portfolioSections={summarySections}
            coverImage={AirNZNextGenKioskSummaryLaunchImpact}
        />
    );
};

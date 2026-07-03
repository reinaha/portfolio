import { PortfolioMajorSection } from '@/components';
import { AirNZWebCheckInSummaryCover } from '@/images/AirNZWebCheckIn';

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
            coverImage={AirNZWebCheckInSummaryCover}
        />
    );
};

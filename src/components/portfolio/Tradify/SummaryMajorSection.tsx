import { PortfolioMajorSection } from '@/components';

import { ProjectSummaryContent } from './Summary';

const summarySections = [
    { title: 'Project Summary', content: <ProjectSummaryContent /> },
];

export const SummaryMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: "Current Progress & \nWhat's Next",
                subTitles: [''],
            }}
            portfolioSections={summarySections}
        />
    );
};

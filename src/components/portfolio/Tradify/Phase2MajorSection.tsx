import { PortfolioMajorSection } from '@/components';

import {
    Phase2OverviewContent,
    WorkstreamOneContent,
    WorkstreamTwoContent,
} from './Phase2';

const phase2Sections = [
    { title: 'Overview', content: <Phase2OverviewContent /> },
    { title: 'Workstream 01', content: <WorkstreamOneContent /> },
    { title: 'Workstream 02', content: <WorkstreamTwoContent /> },
];

export const Phase2MajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Phase 2 — \nLow Connectivity Experience',
                subTitles: phase2Sections.map((s) => s.title),
            }}
            portfolioSections={phase2Sections}
        />
    );
};

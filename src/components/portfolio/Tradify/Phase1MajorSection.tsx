import { PortfolioMajorSection } from '@/components';

import { Phase1OverviewContent, Phase1WorkstreamContent } from './Phase1';

const phase1Sections = [
    { title: 'Overview', content: <Phase1OverviewContent /> },
    { title: 'Workstream', content: <Phase1WorkstreamContent /> },
];

export const Phase1MajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Phase 1 — \nOffline Foundation',
                subTitles: phase1Sections.map((s) => s.title),
            }}
            portfolioSections={phase1Sections}
        />
    );
};

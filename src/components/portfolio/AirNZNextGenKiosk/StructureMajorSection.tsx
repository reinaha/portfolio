import { PortfolioMajorSection } from '@/components';

import {
    StructureOneContent,
    StructureOverviewContent,
    StructureTwoContent,
} from './Structure';

const structureSections = [
    { title: 'Overview', content: <StructureOverviewContent /> },
    { title: 'Structure 01', content: <StructureOneContent /> },
    { title: 'Structure 02', content: <StructureTwoContent /> },
];

export const StructureMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Structure',
                subTitles: structureSections.map((s) => s.title),
            }}
            portfolioSections={structureSections}
        />
    );
};

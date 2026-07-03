import { PortfolioMajorSection } from '@/components';
import { AirNZWebCheckInProjectContextCover } from '@/images/AirNZWebCheckIn';

import { GoalContent, ProblemContent, RootCauseContent } from './ProjectContext';

const projectContextSections = [
    { title: 'Problem', content: <ProblemContent /> },
    { title: 'Root Cause', content: <RootCauseContent /> },
    { title: 'Goal', content: <GoalContent /> },
];

export const ProjectContextMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Project Context',
                subTitles: projectContextSections.map((s) => s.title),
            }}
            portfolioSections={projectContextSections}
            coverImage={AirNZWebCheckInProjectContextCover}
        />
    );
};

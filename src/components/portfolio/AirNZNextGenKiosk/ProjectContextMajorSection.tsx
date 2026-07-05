import { PortfolioMajorSection } from '@/components';

import { ChallengesContent, GoalContent, ProblemContent } from './ProjectContext';

const projectContextSections = [
    { title: 'Problem', content: <ProblemContent /> },
    { title: 'Challenges', content: <ChallengesContent /> },
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
        />
    );
};

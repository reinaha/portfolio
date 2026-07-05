import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const OngoingEvolutionContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                This project is being delivered incrementally. The foundational work
                completed in Phase 1 has entered limited rollout and is being validated
                through user feedback, while Phase 2 is focused on refining more complex
                low-connectivity behaviours and expanding the design system across
                additional user journeys.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

export const ProjectSummaryContentData = [
    {
        title: 'Ongoing Evolution',
        content: <OngoingEvolutionContent />,
    },
];

export const ProjectSummaryContent = () => (
    <PortfolioSubSection subsections={ProjectSummaryContentData} />
);

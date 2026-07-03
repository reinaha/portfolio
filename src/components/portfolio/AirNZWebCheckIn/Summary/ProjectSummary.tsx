import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';

const LaunchImpactContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The scenarios shown here are representative examples of a much larger
                rule-driven system designed for Air New Zealand&apos;s next-generation
                check-in experience.
            </IconListItem>
            <IconListItem>
                Beyond these examples, the project involved many more complex passenger,
                journey, operational, and regulatory scenarios that I&apos;d be happy to
                walk through in person.
            </IconListItem>
            <IconListItem>
                The product first launched as a Domestic MVP in December 2024, followed by
                the full Domestic and International journey in May 2025. It is currently
                live across New Zealand and Australia, with North America planned for
                July, and has supported 1M+ passengers with a 20% increase in check-in
                success rate.
            </IconListItem>
            <IconListItem>
                If you check in online with Air New Zealand, you may see the experience
                live. Hopefully, the complexity we solved behind the scenes helps make
                your journey feel simple.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

export const ProjectSummaryContentData = [
    {
        title: 'Launch & Impact',
        content: <LaunchImpactContent />,
    },
];

export const ProjectSummaryContent = () => (
    <PortfolioSubSection subsections={ProjectSummaryContentData} />
);

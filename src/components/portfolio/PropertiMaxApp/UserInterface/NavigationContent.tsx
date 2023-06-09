import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To make the current page navigation more effective, we designed all the
                basic navigation icons as thin line icons, and the active page icon as a
                color-filled icon. While having only icons looks clean, it can also be
                confusing for users, so we placed the navigation names below the icons.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

export const NavigationContentData = [
    {
        title: 'Navigation bar design concept',
        content: <NavigationJourneyContent />,
    },
];

export const NavigationContent = () => (
    <PortfolioSubSection subsections={NavigationContentData} />
);

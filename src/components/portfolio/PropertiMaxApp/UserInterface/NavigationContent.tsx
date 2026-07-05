import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To indicate the page the user is on, we designed all the basic navigation
                icons as thin line icons, while the active page icon shows as a
                colour-filled icon. While having only icons looks clean, it can also be
                confusing for users, so we placed the navigation labels below the icons.
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

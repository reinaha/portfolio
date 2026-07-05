import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                With the vast amount of information present on the dashboard, I recognised
                the importance of creating an easily navigable interface. To achieve this,
                I focused on simplifying the navigation while avoiding cluttering the
                dashboard. One way I achieved this was by using lighter colours for all
                navigation items except for the currently active page, to reduce their
                visual weight and keep the focus on the content.
            </IconListItem>
            <IconListItem>
                Another important feature that I added was the ability to minimise the
                side menu. When minimised, only icons are displayed, allowing users to
                quickly access the pages they need without distracting from the main
                content. Overall, these design choices make the dashboard simpler and more
                user-friendly.
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

import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As the dashboard contains a large amount of complex information, I
                believed that designing a simple and intuitive navigation was crucial to
                creating an easy-to-use interface. However, simply listing the navigation
                items could make the entire dashboard look cluttered, so I made an effort
                to reduce their visual weight by using lighter colors for all navigation
                items except for the currently activated page.
            </IconListItem>
            <IconListItem>
                Additionally, I added a feature to minimize the side menu in consideration
                of user convenience. When the user minimizes the side menu, only icons are
                displayed, which helps to create a simpler appearance for the dashboard.
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

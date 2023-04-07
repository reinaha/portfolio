import { PortfolioMajorSection } from '@/components';
import {
    PropertiMaxDashboardAnalysiscover,
    PropertiMaxDashboardCalendarcover,
    PropertiMaxDashboardClientscover,
    PropertiMaxDashboardHomecover,
    PropertiMaxDashboardListingcover,
    PropertiMaxDashboardMypropertycover,
    PropertiMaxDashboardNavbarcover,
    PropertiMaxDashboardPersonalinfocover,
} from '@/images/PropertiMaxDashboard';

import {
    HomeContent,
    ItemContent,
    ListContent,
    MapContent,
    NavigationContent,
    PropertyDetailContent,
} from './UserInterface';

const userInterfaceSections = [
    { title: 'Home', content: <HomeContent />, coverImg: PropertiMaxDashboardHomecover },
    {
        title: 'My Properties',
        content: <ItemContent />,
        coverImg: PropertiMaxDashboardMypropertycover,
    },
    {
        title: 'Listing',
        content: <ListContent />,
        coverImg: PropertiMaxDashboardListingcover,
    },
    {
        title: 'Listing Analysis',
        content: <ListContent />,
        coverImg: PropertiMaxDashboardAnalysiscover,
    },
    {
        title: 'Calendar',
        content: <MapContent />,
        coverImg: PropertiMaxDashboardCalendarcover,
    },
    {
        title: 'Clients',
        content: <PropertyDetailContent />,
        coverImg: PropertiMaxDashboardClientscover,
    },
    {
        title: 'Personal Information',
        content: <NavigationContent />,
        coverImg: PropertiMaxDashboardPersonalinfocover,
    },
    {
        title: 'Navigation Bar',
        content: <NavigationContent />,
        coverImg: PropertiMaxDashboardNavbarcover,
    },
];

export const UserInterfaceMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'User Interface',
                subTitles: userInterfaceSections.map((s) => s.title),
            }}
            portfolioSections={userInterfaceSections}
        />
    );
};

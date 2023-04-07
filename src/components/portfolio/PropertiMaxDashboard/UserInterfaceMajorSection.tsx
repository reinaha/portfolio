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
    AnalysisContent,
    CalendarContent,
    ClientsContent,
    HomeContent,
    ListingContent,
    MyPropertyContent,
    NavigationContent,
    PersonalInfoContent,
} from './UserInterface';

const userInterfaceSections = [
    { title: 'Home', content: <HomeContent />, coverImg: PropertiMaxDashboardHomecover },
    {
        title: 'My Properties',
        content: <MyPropertyContent />,
        coverImg: PropertiMaxDashboardMypropertycover,
    },
    {
        title: 'Listing',
        content: <ListingContent />,
        coverImg: PropertiMaxDashboardListingcover,
    },
    {
        title: 'Listing Analysis',
        content: <AnalysisContent />,
        coverImg: PropertiMaxDashboardAnalysiscover,
    },
    {
        title: 'Calendar',
        content: <CalendarContent />,
        coverImg: PropertiMaxDashboardCalendarcover,
    },
    {
        title: 'Clients',
        content: <ClientsContent />,
        coverImg: PropertiMaxDashboardClientscover,
    },
    {
        title: 'Personal Information',
        content: <PersonalInfoContent />,
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

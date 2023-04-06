import { PortfolioMajorSection } from '@/components';
import {
    PropertiMaxWebHomecover,
    PropertiMaxWebItemsearchcover,
    PropertiMaxWebListsearchcover,
    PropertiMaxWebMapsearchcover,
    PropertiMaxWebNavbarcover,
    PropertiMaxWebPropertydetailcover,
} from '@/images/PropertiMaxWeb';

import {
    HomeContent,
    ItemContent,
    ListContent,
    MapContent,
    NavigationContent,
    PropertyDetailContent,
} from './UserInterface';

const userInterfaceSections = [
    { title: 'Home', content: <HomeContent />, coverImg: PropertiMaxWebHomecover },
    {
        title: 'Item View',
        content: <ItemContent />,
        coverImg: PropertiMaxWebItemsearchcover,
    },
    {
        title: 'List View',
        content: <ListContent />,
        coverImg: PropertiMaxWebListsearchcover,
    },
    {
        title: 'Map View',
        content: <MapContent />,
        coverImg: PropertiMaxWebMapsearchcover,
    },
    {
        title: 'Property Detail',
        content: <PropertyDetailContent />,
        coverImg: PropertiMaxWebPropertydetailcover,
    },
    {
        title: 'Navigation Bar',
        content: <NavigationContent />,
        coverImg: PropertiMaxWebNavbarcover,
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

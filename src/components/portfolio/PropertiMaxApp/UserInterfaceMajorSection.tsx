import { PortfolioMajorSection } from '@/components';
import {
    PropertiMaxAppEntrancecover,
    PropertiMaxAppHomecover,
    PropertiMaxAppListcover,
    PropertiMaxAppMapcover,
    PropertiMaxAppMysavedcover,
    PropertiMaxAppNavbarcover,
    PropertiMaxAppPropertydetailcover,
    PropertiMaxAppSearchagentcover,
} from '@/images/PropertiMaxApp';

import {
    EntranceContent,
    FilterContent,
    HomeContent,
    ListContent,
    MapContent,
    NavigationContent,
    PropertyDetailContent,
    SavedListContent,
    SearchContent,
} from './UserInterface';

const userInterfaceSections = [
    {
        title: 'Entrance',
        content: <EntranceContent />,
        coverImg: PropertiMaxAppEntrancecover,
    },
    { title: 'Home', content: <HomeContent />, coverImg: PropertiMaxAppHomecover },
    { title: 'Filter', content: <FilterContent />, coverImg: PropertiMaxAppHomecover },
    { title: 'Map Search', content: <MapContent />, coverImg: PropertiMaxAppMapcover },
    { title: 'List Search', content: <ListContent />, coverImg: PropertiMaxAppListcover },
    {
        title: 'Property Detail',
        content: <PropertyDetailContent />,
        coverImg: PropertiMaxAppPropertydetailcover,
    },
    {
        title: 'Search Agents',
        content: <SearchContent />,
        coverImg: PropertiMaxAppSearchagentcover,
    },
    {
        title: 'My Saved List',
        content: <SavedListContent />,
        coverImg: PropertiMaxAppMysavedcover,
    },
    {
        title: 'Navigation Bar',
        content: <NavigationContent />,
        coverImg: PropertiMaxAppNavbarcover,
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

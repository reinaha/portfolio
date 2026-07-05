import { PortfolioMajorSection } from '@/components';
import { TradifyDiscoveryCover } from '@/images';

import {
    DiscoveryOneContent,
    DiscoveryThreeContent,
    DiscoveryTwoContent,
    OverviewContent,
} from './Discovery';

const discoverySections = [
    { title: 'Overview', content: <OverviewContent /> },
    { title: 'Discovery 01', content: <DiscoveryOneContent /> },
    { title: 'Discovery 02', content: <DiscoveryTwoContent /> },
    { title: 'Discovery 03', content: <DiscoveryThreeContent /> },
];

export const DiscoveryMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Discovery',
                subTitles: discoverySections.map((s) => s.title),
            }}
            portfolioSections={discoverySections}
            coverImage={TradifyDiscoveryCover}
        />
    );
};

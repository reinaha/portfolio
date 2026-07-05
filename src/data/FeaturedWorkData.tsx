import {
    FeaturedWorkKiosk,
    FeaturedWorkOsstem,
    FeaturedWorkPropertiMaxApp,
    FeaturedWorkPropertiMaxDashboard,
    FeaturedWorkPropertiMaxWeb,
    FeaturedWorkTradify,
    FeaturedWorkWebCheckIn,
} from '@/images';
import { IFeaturedWorkCard } from '@/models';

import {
    airNZKioskCard,
    airNZWebAppCard,
    osstemAppCard,
    propertiMaxAppCard,
    propertiMaxDashboardCard,
    propertiMaxWebCard,
    tradifyCard,
} from './PortfolioCardData';

export const FeaturedWorkData: IFeaturedWorkCard[] = [
    {
        card: airNZKioskCard,
        tier: 'large',
        title: 'Air New Zealand Next Generation Kiosk',
        subtitle: 'Self-service Kiosk · Aviation',
        image: FeaturedWorkKiosk,
    },
    {
        card: airNZWebAppCard,
        tier: 'large',
        title: 'Air New Zealand Web Check-In',
        subtitle: 'Web Application · Aviation',
        image: FeaturedWorkWebCheckIn,
    },
    {
        card: tradifyCard,
        tier: 'large',
        title: 'Tradify Offline-First Mobile Experience',
        subtitle: 'Field Service Mobile · SaaS',
        image: FeaturedWorkTradify,
    },
    {
        card: propertiMaxWebCard,
        tier: 'medium',
        title: 'PropertiMax',
        subtitle: 'Real Estate Trading Web · SaaS',
        image: FeaturedWorkPropertiMaxWeb,
    },
    {
        card: propertiMaxAppCard,
        tier: 'medium',
        title: 'PropertiMax',
        subtitle: 'Real Estate Trading App · Mobile',
        image: FeaturedWorkPropertiMaxApp,
    },
    {
        card: osstemAppCard,
        tier: 'medium',
        title: 'Osstem',
        subtitle: 'Dental Supply E-commerce App · Healthcare',
        image: FeaturedWorkOsstem,
    },
    {
        card: propertiMaxDashboardCard,
        tier: 'medium',
        title: 'PropertiMax',
        subtitle: 'Real Estate Agent Dashboard · Enterprise',
        image: FeaturedWorkPropertiMaxDashboard,
    },
];

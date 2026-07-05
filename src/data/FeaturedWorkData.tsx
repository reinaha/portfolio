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
        title: 'PropertiMax Web',
        subtitle: 'Property Marketplace · Real Estate',
        image: FeaturedWorkPropertiMaxWeb,
    },
    {
        card: propertiMaxAppCard,
        tier: 'medium',
        title: 'PropertiMax Mobile',
        subtitle: 'Property Marketplace · Real Estate',
        image: FeaturedWorkPropertiMaxApp,
    },
    {
        card: osstemAppCard,
        tier: 'medium',
        title: 'Osstem Mobile',
        subtitle: 'Dental E-commerce · Healthcare',
        image: FeaturedWorkOsstem,
    },
    {
        card: propertiMaxDashboardCard,
        tier: 'medium',
        title: 'PropertiMax Dashboard',
        subtitle: 'Agent Dashboard · Real Estate',
        image: FeaturedWorkPropertiMaxDashboard,
    },
];

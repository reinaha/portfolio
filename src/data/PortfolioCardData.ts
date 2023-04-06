import { NavigateFunction } from 'react-router-dom';

import {
    DentalECommerceApp,
    DentalECommerceWeb,
    GraphicDesignWork,
    RealEstateTradingApp,
    RealEstateTradingDashboard,
    RealEstateTradingWeb,
} from '@/images';
import { IPortfolioCard } from '@/models';

export const PortfolioCardData: IPortfolioCard[] = [
    {
        title: 'PropertiMax Mobile App',
        subtitle: 'Real Estate Trading Application',
        tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: RealEstateTradingApp,
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/propertimax-app'),
    },
    {
        title: 'Osstem Mobile App',
        subtitle: 'Dental Supply E-Commerce Application',
        tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: DentalECommerceApp,
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'PropertiMax Web App',
        subtitle: 'Real Estate Trading Website',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingWeb,
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/propertimax-web'),
    },
    {
        title: 'PropertiMax',
        subtitle: 'Real Estate Agent Dashboard',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingDashboard,
        onClick: (navigate: NavigateFunction) => () => navigate('/portfolio/'),
    },
    {
        title: 'Osstem Web App',
        subtitle: 'Dental Supply E-Commerce Website',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: DentalECommerceWeb,
        onClick: (navigate: NavigateFunction) => () => navigate('/portfolio/'),
    },
    {
        title: 'Graphic Design Works',
        tags: ['Graphic Design', 'Application'],
        backgroundImg: GraphicDesignWork,
        onClick: () => () => console.log('Design'),
    },
];

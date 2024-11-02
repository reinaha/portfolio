import { NavigateFunction } from 'react-router-dom';

import { FernIcon } from '@/icons';
import {
    ChristmasStampBackground,
    DentalECommerceApp,
    DentalECommerceWeb,
    GraphicDesignWork,
    PostcrossingBackground,
    RealEstateTradingApp,
    RealEstateTradingDashboard,
    RealEstateTradingWeb,
} from '@/images';
import { IPortfolioCard } from '@/models';

export const PortfolioCardData: IPortfolioCard[] = [
    {
        title: '2024 \nPostcrossing \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: PostcrossingBackground,
        textColor: 'white',
        titleProps: {
            fontSize: '42px',
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '40px',
            letterSpacing: '-3%',
            whiteSpace: 'pre-wrap',
        },
        subtitleProps: {
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '20px',
            letterSpacing: '-3%',
        },
        titleSubtitleSpacing: 7,
        titleIcon: <FernIcon color="white" />,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/e90c1ojlWv5cJrcxvpyW49/2024-Postcrossing-Stamp?node-id=4440-2857&node-type=frame&t=2d3QWjdaPa0YcwVA-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: '2024 \nChristmas \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: ChristmasStampBackground,
        textColor: 'white',
        titleProps: {
            fontSize: '42px',
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '40px',
            letterSpacing: '-3%',
            whiteSpace: 'pre-wrap',
        },
        subtitleProps: {
            fontSize: '18px',
            fontWeight: 700,
            fontFamily: 'Inter',
            lineHeight: '20px',
            letterSpacing: '-3%',
        },
        titleSubtitleSpacing: 7,
        titleIcon: <FernIcon color="white" />,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/pIvsbR7rLKovClAjhnNp9W/2024-Christmas-Stamp?node-id=14-48358&node-type=canvas&t=ZUPyjUPi12Y0YIzU-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A47359',
                '_blank'
            ),
    },
    {
        title: 'PropertiMax Mobile App',
        subtitle: 'Real Estate Trading Application',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: RealEstateTradingApp,
        onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-app'),
    },
    {
        title: 'Osstem Mobile App',
        subtitle: 'Dental Supply E-Commerce Application',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: DentalECommerceApp,
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/work/osstem-dental-e-shop'),
    },
    {
        title: 'PropertiMax Web App',
        subtitle: 'Real Estate Trading Website',
        //tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingWeb,
        onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-web'),
    },
    {
        title: 'PropertiMax Dashboard',
        subtitle: 'Real Estate Agent Dashboard',
        //tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingDashboard,
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/work/propertimax-dashboard'),
    },
    {
        title: 'Osstem Web App',
        subtitle: 'Dental Supply E-Commerce Website',
        //tags: ['UI/UX Design', 'Web App'],
        backgroundImg: DentalECommerceWeb,
        onClick: (navigate: NavigateFunction) => () => navigate('/work/'),
    },
    {
        title: 'Graphic Design Works',
        //tags: ['Graphic Design', 'Application'],
        backgroundImg: GraphicDesignWork,
        onClick: () => () => window.open('https://bit.ly/suminGraphics', '_blank'),
    },
];

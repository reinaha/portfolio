import { NavigateFunction } from 'react-router-dom';

import { FernIcon } from '@/icons';
import {
    AnzacStampBackground,
    ChristmasStampBackground,
    DentalECommerceApp,
    DentalECommerceWeb,
    GraphicDesignWork,
    NZPostBrandDesign,
    NZPostDigitalDesign,
    NZPostMotionDesign,
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
        title: '2025 \nANZAC \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: AnzacStampBackground,
        textColor: '#5C3C9C',
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
        titleIcon: <FernIcon color="#5C3C9C" />,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/1ShL40xopOSV4m14xDQ1VD/2025-ANZAC-Stamp?node-id=6001-1043&node-type=frame&t=URbt28XfPGuNbsWJ-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Brand Design',
        subtitle: 'Implementing Brand Guideline',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: NZPostBrandDesign,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/7zTryw9FH0BwNXd76iiq9i/NZPost-Brand-Design?node-id=6001-1043&node-type=frame&t=7cMmig6Gv0pM8idh-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Digital Design',
        subtitle: 'Digital Advertisement',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: NZPostDigitalDesign,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/3IdT4AJN1Um1MqdAnQcfcB/NZPost-Digital-AD-Design?node-id=6001-1043&node-type=frame&t=ou3u6gluz58f6Ki5-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Motion Design',
        subtitle: 'Video and Motion',
        //tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: NZPostMotionDesign,
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/Jz3gFNsoff7tVa9NOHwVTm/NZPost-Motion-Design?node-id=6001-1043&node-type=canvas&t=XFu5olp9AcijDt0i-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
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
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/TrZnUn80G7cYcBDdfirX8Z/%F0%9F%91%88-To-view-mores-check-the-side-bar-%F0%9F%91%88-2024-Design?node-id=6089-13412&node-type=canvas&t=biRVzw0sj7G5WLW4-1&scaling=min-zoom&content-scaling=fixed&page-id=6089%3A48&starting-point-node-id=6089%3A13412&show-proto-sidebar=1',
                '_blank'
            ),
    },
];

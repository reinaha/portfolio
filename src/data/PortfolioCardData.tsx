import { NavigateFunction } from 'react-router-dom';

import {
    AdditionalGraphicDesign,
    AdditionalMotionDesign,
    AirNZKiosk,
    AirNZKioskVideo,
    AirNZWebApp,
    AnzacStampBackground,
    ChristmasStampBackground,
    DentalECommerceApp,
    DentalECommerceWeb,
    NZPostBrandDesign,
    NZPostDigitalDesign,
    NZPostMotionDesign,
    OsstemBrandDesign,
    PostcrossingBackground,
    PropertiMaxVideo,
    RealEstateTradingApp,
    RealEstateTradingDashboard,
    RealEstateTradingWeb,
    TradifyApp,
} from '@/images';
import { IPortfolioCard } from '@/models';

const stampTextColor1 = 'white';
const stampTextColor2 = '#5C3C9C';

export const airNZKioskCard: IPortfolioCard = {
    title: 'Air New Zealand \nKiosk',
    subtitle: 'Next Gen Check-in Kiosk',
    backgroundImg: AirNZKiosk,
    filterCriteria: ['uxui'],
    hoverVideo: AirNZKioskVideo,
    onClick: (navigate: NavigateFunction) => () =>
        navigate('/work/air-nz-next-gen-kiosk'),
};

export const airNZWebAppCard: IPortfolioCard = {
    title: 'Air New Zealand \nWeb App',
    subtitle: 'Next Gen Web Check-in',
    backgroundImg: AirNZWebApp,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () => navigate('/work/air-nz-web-check-in'),
};

export const postcrossingCard: IPortfolioCard = {
    title: '2024 Postcrossing \nStamps Design',
    subtitle: 'New Zealand Official Stamp',
    backgroundImg: PostcrossingBackground,
    textColor: stampTextColor1,
    // titleIcon: <FernIcon color={stampTextColor1} />,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/e90c1ojlWv5cJrcxvpyW49/2024-Postcrossing-Stamp?node-id=4440-2857&node-type=frame&t=2d3QWjdaPa0YcwVA-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
            '_blank'
        ),
};

export const nzPostBrandCard: IPortfolioCard = {
    title: 'NZ Post \nBrand Design',
    subtitle: 'Implementing Brand Guideline',
    backgroundImg: NZPostBrandDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/7zTryw9FH0BwNXd76iiq9i/NZPost-Brand-Design?node-id=6001-1043&node-type=frame&t=7cMmig6Gv0pM8idh-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
            '_blank'
        ),
};

export const propertiMaxAppCard: IPortfolioCard = {
    title: 'PropertiMax \nMobile App',
    subtitle: 'Real Estate Trading Application',
    backgroundImg: RealEstateTradingApp,
    filterCriteria: ['uxui'],
    hoverVideo: PropertiMaxVideo,
    onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-app'),
};

export const christmasCard: IPortfolioCard = {
    title: '2024 Christmas \nStamps Design.',
    subtitle: 'New Zealand Official Stamp',
    backgroundImg: ChristmasStampBackground,
    textColor: stampTextColor1,
    // titleIcon: <FernIcon color={stampTextColor1} />,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/pIvsbR7rLKovClAjhnNp9W/2024-Christmas-Stamp?node-id=14-48358&node-type=canvas&t=ZUPyjUPi12Y0YIzU-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A47359',
            '_blank'
        ),
};

export const nzPostDigitalCard: IPortfolioCard = {
    title: 'NZ Post \nDigital Design',
    subtitle: 'Digital Advertisement',
    backgroundImg: NZPostDigitalDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/3IdT4AJN1Um1MqdAnQcfcB/NZPost-Digital-AD-Design?node-id=6001-1043&node-type=frame&t=ou3u6gluz58f6Ki5-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
            '_blank'
        ),
};

export const propertiMaxWebCard: IPortfolioCard = {
    title: 'PropertiMax \nWeb App',
    subtitle: 'Real Estate Trading Website',
    backgroundImg: RealEstateTradingWeb,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-web'),
};

export const anzacCard: IPortfolioCard = {
    title: '2025 ANZAC \nStamps Design.',
    subtitle: 'New Zealand Official Stamp',
    backgroundImg: AnzacStampBackground,
    textColor: stampTextColor2,
    // titleIcon: <FernIcon color={stampTextColor2} />,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/1ShL40xopOSV4m14xDQ1VD/2025-ANZAC-Stamp?node-id=6001-1043&node-type=frame&t=URbt28XfPGuNbsWJ-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
            '_blank'
        ),
};

export const nzPostMotionCard: IPortfolioCard = {
    title: 'NZ Post \nMotion Design',
    subtitle: 'Video and Motion',
    backgroundImg: NZPostMotionDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/Jz3gFNsoff7tVa9NOHwVTm/NZPost-Motion-Design?node-id=6001-1043&node-type=canvas&t=XFu5olp9AcijDt0i-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
            '_blank'
        ),
};

export const osstemAppCard: IPortfolioCard = {
    title: 'Osstem \nMobile App',
    subtitle: 'Dental Supply E-Commerce Application',
    backgroundImg: DentalECommerceApp,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () => navigate('/work/osstem-dental-e-shop'),
};

export const osstemBrandCard: IPortfolioCard = {
    title: 'Osstem \nBrand Design',
    subtitle: 'Implementing Brand Guideline',
    backgroundImg: OsstemBrandDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/RKRRT0lHdJuRe1GZCJhJ32/Osstem-Brand-Design?node-id=6001-1043&node-type=frame&t=nk7AxkvyA0pyzWeu-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
            '_blank'
        ),
};

export const additionalMotionCard: IPortfolioCard = {
    title: 'Additional Motion Designs',
    subtitle: 'Video and Motion',
    backgroundImg: AdditionalMotionDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/SQxCd7S84iq1yrsMiY4036/Additional-Motion-Designs?node-id=6001-1043&node-type=frame&t=BXmDIfVOlVjlwyu3-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
            '_blank'
        ),
};

export const propertiMaxDashboardCard: IPortfolioCard = {
    title: 'PropertiMax \nDashboard',
    subtitle: 'Real Estate Agent Dashboard',
    backgroundImg: RealEstateTradingDashboard,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () =>
        navigate('/work/propertimax-dashboard'),
};

export const osstemWebCard: IPortfolioCard = {
    title: 'Osstem \nWeb App',
    subtitle: 'Dental Supply E-Commerce Website',
    backgroundImg: DentalECommerceWeb,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () => navigate('/work/'),
};

export const tradifyCard: IPortfolioCard = {
    title: 'Tradify \nMobile App',
    subtitle: 'Offline-First Field Service Application',
    backgroundImg: TradifyApp,
    filterCriteria: ['uxui'],
    onClick: (navigate: NavigateFunction) => () => navigate('/work/tradify'),
};

export const additionalGraphicCard: IPortfolioCard = {
    title: 'Additional Graphic Designs',
    subtitle: 'Brand Design & Advertising Design',
    backgroundImg: AdditionalGraphicDesign,
    filterCriteria: ['multimedia'],
    onClick: () => () =>
        window.open(
            'https://www.figma.com/proto/50t1U0U5ruunE048qskPFP/Additional-Graphic-Designs?node-id=6001-1043&node-type=frame&t=xeAlajkCutEMVOqf-0&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
            '_blank'
        ),
};

export const PortfolioCardData: IPortfolioCard[] = [
    airNZKioskCard,
    airNZWebAppCard,
    postcrossingCard,
    nzPostBrandCard,
    propertiMaxAppCard,
    christmasCard,
    nzPostDigitalCard,
    propertiMaxWebCard,
    anzacCard,
    nzPostMotionCard,
    osstemAppCard,
    osstemBrandCard,
    additionalMotionCard,
    propertiMaxDashboardCard,
    osstemWebCard,
    additionalGraphicCard,
    tradifyCard,
];

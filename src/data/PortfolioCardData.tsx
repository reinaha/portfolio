import { TypographyProps } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

import { FernIcon } from '@/icons';
import {
    AdditionalGraphicDesign,
    AdditionalMotionDesign,
    AnzacStampBackground,
    ChristmasStampBackground,
    DentalECommerceApp,
    DentalECommerceWeb,
    NZPostBrandDesign,
    NZPostDigitalDesign,
    NZPostMotionDesign,
    OsstemBrandDesign,
    PostcrossingBackground,
    RealEstateTradingApp,
    RealEstateTradingDashboard,
    RealEstateTradingWeb,
} from '@/images';
import { IPortfolioCard } from '@/models';

const stampTitleStyle: TypographyProps = {
    fontSize: '40px',
    fontWeight: 700,
    lineHeight: '45px',
    letterSpacing: '-0.01em',
    whiteSpace: 'pre-wrap',
};

const stampSubtitleStyle: TypographyProps = {
    fontSize: '18px',
    fontWeight: 700,
    lineHeight: '20px',
    letterSpacing: '-0.01em',
};

const stampTextColor1 = 'white';
const stampTextColor2 = '#5C3C9C';
const stampTextSpacing = 5;

export const PortfolioCardData: IPortfolioCard[] = [
    {
        title: '2024 \nPostcrossing \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        backgroundImg: PostcrossingBackground,
        textColor: stampTextColor1,
        titleProps: stampTitleStyle,
        subtitleProps: stampSubtitleStyle,
        titleSubtitleSpacing: stampTextSpacing,
        titleIcon: <FernIcon color={stampTextColor1} />,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/e90c1ojlWv5cJrcxvpyW49/2024-Postcrossing-Stamp?node-id=4440-2857&node-type=frame&t=2d3QWjdaPa0YcwVA-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: '2024 \nChristmas \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        backgroundImg: ChristmasStampBackground,
        textColor: stampTextColor1,
        titleProps: stampTitleStyle,
        subtitleProps: stampSubtitleStyle,
        titleSubtitleSpacing: stampTextSpacing,
        titleIcon: <FernIcon color={stampTextColor1} />,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/pIvsbR7rLKovClAjhnNp9W/2024-Christmas-Stamp?node-id=14-48358&node-type=canvas&t=ZUPyjUPi12Y0YIzU-1&scaling=min-zoom&content-scaling=fixed&page-id=14%3A47359',
                '_blank'
            ),
    },
    {
        title: '2025 \nANZAC \nStamps Design.',
        subtitle: '／ New Zealand Official Stamp',
        backgroundImg: AnzacStampBackground,
        textColor: stampTextColor2,
        titleProps: stampTitleStyle,
        subtitleProps: stampSubtitleStyle,
        titleSubtitleSpacing: stampTextSpacing,
        titleIcon: <FernIcon color={stampTextColor2} />,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/1ShL40xopOSV4m14xDQ1VD/2025-ANZAC-Stamp?node-id=6001-1043&node-type=frame&t=URbt28XfPGuNbsWJ-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Brand Design',
        subtitle: 'Implementing Brand Guideline',
        backgroundImg: NZPostBrandDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/7zTryw9FH0BwNXd76iiq9i/NZPost-Brand-Design?node-id=6001-1043&node-type=frame&t=7cMmig6Gv0pM8idh-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Digital Design',
        subtitle: 'Digital Advertisement',
        backgroundImg: NZPostDigitalDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/3IdT4AJN1Um1MqdAnQcfcB/NZPost-Digital-AD-Design?node-id=6001-1043&node-type=frame&t=ou3u6gluz58f6Ki5-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
                '_blank'
            ),
    },
    {
        title: 'NZ Post Motion Design',
        subtitle: 'Video and Motion',
        backgroundImg: NZPostMotionDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/Jz3gFNsoff7tVa9NOHwVTm/NZPost-Motion-Design?node-id=6001-1043&node-type=canvas&t=XFu5olp9AcijDt0i-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
                '_blank'
            ),
    },
    {
        title: 'PropertiMax Mobile App',
        subtitle: 'Real Estate Trading Application',
        backgroundImg: RealEstateTradingApp,
        filterCriteria: ['uxui'],
        onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-app'),
    },
    {
        title: 'Osstem Mobile App',
        subtitle: 'Dental Supply E-Commerce Application',
        backgroundImg: DentalECommerceApp,
        filterCriteria: ['uxui'],
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/work/osstem-dental-e-shop'),
    },
    {
        title: 'PropertiMax Web App',
        subtitle: 'Real Estate Trading Website',
        backgroundImg: RealEstateTradingWeb,
        filterCriteria: ['uxui'],
        onClick: (navigate: NavigateFunction) => () => navigate('/work/propertimax-web'),
    },
    {
        title: 'PropertiMax Dashboard',
        subtitle: 'Real Estate Agent Dashboard',
        backgroundImg: RealEstateTradingDashboard,
        filterCriteria: ['uxui'],
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/work/propertimax-dashboard'),
    },
    {
        title: 'Osstem Web App',
        subtitle: 'Dental Supply E-Commerce Website',
        backgroundImg: DentalECommerceWeb,
        filterCriteria: ['uxui'],
        onClick: (navigate: NavigateFunction) => () => navigate('/work/'),
    },
    {
        title: 'Osstem Brand Design',
        subtitle: 'Implementing Brand Guideline',
        backgroundImg: OsstemBrandDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/RKRRT0lHdJuRe1GZCJhJ32/Osstem-Brand-Design?node-id=6001-1043&node-type=frame&t=nk7AxkvyA0pyzWeu-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517',
                '_blank'
            ),
    },
    {
        title: 'Additional Motion Designs',
        subtitle: 'Video and Motion',
        backgroundImg: AdditionalMotionDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/SQxCd7S84iq1yrsMiY4036/Additional-Motion-Designs?node-id=6001-1043&node-type=frame&t=BXmDIfVOlVjlwyu3-1&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
                '_blank'
            ),
    },
    {
        title: 'Additional Graphic Designs',
        subtitle: 'Brand Design & Advertising Design',
        backgroundImg: AdditionalGraphicDesign,
        filterCriteria: ['multimedia'],
        onClick: () => () =>
            window.open(
                'https://www.figma.com/proto/50t1U0U5ruunE048qskPFP/Additional-Graphic-Designs?node-id=6001-1043&node-type=frame&t=xeAlajkCutEMVOqf-0&scaling=min-zoom&content-scaling=fixed&page-id=4003%3A1517&starting-point-node-id=6001%3A1043',
                '_blank'
            ),
    },
];

import { Box, Grid, Stack } from '@mui/material';
import { useEffect } from 'react';
import { NavigateFunction, useLocation, useNavigate } from 'react-router-dom';

import { HomeBottomCover, HomeTopCover } from '@/components';
import { AnimatedMouseScrollIcon } from '@/icons';
import {
    DentalECommerceApp,
    DentalECommerceWeb,
    GraphicDesignWork,
    RealEstateTradingApp,
    RealEstateTradingDashboard,
    RealEstateTradingWeb,
} from '@/images';

import { PortfolioCard } from '../components/homeCards';

const portfolioCardData = [
    {
        title: 'PropertiMax Mobile App',
        subtitle: 'Real Estate Trading Application',
        tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: RealEstateTradingApp,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'Osstem Mobile App',
        subtitle: 'Dental Supply E-Commerce Application',
        tags: ['UI/UX Design', 'Mobile App'],
        backgroundImg: DentalECommerceApp,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'PropertiMax',
        subtitle: 'Real Estate Trading Website',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingWeb,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'PropertiMax',
        subtitle: 'Real Estate Agent Dashboard',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: RealEstateTradingDashboard,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'Osstem Web App',
        subtitle: 'Dental Supply E-Commerce Website',
        tags: ['UI/UX Design', 'Web App'],
        backgroundImg: DentalECommerceWeb,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: (navigate: NavigateFunction) => () =>
            navigate('/portfolio/osstem-dental-e-shop'),
    },
    {
        title: 'Graphic Design Works',
        tags: ['Graphic Design', 'Application'],
        backgroundImg: GraphicDesignWork,
        navigationPath: '/portfolio/osstem-dental-e-shop',
        onClick: () => () => console.log('Design'),
    },
];

export function Home() {
    const navigate = useNavigate();

    const { state } = useLocation();

    useEffect(() => {
        if (state) {
            const targetClass = state.targetClass;
            console.log(targetClass);
            const el = document.getElementsByClassName(targetClass);
            if (el && el.length > 0) {
                el[0].scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [state]);

    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <HomeTopCover />
            <AnimatedMouseScrollIcon />
            <Box>
                <Grid container alignItems="stretch" columnSpacing={5.5} rowSpacing={11}>
                    {portfolioCardData.map((p, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                                <PortfolioCard
                                    title={p.title}
                                    subtitle={p.subtitle}
                                    tags={p.tags}
                                    backgroundImage={p.backgroundImg}
                                    buttonOnClick={p.onClick(navigate)}
                                />
                            </Grid>
                        );
                    })}
                </Grid>
            </Box>
            <HomeBottomCover />
        </Stack>
    );
}

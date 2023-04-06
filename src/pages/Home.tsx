import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeBottomCover, HomeTopCover, PortfolioCardSection } from '@/components';
import { PortfolioCardData } from '@/data';
import { AnimatedMouseScrollIcon } from '@/icons';

export function Home() {
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            document
                .getElementById(location.state)
                ?.scrollIntoView({ behavior: 'smooth' });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }

        window.history.replaceState({}, document.title);
    }, [location.state]);

    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <HomeTopCover />
            <AnimatedMouseScrollIcon />
            <PortfolioCardSection portfolioCardData={PortfolioCardData} />
            <HomeBottomCover />
        </Stack>
    );
}

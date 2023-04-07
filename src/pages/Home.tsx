import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { HomeBottomCover, HomeTopCover, PortfolioCardSection } from '@/components';
import { PortfolioCardData } from '@/data';
import { AnimatedMouseScrollIcon } from '@/icons';

const toTop = () => {
    setTimeout(
        () =>
            window.scroll({
                top: 0,
                behavior: 'smooth',
            }),
        150
    );
};

const toElement = (elemRef: HTMLElement) => {
    const elemLocation = elemRef.getBoundingClientRect().top + window.scrollY;

    setTimeout(
        () =>
            window.scroll({
                top: elemLocation,
                behavior: 'smooth',
            }),
        250
    );
};

export function Home() {
    const { state } = useLocation();

    useEffect(() => {
        if (state) {
            if (state.section) {
                const elem = document.getElementById(state.section);
                if (elem) toElement(elem);
            } else {
                toTop();
            }

            window.history.replaceState({}, document.title);
        } else {
            toTop();
        }
    }, [state]);

    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <HomeTopCover />
            <AnimatedMouseScrollIcon />
            <PortfolioCardSection portfolioCardData={PortfolioCardData} />
            <HomeBottomCover />
        </Stack>
    );
}

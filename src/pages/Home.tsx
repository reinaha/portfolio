import { Stack } from '@mui/material';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import {
    BeyondPortfolioSection,
    FeaturedWorkSection,
    HomeBottomCover,
    HomeFooter,
    HomeTopCover,
    IntroSection,
    VisualWorksSection,
} from '@/components';

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
            } else if (state.from !== '/') {
                const elem = document.getElementById('mouse');
                if (elem) toElement(elem);
            } else {
                toTop();
            }
        } else {
            toTop();
        }

        window.history.replaceState({}, document.title);
    }, [state]);

    return (
        <Stack>
            <HomeTopCover />
            <IntroSection />
            <FeaturedWorkSection />
            <VisualWorksSection />
            <BeyondPortfolioSection />
            <HomeBottomCover />
            <HomeFooter />
        </Stack>
    );
}

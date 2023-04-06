import { Stack } from '@mui/material';

import { HomeBottomCover, HomeTopCover, PortfolioCardSection } from '@/components';
import { PortfolioCardData } from '@/data';
import { AnimatedMouseScrollIcon } from '@/icons';

export function Home() {
    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <HomeTopCover />
            <AnimatedMouseScrollIcon />
            <PortfolioCardSection portfolioCardData={PortfolioCardData} />
            <HomeBottomCover />
        </Stack>
    );
}

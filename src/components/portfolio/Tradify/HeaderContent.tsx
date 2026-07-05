import { Typography } from '@mui/material';

import { PortfolioDetailCards, PortfolioSectionContainer } from '@/components';
import { TradifyCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">
                Tradify Field Service <br /> Offline Experience
            </Typography>
            <Typography variant="body2">
                Designing a reliable mobile offline experience for field technicians by
                defining offline behaviour, improving system feedback, and creating
                scalable patterns for future offline capabilities.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={TradifyCardInfo} />
        </PortfolioSectionContainer>
    );
};

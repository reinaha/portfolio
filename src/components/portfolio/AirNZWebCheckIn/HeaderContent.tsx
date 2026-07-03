import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { AirNZWebCheckInCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">
                Air New Zealand <br /> Web Check-In Journey
            </Typography>
            <Typography variant="body2">
                Redesigning Air New Zealand&apos;s next-generation check-in experience—a
                project postponed for seven years due to the complexity of passenger
                journeys, operational rules, and regulatory requirements.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={AirNZWebCheckInCardInfo} />
        </PortfolioSectionContainer>
    );
};

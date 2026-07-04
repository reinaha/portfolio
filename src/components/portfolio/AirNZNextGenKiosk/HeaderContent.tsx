import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { AirNZNextGenKioskCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">
                Air New Zealand <br /> Next Generation Kiosk
            </Typography>
            <Typography variant="body2">
                Redesigning Air New Zealand&apos;s next-generation self-service kiosk by
                replacing a legacy vendor platform with an in-house solution—giving the
                airline full control over the customer experience, hardware, and future
                innovation.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={AirNZNextGenKioskCardInfo} />
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeEstaScreens } from '@/images/AirNZNextGenKiosk';

export const EstaContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                U.S. Arrival Information (ESTA)
            </Typography>
            <Typography>
                This screen appeared only for passengers travelling to the United States,
                where additional arrival information was required before check-in could be
                completed. The challenge was supporting group bookings where some
                information—such as the first-night address—was often shared across
                passengers, while other details remained unique to each traveller.
            </Typography>
            <Typography>
                To balance efficiency and flexibility, the experience supported both bulk
                entry for shared information and individual editing when passenger details
                differed. Because the kiosk screen had limited space and the form
                contained many required fields, the interface was organised using
                expandable accordions to reduce cognitive load while keeping the journey
                manageable.
            </Typography>
            <Typography>
                The accordion header displayed how many passengers still required
                information, allowing travellers to quickly track progress. As each
                passenger&apos;s details were completed, the status automatically changed
                to a success indicator, providing immediate visual feedback before
                continuing the journey.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeEstaScreens} />
        </PortfolioSectionContainer>
    );
};

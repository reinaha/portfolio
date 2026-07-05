import { Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskAirportValidationOne } from '@/images/AirNZNextGenKiosk';

export const InternationalKioskObservationContent = () => {
    const iconColor = { primary: '#0088FF', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                International Kiosk Observation
            </Typography>
            <Typography>
                To validate the kiosk experience in a real airport environment, we
                conducted live observations across multiple international departure waves
                at Auckland International Airport. Rather than observing a single flight,
                we selected different departure windows to capture a wide range of
                passenger types, destinations, and travel scenarios.
            </Typography>
            <Typography>
                Morning sessions (4:00 AM–10:00 AM) focused on Trans-Tasman and Asia
                departures, while afternoon sessions (4:00 PM–7:00 PM) covered North
                American flights. Before each session, I prepared an observation framework
                with predefined success measures for every screen in the journey.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Structured observation
                </Typography>
                <Typography>
                    For every passenger, I recorded journey characteristics—including
                    group size, checked baggage, transfer vs. direct travel—alongside
                    screen-by-screen success measures, moments of hesitation, staff
                    intervention, completion failures, and unexpected behaviours.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Rapid validation loop
                </Typography>
                <Typography>
                    Airport validation wasn&apos;t treated as a one-off usability test.
                    Whenever we identified clear, low-risk usability issues, we worked
                    directly with developers to implement improvements between observation
                    sessions and validated the updated experience with the next wave of
                    passengers on the same day.
                </Typography>
            </IconListItem>
            <PortfolioImage imageSrc={AirNZNextGenKioskAirportValidationOne} />
        </PortfolioSectionContainer>
    );
};

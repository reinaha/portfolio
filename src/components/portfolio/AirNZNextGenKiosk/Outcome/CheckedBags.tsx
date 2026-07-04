import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeCheckedBagsScreens } from '@/images/AirNZNextGenKiosk';

export const CheckedBagsContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Checked Bags & Airport Payment
            </Typography>
            <Typography>
                The Checked Bags experience was redesigned around the way passengers
                actually travel together. Instead of selecting baggage for each passenger
                individually—as in the legacy kiosk—the new experience treated baggage as
                a shared total across the entire booking. This reduced unnecessary
                interactions and better reflected how groups check in and manage their
                luggage together.
            </Typography>
            <Typography>
                One key design decision was to start the baggage count at zero rather than
                pre-populating the included baggage allowance. User testing showed that
                when the default matched the fare entitlement, passengers often skipped
                the step without confirming how many bags they were actually checking.
                Starting from zero encouraged passengers to actively confirm the correct
                number of checked bags, improving data accuracy for both passengers and
                airport operations.
            </Typography>
            <Typography>
                The experience also introduced airport baggage payment, a capability that
                had been largely unsupported in the legacy kiosk. Previously, passengers
                wanting to purchase additional baggage were required to leave the kiosk
                and rejoin the staffed service queue. To remove this interruption, we
                explored multiple payment approaches and introduced a QR code payment flow
                as the initial solution. Passengers could continue their journey by
                scanning the QR code and completing payment on their mobile device without
                leaving the kiosk. Following the trial, adoption exceeded expectations,
                validating strong passenger demand for self-service baggage payment.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeCheckedBagsScreens} />
        </PortfolioSectionContainer>
    );
};

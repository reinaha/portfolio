import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeRestrictedItemsScreens } from '@/images/AirNZNextGenKiosk';

export const RestrictedItemsContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Carry-on & Restricted Items
            </Typography>
            <Typography>
                Carry-on and restricted items are mandatory safety requirements, but also
                one of the most commonly skipped parts of the check-in journey. The
                experience needed to communicate all required information while remaining
                quick and easy to complete.
            </Typography>
            <Typography>
                The content adapted to both domestic and international journeys, with
                destination-specific restrictions determining which items were displayed.
                Because the kiosk screen had limited vertical space and the bottom action
                area remained fixed, it was impossible to present every item at once.
                During evaluation, we found passengers frequently ignored the content and
                immediately selected Next.
            </Typography>
            <Typography>
                To encourage passengers to review the full list, the interaction was
                redesigned so the first tap on the Next button automatically scrolled to
                the remaining items instead of advancing to the next screen. Only after
                the complete list had been revealed could passengers continue,
                significantly increasing visibility of important safety information
                without introducing additional steps.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeRestrictedItemsScreens} />
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeEntryScreenScreens } from '@/images/AirNZNextGenKiosk';

export const EntryScreenContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Guided Passport Entry</Typography>
            <Typography>
                The entry screen was designed to minimise friction by allowing passengers
                to begin check-in immediately through passport scanning, without requiring
                any prior interaction. The primary design challenge was helping first-time
                users understand how to position and scan their passport correctly.
            </Typography>
            <Typography>
                To support this, I created a custom animated guidance video that played
                continuously in the background, visually demonstrating the scanning motion
                before passengers even interacted with the kiosk. This reduced reliance on
                written instructions while making the experience easier to understand at a
                glance.
            </Typography>
            <Typography>
                As the first touchpoint of the experience, the screen also established Air
                New Zealand&apos;s brand presence by balancing instructional content with
                the airline&apos;s distinctive purple visual identity.
            </Typography>
            <Typography>
                Alternative and exception paths were considered from the beginning.
                Passengers could manually enter their booking reference if passport
                scanning was unavailable, while dedicated screens were designed for scan
                failures and temporary kiosk unavailability to provide clear recovery
                paths.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeEntryScreenScreens} />
        </PortfolioSectionContainer>
    );
};

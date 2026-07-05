import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeWelcomeScreens } from '@/images/AirNZNextGenKiosk';

export const WelcomeContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Flight Confirmation & Personalisation
            </Typography>
            <Typography>
                The Welcome screen was designed to reassure passengers that they had
                successfully identified the correct booking before continuing with
                check-in. Flight information was presented clearly to reinforce confidence
                and provide a quick overview of the upcoming journey.
            </Typography>
            <Typography>
                The interface adapted to different itinerary types, automatically
                presenting either a simplified single-flight view or an expanded layout
                for multi-flight journeys while maintaining a consistent experience.
            </Typography>
            <Typography>
                This screen also provided an opportunity to add or update Frequent Flyer
                details without interrupting the core journey. The interaction supported a
                full range of states, including successful updates, validation errors,
                incomplete information, and unavailable services, ensuring passengers
                received clear feedback throughout the process.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeWelcomeScreens} />
        </PortfolioSectionContainer>
    );
};

import { Box, Stack, Typography } from '@mui/material';
import EntranceMain from '@resources/OsstemDentalEshop/EntranceMain.jpg';
import Integration from '@resources/OsstemDentalEshop/Integration.jpg';
import ProgressBarPositioning from '@resources/OsstemDentalEshop/ProgressBarPositioning.jpg';
import SignupJourney from '@resources/OsstemDentalEshop/SignupJourney.jpg';

import { JourneyContainer, PortfolioContainer } from '@/components/portfolio';

import { PortfolioFullWidthImage } from '../../PortfolioFullWidthImage';
import { PortfolioSection } from '../../PortfolioSection';

export const EntranceContent = () => {
    return (
        <Stack spacing={1.4}>
            <PortfolioFullWidthImage image={EntranceMain} marginBottom={1.5} />
            <PortfolioSection
                title="Sign up journey"
                content={<SignUpJourneyContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Integrating existing customer accounts with the app account"
                content={<IntegrationContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Positioning sign-up progress bar at the top of the app"
                content={<PositioningContent />}
                headerVariant="h4"
            />
        </Stack>
    );
};

const SignUpJourneyContent = () => {
    return (
        <JourneyContainer image={SignupJourney}>
            <Typography>
                Each screen delivers one task so that users can only focus on one task at
                once without any distractions.
            </Typography>
        </JourneyContainer>
    );
};

const IntegrationContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                One of the most important things to consider on the registration page is
                that the target of the Osstem e-shop app is not only new customers, but
                also existing Osstem New Zealand account holders. Therefore, it was
                crucial for existing customers to link their previous Osstem account to
                the new app account during registration.
            </Typography>
            <Typography>
                To facilitate this process, we created a separate field for users to enter
                their Osstem account code, and added a question mark button for those who
                may need additional clarification.
            </Typography>
            <Box component="img" alt="Cover" src={Integration} />
        </PortfolioContainer>
    );
};

const PositioningContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To ensure readability and app size, we designed the registration form in
                three steps. To prevent confusion for users, we placed a progress bar at
                the top of the app to show users in real-time where they are in the
                registration process until completion.
            </Typography>
            <Box component="img" alt="Cover" src={ProgressBarPositioning} />
        </PortfolioContainer>
    );
};

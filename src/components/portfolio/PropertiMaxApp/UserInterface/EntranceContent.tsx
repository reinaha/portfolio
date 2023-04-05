import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import { EntranceIntegration, EntranceJourney, EntranceProgressBar } from '@/images';

const SignUpJourneyContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                Each screen delivers one task so that users can only focus on one task at
                once without any distractions.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceJourney} />
        </PortfolioContainer>
    );
};

const IntegrationContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                One of the most important things to consider on the registration page is
                that the target of the Osstem e-shop app is not only new customers, but
                also existing Osstem New Zealand account holders. Therefore, it was
                crucial for existing customers to link their previous Osstem account to
                the new app account during registration.
            </IconListItem>
            <IconListItem>
                To facilitate this process, we created a separate field for users to enter
                their Osstem account code, and added a question mark button for those who
                may need additional clarification.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceIntegration} />
        </PortfolioContainer>
    );
};

const PositioningContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                To ensure readability and app size, we designed the registration form in
                three steps. To prevent confusion for users, we placed a progress bar at
                the top of the app to show users in real-time where they are in the
                registration process until completion.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceProgressBar} />
        </PortfolioContainer>
    );
};

export const EntranceContentData = [
    {
        title: 'Sign up journey',
        content: <SignUpJourneyContent />,
    },
    {
        title: 'Integrating existing customer accounts with the app account',
        content: <IntegrationContent />,
    },
    {
        title: 'Positioning sign-up progress bar at the top of the app',
        content: <PositioningContent />,
    },
];

export const EntranceContent = () => (
    <PortfolioSubSection subsections={EntranceContentData} />
);

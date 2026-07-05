import {
    IconListItem,
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';
import { EntranceIntegration, EntranceJourney, EntranceProgressBar } from '@/images';

const SignUpJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Each screen focuses on a single task so that the intent is clear and users
                are not distracted.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceJourney} />
        </PortfolioSectionContainer>
    );
};

const IntegrationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                One of the most important considerations made on the registration page is
                that the main target of the app is existing Osstem New Zealand account
                holders. Therefore, it was crucial for existing customers to link their
                existing Osstem account to the app account during the registration
                process.
            </IconListItem>
            <IconListItem>
                To facilitate this, we created a separate field for users to enter their
                Osstem account code, and added a question mark button for those who may
                need additional clarification.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceIntegration} />
        </PortfolioSectionContainer>
    );
};

const PositioningContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The registration form was broken down into three steps to ensure
                sufficient font size of the form fields so that they were readable without
                having to scroll down the form field. To prevent confusion for users, a
                progress bar was placed at the top of the sign up screen to display
                current progress of the user.
            </IconListItem>
            <PortfolioImage imageSrc={EntranceProgressBar} />
        </PortfolioSectionContainer>
    );
};

export const EntranceContentData = [
    {
        title: 'Sign up journey',
        content: <SignUpJourneyContent />,
    },
    {
        title: 'Integration with existing client accounts',
        content: <IntegrationContent />,
    },
    {
        title: 'Sign-up progress bar',
        content: <PositioningContent />,
    },
];

export const EntranceContent = () => (
    <PortfolioSubSection subsections={EntranceContentData} />
);

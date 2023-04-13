import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppEntranceImg1,
    PropertiMaxAppEntranceImg2,
    PropertiMaxAppEntranceImg3,
} from '@/images/PropertiMaxApp';

const EntranceJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                I felt that the Entrance page would be the best page to showcase the
                PropertiMax brand identity. Designed primarily with PropertiMax&apos;s
                primary colour, green, property images were placed throughout the page,
                highlighting them as a key product to help users naturally feel what type
                of a company PropertiMax is and the brand it represents. In addition,
                various images and icons were used to design the entrance page in a way
                that wouldn&apos;t bore users.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg1} />
        </PortfolioSectionContainer>
    );
};

const IntroPageContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The brand and the app was new at the time and there were not many real
                estate search apps available, hence an intro page was designed with a
                brief explanation of the app&apos;s features before entering the login
                page to inform the users.
            </IconListItem>
            <IconListItem>
                For users who want to quickly skip the intro page, a &ldquo;skip&rdquo;
                button was placed at the top of the screen, which allows users to bypass
                the intro pages and go directly to the login page.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg2} />
        </PortfolioSectionContainer>
    );
};

const ProgressBarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To prevent users from getting tired during the three-step sign-up process,
                a progress bar was placed on the app&apos;s top bar to reduce user
                fatigue.
            </IconListItem>
            <IconListItem>
                Additionally, for steps with non-required information during sign-up such
                as location settings and user profile, a skip button was placed at the top
                of the screen when these pages appeared so that users could easily skip
                them if they did not want to fill them out during the sign-up process.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg3} />
        </PortfolioSectionContainer>
    );
};

export const EntranceContentData = [
    {
        title: 'Entrance journey',
        content: <EntranceJourneyContent />,
    },
    {
        title: 'Intro page to introduce the app to first time users',
        content: <IntroPageContent />,
    },
    {
        title: 'Progress bar to reduce user fatigue',
        content: <ProgressBarContent />,
    },
];

export const EntranceContent = () => (
    <PortfolioSubSection subsections={EntranceContentData} />
);

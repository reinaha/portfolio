import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppEntranceImg1,
    PropertiMaxAppEntranceImg2,
    PropertiMaxAppEntranceImg3,
} from '@/images/PropertiMaxApp';

const EntranceJourneyContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                I thought the Entrance page would be the best page to showcase the
                PropertiMax brand identity. Designed primarily with PropertiMax&apos;s
                main color, green, I placed property images throughout the page,
                highlighting them as a key product to help users naturally feel what type
                of company PropertiMax is and what brand it represents. In addition, I
                used various images and icons to design the entrance page in a way that
                wouldn&apos;t bore users.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg1} />
        </PortfolioContainer>
    );
};

const IntroPageContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                As it was a new app released at the time and there were not many real
                estate search platform apps available, I designed an intro page with a
                brief explanation of the app&apos;s features before entering the login
                page.
            </IconListItem>
            <IconListItem>
                For users who want to quickly skip the intro page, I created a
                &ldquo;skip&rdquo; button at the top of the page, which allows them to
                bypass the intro and go directly to the login page.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg2} />
        </PortfolioContainer>
    );
};

const ProgressBarContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                To prevent users from getting bored during the three-step sign-up process,
                a progress bar was placed on the app&apos;s top bar to reduce user
                fatigue.
            </IconListItem>
            <IconListItem>
                Additionally, since the location settings and user profile pages, except
                for the first sign-up page, were parts that users could modify after
                joining the app, a skip button was placed at the top when these two pages
                appeared so that users could easily skip them if they did not want to fill
                them out.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppEntranceImg3} />
        </PortfolioContainer>
    );
};

export const EntranceContentData = [
    {
        title: 'Entrance journey',
        content: <EntranceJourneyContent />,
    },
    {
        title: 'Intro page to increase user understanding of the app',
        content: <IntroPageContent />,
    },
    {
        title: 'A progress bar to reduce user fatigue in app usage',
        content: <ProgressBarContent />,
    },
];

export const EntranceContent = () => (
    <PortfolioSubSection subsections={EntranceContentData} />
);

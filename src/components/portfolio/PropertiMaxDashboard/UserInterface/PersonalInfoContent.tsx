import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardPersonalinfoImg1,
    PropertiMaxDashboardPersonalinfoImg2,
    PropertiMaxDashboardPersonalinfoImg3,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                This page allows agents to input or update their basic information, which
                will be visible to buyers when they view the agent&apos;s profile.
            </IconListItem>
            <IconListItem>
                To enhance the user experience, the design utilises light colours, with
                functional elements turning dark black or green when clicked or filled
                out.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardPersonalinfoImg1} />
        </PortfolioSectionContainer>
    );
};

const PreviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The Personal Information page is crucial for updating an agent&apos;s
                profile on the real estate brokerage&apos;s main website. To enable users
                to view how their profile appears in real-time, the page is divided into
                two sections. The left section displays the current user&apos;s profile on
                the main website, while the right section contains the form for editing
                the profile.
            </IconListItem>
            <IconListItem>
                This design helps agents to update their profile quickly and accurately,
                allowing them to see the changes they make reflected in real-time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardPersonalinfoImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We recognised that the multiple forms on the Personal Information page
                could cause inconvenience for users updating their information. Therefore,
                we created category collapse buttons on the right side of each form. These
                buttons enable users to collapse the forms they have already completed or
                do not need to update, making it easier to navigate to the forms they want
                to edit.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardPersonalinfoImg3} />
        </PortfolioSectionContainer>
    );
};

export const PersonalInfoContentData = [
    {
        title: 'Personal information journey',
        content: <JourneyContent />,
    },
    {
        title: 'Real-time profile preview feature for personal details page',
        content: <PreviewContent />,
    },
    {
        title: 'Design with category collapse buttons',
        content: <CategoryContent />,
    },
];

export const PersonalInfoContent = () => (
    <PortfolioSubSection subsections={PersonalInfoContentData} />
);

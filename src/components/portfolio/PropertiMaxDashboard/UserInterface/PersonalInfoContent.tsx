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
                This page is a form for agents to input/update their basic information,
                which will be visible to buyers when they check the agent&apos;s
                information.
            </IconListItem>
            <IconListItem>
                The overall design uses light colors as much as possible, and when the
                user takes an action such as filling out a form or clicking a button, the
                elements turn dark black or green to focus only on the functional
                elements.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardPersonalinfoImg1} />
        </PortfolioSectionContainer>
    );
};

const PreviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The Personal Information page is responsible for updating the Agent Detail
                that is featured on the real estate brokerage&apos;s main website.
                Therefore, it is important to allow users to see how their profile appears
                on the main website in real-time.
            </IconListItem>
            <IconListItem>
                To accomplish this, the Personal Information page is divided into two
                sections. The left section displays the current user&apos;s profile as it
                appears on the main website, while the right section contains a form for
                editing the profile.
            </IconListItem>
            <IconListItem>
                This allows agents to easily update their profile and see how the changes
                are reflected on the main website in real-time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardPersonalinfoImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To address the issue of having multiple forms on the Personal Information
                page potentially causing inconvenience for users updating their details,
                we designed a solution by placing down buttons on the right side of each
                form category. This allows users to collapse forms they have already
                completed or do not need to update, and quickly navigate to the forms they
                wish to edit.
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
        title: 'Personal Information Page with Real-time Profile Preview Feature',
        content: <PreviewContent />,
    },
    {
        title: 'Personal Information Page Design Using Category Collapse Buttons',
        content: <CategoryContent />,
    },
];

export const PersonalInfoContent = () => (
    <PortfolioSubSection subsections={PersonalInfoContentData} />
);

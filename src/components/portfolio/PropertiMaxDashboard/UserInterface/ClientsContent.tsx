import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardClientsImg1,
    PropertiMaxDashboardClientsImg2,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The Clients page is designed for agents to manage information about
                customers who are involved in real estate transactions. On this page,
                agents can efficiently manage customer information and communicate with
                them effectively.
            </IconListItem>
            <IconListItem>
                When designing this page, we focused on the fact that agents may have a
                hard time remembering information about many customers. Hence, we included
                a customer list with a photo and name, allowing agents to identify
                customer characteristics quickly. We also added a section where agents can
                leave notes about customers and provide brief descriptions to help them
                recall essential details.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardClientsImg1} />
        </PortfolioSectionContainer>
    );
};

const SearchFilteringContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Our primary challenge was to help agents find customers easily from a
                large list. To address this issue, we added a search bar at the top of the
                client list, enabling agents to search for customers based on specific
                characteristics.
            </IconListItem>
            <IconListItem>
                Moreover, we created a design where customers can be arranged in
                alphabetical order based on information such as name, email, phone number,
                location, and date added, making it easier to search for customers. With
                these search and filtering functions, agents can manage their customer
                list with ease and focus on building strong relationships with them.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardClientsImg2} />
        </PortfolioSectionContainer>
    );
};

export const ClientsContentData = [
    {
        title: 'Clients journey',
        content: <JourneyContent />,
    },
    {
        title: 'Designing a client management page for agents: customer search and filtering functions',
        content: <SearchFilteringContent />,
    },
];

export const ClientsContent = () => (
    <PortfolioSubSection subsections={ClientsContentData} />
);

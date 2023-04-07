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
                The Clients page is a page where agents can view information about
                customers who are involved in real estate transactions at a glance. On
                this page, agents can manage customer information and communicate with
                customers more efficiently.
            </IconListItem>
            <IconListItem>
                When designing this page, the most important aspect we focused on was the
                fact that agents may have difficulty remembering information about many
                customers. Therefore, we designed the customer list to include a photo and
                name so that agents can see customer characteristics at a glance. We also
                added a section for agents to leave notes about customers and provide
                brief descriptions about them to help them remember important details.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardClientsImg1} />
        </PortfolioSectionContainer>
    );
};

const SearchFilteringContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Making it easy for agents to find the customers they want from among a
                large customer list was a challenge. To solve this problem, a search bar
                was placed at the top of the clients list, allowing agents to search for
                customers based on their specific characteristics.
            </IconListItem>
            <IconListItem>
                In addition, the design was created to enable customers to be rearranged
                in A-Z and Z-A order according to information such as name, email, phone
                number, location, and date added, making it easier to search for
                customers.
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
        title: 'Designing a Client Management Page for Agents: The Importance of Customer Search and Filtering Functions',
        content: <SearchFilteringContent />,
    },
];

export const ClientsContent = () => (
    <PortfolioSubSection subsections={ClientsContentData} />
);

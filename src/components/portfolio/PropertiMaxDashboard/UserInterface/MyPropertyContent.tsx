import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardMypropertyImg1,
    PropertiMaxDashboardMypropertyImg2,
    PropertiMaxDashboardMypropertyImg3,
    PropertiMaxDashboardMypropertyImg4,
    PropertiMaxDashboardMypropertyImg5,
    PropertiMaxDashboardMypropertyImg6,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                This page is designed to efficiently manage real estate property listings.
                Basic information for all properties can be viewed in list format at a
                glance, with categorization and filtering options provided for quick
                access to desired information. Additionally, the page offers features to
                input and modify additional details for properties, aimed at enhancing
                efficient real estate property management.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg1} />
        </PortfolioSectionContainer>
    );
};

const BreadcrumbsContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The dashboard contains various pages, some of which may have sub-pages,
                leading to potential confusion for users.
            </IconListItem>
            <IconListItem>
                To address this issue, we have incorporated breadcrumbs at the top of
                every page except for the main dashboard, allowing users to clearly
                identify their current location. The current page is emphasized with
                black, making it stand out more, while previous pages are differentiated
                with light gray to help users easily recognize their current position.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg2} />
        </PortfolioSectionContainer>
    );
};

const VisualisationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                On the My Properties page, a section has been added at the top that
                visualizes the number of real estate properties owned based on type,
                location, and sale/rent status using graphs.
            </IconListItem>
            <IconListItem>
                Users can quickly grasp the characteristics of their properties at a
                glance through these graphs and can also access additional information as
                needed.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg3} />
        </PortfolioSectionContainer>
    );
};

const FilteringContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To effectively manage real estate listings, we paid close attention to
                filtering capabilities that allow users to reorder the list in the way
                they desire. We provided filtering options for all possible options to
                allow users to sort the list as precisely as possible according to their
                needs.
            </IconListItem>
            <IconListItem>
                The filtering feature is divided into All Properties, Properties for Sale,
                and Properties for Rent, with filtering available for each. Additionally,
                filtering is available for real estate options such as location, number of
                bedrooms, number of bathrooms, parking spaces, square footage, property
                type, and price. We also offer filtering by post status, including Newest,
                Oldest, A-Z, Z-A, and more. Through this, users can filter real estate
                listings to suit their needs and search more easily and quickly.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg4} />
        </PortfolioSectionContainer>
    );
};

const AddListingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Creating a user-friendly and intuitive interface for updating information
                was one of the most important considerations for the real estate property
                addition feature on the My Properties page.
            </IconListItem>
            <IconListItem>
                As real estate properties contain various types of information, it can
                take a lot of time and energy for agents to update even a single property.
                If a complex and difficult-to-use interface were provided, agents might be
                discouraged from using the page.
            </IconListItem>
            <IconListItem>
                For this reason, we placed a progress bar at the top of each information
                addition page so that users could roughly estimate the amount of
                information they need to input and could also easily identify their
                current location. Additionally, we categorized and separated the
                information that needed to be entered, making it easy and intuitive for
                users to input the information.
            </IconListItem>
            <IconListItem>
                By making it easy for users to update information, we were able to reduce
                the amount of time and energy agents need to spend on updating real estate
                property information.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg5} />
        </PortfolioSectionContainer>
    );
};

const ToggleCollapseContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To address the potential difficulty for users to enter information due to
                the length of the real estate property information form, we added toggle
                buttons on the right side of each category to allow users to easily expand
                and collapse each section as needed.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg6} />
        </PortfolioSectionContainer>
    );
};

export const MyPropertyContentData = [
    {
        title: 'My Properties journey',
        content: <JourneyContent />,
    },
    {
        title: 'Improving user experience through the addition of click path guidance using breadcrumbs',
        content: <BreadcrumbsContent />,
    },
    {
        title: 'Improved efficiency of information retrieval and additional information viewing through real estate property graph visualization',
        content: <VisualisationContent />,
    },
    {
        title: 'Effective Real Estate Listings Management with Extensive Filtering Options',
        content: <FilteringContent />,
    },
    {
        title: 'User-friendly and intuitive interface design for real estate property listing addition function',
        content: <AddListingContent />,
    },
    {
        title: 'User-friendly design of real estate property information addition form using toggle buttons for each form',
        content: <ToggleCollapseContent />,
    },
];

export const MyPropertyContent = () => (
    <PortfolioSubSection subsections={MyPropertyContentData} />
);

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
                This page has been designed to facilitate the efficient management of real
                estate property listings. Users can quickly view basic information for all
                property listings in a list format, with the option to categorise and
                filter for desired information. The page also offers features to input and
                modify additional details for properties, aimed at enhancing the
                efficiency of real estate property management.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg1} />
        </PortfolioSectionContainer>
    );
};

const BreadcrumbsContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The dashboard consists of multiple pages, including sub-pages, which may
                cause confusion for users. To improve the user experience, we have added
                breadcrumbs to every page except for the main dashboard. These breadcrumbs
                allow users to quickly identify their current location and navigate back
                to previous pages. The current page is highlighted in black, while
                previous pages are differentiated with light gray, making it easy for
                users to identify their current position. The dashboard contains various
                pages, some of which may have sub-pages, leading to potential confusion
                for users.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg2} />
        </PortfolioSectionContainer>
    );
};

const VisualisationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We have added a new section to the My Properties page that displays visual
                graphs of the number of real estate properties based on type, location,
                and sale/rent status. These graphs enable users to quickly grasp the
                characteristics of their properties at a glance and access additional
                information as needed, thereby improving the efficiency of information
                retrieval.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg3} />
        </PortfolioSectionContainer>
    );
};

const FilteringContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We have paid close attention to filtering capabilities to allow users to
                reorder the list according to their needs. Users can filter real estate
                listings based on location, number of bedrooms, number of bathrooms,
                parking spaces, square footage, property type, and price.
            </IconListItem>
            <IconListItem>
                The filtering feature is divided into All Properties, Properties for Sale,
                and Properties for Rent, with filtering available for each. Additionally,
                we offer filtering by post status, including Newest, Oldest, A-Z, Z-A, and
                more. With these filtering options, users can quickly and easily find the
                properties they are looking for.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg4} />
        </PortfolioSectionContainer>
    );
};

const AddListingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Updating real estate property information can be time-consuming and
                complex. To create a user-friendly interface, we have added a progress bar
                at the top of each information addition page. This progress bar allows
                users to estimate the amount of information they need to input and
                identify their current location.
            </IconListItem>
            <IconListItem>
                AAdditionally, we have categorised and separated the information that
                needs to be entered, making it easy and intuitive for users to input the
                information.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardMypropertyImg5} />
        </PortfolioSectionContainer>
    );
};

const ToggleCollapseContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To address potential difficulties in entering information due to the
                length of the real estate property information form, we have added toggle
                buttons on the right side of each category. These toggle buttons allow
                users to easily expand and collapse each section as needed, making the
                process of entering information much simpler and more user-friendly.
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
        title: 'Enhancing user experience with breadcrumbs for click path guidance',
        content: <BreadcrumbsContent />,
    },
    {
        title: 'Improved efficiency with real estate property graph visualisation',
        content: <VisualisationContent />,
    },
    {
        title: 'Efficient real estate listings management with extensive filtering options',
        content: <FilteringContent />,
    },
    {
        title: 'User-friendly interface design for real estate property listing addition function',
        content: <AddListingContent />,
    },
    {
        title: 'User-friendly design of real estate property information addition form',
        content: <ToggleCollapseContent />,
    },
];

export const MyPropertyContent = () => (
    <PortfolioSubSection subsections={MyPropertyContentData} />
);

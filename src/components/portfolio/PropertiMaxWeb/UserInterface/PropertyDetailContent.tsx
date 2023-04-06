import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxWebPropertydetailImg1,
    PropertiMaxWebPropertydetailImg2,
    PropertiMaxWebPropertydetailImg3,
} from '@/images/PropertiMaxWeb';

const PropertyDetailJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                On the Property Detail page, I considered what options users would be most
                interested in checking. In addition to basic information such as the
                property address, price, number of bedrooms and bathrooms, and parking
                facilities, I thought that if someone is interested in this property, they
                would be most curious about the open homes schedule and a rough map of the
                surrounding amenities.
            </IconListItem>
            <IconListItem>
                Therefore, I placed the section with the basic property information at the
                top, followed by the open homes section, and then a map including nearby
                amenities.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebPropertydetailImg1} />
        </PortfolioSectionContainer>
    );
};

const PropertyDetailDesignContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As property agents aim to showcase their properties in the most appealing
                way possible to potential buyers, a lot of consideration went into
                designing the property detail page from the buyer&apos;s perspective. This
                involved thinking about how to present each property in the most
                attractive way possible, in order to make it stand out and catch the
                buyer&apos;s eye.
            </IconListItem>
            <IconListItem>
                The most important element that can make a property more attractive to
                buyers is its images, and we put a lot of effort into thinking about how
                to showcase each property in the most appealing way possible from the
                buyer&apos;s perspective. To achieve this, we designed the property images
                to be displayed in a larger size than the default grid on the website,
                filling the width of the image to grab the user&apos;s attention.
            </IconListItem>
            <IconListItem>
                We also designed the image slider to include additional facility images,
                in order to capture the user&apos;s attention and provide detailed
                information about the property listing.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebPropertydetailImg2} />
        </PortfolioSectionContainer>
    );
};

const PropertyDetailSidebarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Since there were a lot of different information within each individual
                property listing, we struggled with where to place the important agent
                contact details.
            </IconListItem>
            <IconListItem>
                Placing it at the top of the content would require users to scroll down to
                view the information, creating inconvenience to access. On the other hand,
                placing it at the bottom could result in users missing the contact details
                amidst the abundance of information.
            </IconListItem>
            <IconListItem>
                Therefore, we designed a sidebar on the left-hand side of the property
                detail page to fix the agent contact details, allowing users to easily
                access the information while browsing through the property details.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebPropertydetailImg3} />
        </PortfolioSectionContainer>
    );
};

export const PropertyDetailContentData = [
    {
        title: 'Property detail journey',
        content: <PropertyDetailJourneyContent />,
    },
    {
        title: 'Design to make real estate properties more attractive',
        content: <PropertyDetailDesignContent />,
    },
    {
        title: 'Utilizing a side bar to continuously expose important information to users',
        content: <PropertyDetailSidebarContent />,
    },
];

export const PropertyDetailContent = () => (
    <PortfolioSubSection subsections={PropertyDetailContentData} />
);

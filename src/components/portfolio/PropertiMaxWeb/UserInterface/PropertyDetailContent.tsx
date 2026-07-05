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
                When designing the Property Detail page, I carefully considered what
                information users would find most valuable. Along with standard details
                like the address, price, number of bedrooms and bathrooms, and parking
                facilities, I realised that potential buyers would be eager to know the
                property&apos;s open home schedule and the amenities available nearby.
            </IconListItem>
            <IconListItem>
                To meet this need, I structured the page to showcase essential property
                information first, followed by a section detailing open homes, and lastly,
                a map highlighting the surrounding facilities.
            </IconListItem>
            <IconListItem>
                With this layout, users can quickly and easily access the information that
                matters most to them, making their property search experience more
                enjoyable and efficient.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebPropertydetailImg1} />
        </PortfolioSectionContainer>
    );
};

const PropertyDetailDesignContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As property agents strive to present their properties in the most
                attractive way to potential buyers, we took great care in designing the
                property detail page with the buyer&apos;s perspective in mind. Our goal
                was to showcase each property in the most appealing way possible to make
                it stand out and catch the buyer&apos;s eye.
            </IconListItem>
            <IconListItem>
                We understood that the images of a property play a crucial role in making
                it more attractive to buyers. Therefore, we designed the property images
                to be displayed in a larger size than the default grid on the website. By
                doing so, we aimed to capture the user&apos;s attention and increase the
                chances of engagement.
            </IconListItem>
            <IconListItem>
                In addition, we also designed the image slider to include additional
                images. This allowed us to provide detailed information about the property
                listing while at the same time keeping the user&apos;s attention. With
                this approach, we believe that we can provide an immersive and engaging
                experience for potential buyers on the website.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebPropertydetailImg2} />
        </PortfolioSectionContainer>
    );
};

const PropertyDetailSidebarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Given the wealth of information in each property listing, we faced a
                challenge when deciding where to place the vital agent contact details.
                Placing it at the top of the content could be an inconvenience for users
                who would have to scroll down to view the information. On the other hand,
                positioning it at the bottom could cause users to overlook the contact
                details buried in the sea of information.
            </IconListItem>
            <IconListItem>
                To resolve this issue, we created a sidebar on the left-hand side of the
                property detail page, specifically for the agent contact details. This
                solution offers users easy access to the information, even as they browse
                through the various property details.
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
        title: 'Utilising a side bar to continuously expose important information to users',
        content: <PropertyDetailSidebarContent />,
    },
];

export const PropertyDetailContent = () => (
    <PortfolioSubSection subsections={PropertyDetailContentData} />
);

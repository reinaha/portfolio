import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppPropertydetailImg1,
    PropertiMaxAppPropertydetailImg2,
    PropertiMaxAppPropertydetailImg3,
} from '@/images/PropertiMaxApp';

const PropertyDetailJourneyContent = () => {
    return (
        <PortfolioContainer>
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
            <PortfolioImage imageSrc={PropertiMaxAppPropertydetailImg1} />
        </PortfolioContainer>
    );
};

const PropertyDetailViewingContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                In the Open Home Schedule section, we have placed a &ldquo;Viewing
                Request&rdquo; button to facilitate smoother schedule management for both
                agents and property buyers.
            </IconListItem>
            <IconListItem>
                With this feature, property buyers can easily make viewing reservations
                without having to send separate messages to the agents. Meanwhile, agents
                can easily adjust their viewing schedules without having to go through the
                hassle of dealing with numerous messages.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppPropertydetailImg2} />
        </PortfolioContainer>
    );
};

const PropertyDetailHighlightingContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                The most important aspect of the Property Detail page is to make it easy
                for buyers to contact the agent managing the property if they are
                interested. However, due to the abundance of information on the page, the
                agent contact section was not always prominently displayed.
            </IconListItem>
            <IconListItem>
                To solve this issue, we decided to fix the contact section at the bottom
                of the app, enabling users to easily access the information they need and
                contact the agent immediately if they develop an interest.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppPropertydetailImg3} />
        </PortfolioContainer>
    );
};

export const PropertyDetailContentData = [
    {
        title: 'Property detail journey',
        content: <PropertyDetailJourneyContent />,
    },
    {
        title: 'Viewing button for easy and smooth communication between seller and buyer',
        content: <PropertyDetailViewingContent />,
    },
    {
        title: 'Highlighting important elements among a lot of content',
        content: <PropertyDetailHighlightingContent />,
    },
];

export const PropertyDetailContent = () => (
    <PortfolioSubSection subsections={PropertyDetailContentData} />
);

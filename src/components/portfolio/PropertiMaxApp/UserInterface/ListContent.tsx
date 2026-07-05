import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppListImg1,
    PropertiMaxAppListImg2,
    PropertiMaxAppListImg3,
    PropertiMaxAppListImg4,
} from '@/images/PropertiMaxApp';

const ListJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing the List Search feature, the main goal was to make it easy
                and fast for users to find the real estate they are looking for without
                having to click through each and every one. Brief but crucial information
                about the properties in the list were displayed so that users can quickly
                scan through and quickly find properties they are interested in.
            </IconListItem>
            <IconListItem>
                Therefore, the real estate property list was designed to display basic
                information with photos to give users a glimpse of the property at a
                glance.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg1} />
        </PortfolioSectionContainer>
    );
};

const ListNavigationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Since the list search already had many options selected through search
                filters, one major concern was that users could be confused about which
                page they were currently on.
            </IconListItem>
            <IconListItem>
                To address this, the design focused on improving users&apos; page
                understanding by adding a breadcrumb to the top of the search bar, which
                could show at least a brief summary of their current page location. This
                navigation feature helps alleviate user confusion caused by multiple
                options and improve the overall user experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg2} />
        </PortfolioSectionContainer>
    );
};
const ListTabContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                From the perspective of users interested in purchasing real estate, it is
                important not only to check the information of real estate properties on
                the app, but also to attend open homes where they can view the property
                directly and auctions and where they can gauge the current property
                market.
            </IconListItem>
            <IconListItem>
                Therefore, from real estate property listings, Open Home and Auctions tabs
                were added to encourage users to view properties with upcoming open homes
                or auctions.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg3} />
        </PortfolioSectionContainer>
    );
};

const ListThumbnailContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To help potential real estate buyers make better decisions, tags were
                placed on each real estate listing thumbnail showing the status of the
                property transaction. If a property has an offer against it, a grey circle
                with the tag &ldquo;Under offer&rdquo; is displayed to make it seem
                deactivated, while for other cases, a green circle was shown to make it
                clear that it was open for offers.
            </IconListItem>
            <IconListItem>
                Also the duration from which the property was listed was placed for
                properties not under offer, to indicate recently added properties to
                encourage user clicks.
            </IconListItem>
            <IconListItem>
                The logo of the real estate agent responsible for each listing was
                inserted into the corner of the property thumbnail to make it more
                appealing for PropertyMax&apos;s main audience, real estate agents, giving
                more exposure of their brandings.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg4} />
        </PortfolioSectionContainer>
    );
};

export const ListContentData = [
    {
        title: 'List search journey',
        content: <ListJourneyContent />,
    },
    {
        title: 'A navigation feature to address user confusion from multiple options',
        content: <ListNavigationContent />,
    },
    {
        title: 'A list tab configuration tailored to user needs',
        content: <ListTabContent />,
    },
    {
        title: 'Thumbnail design that enhances user understanding',
        content: <ListThumbnailContent />,
    },
];

export const ListContent = () => <PortfolioSubSection subsections={ListContentData} />;

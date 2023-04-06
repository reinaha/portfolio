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
                In designing the List Search feature, our main goal was to make it easy
                and fast for users to find the real estate properties they are looking for
                without having to click through each and every one. We aimed to show brief
                but crucial information about the properties in the list, so that users
                can quickly scan through and consider other options as well.
            </IconListItem>
            <IconListItem>
                Therefore, we designed the real estate property list to display basic
                information along with photos to give users a glimpse of the property at a
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
                filters, the concern was that users may be confused about which page they
                are currently on.
            </IconListItem>
            <IconListItem>
                To address this, we focused on improving users&apos; page understanding by
                adding a breadcrumb to the top of the search bar, which could show at
                least a brief summary of their current page location. This navigation
                feature helps alleviate user confusion caused by multiple options and
                improve the overall user experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg2} />
        </PortfolioSectionContainer>
    );
};
const ListTabContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When considering the perspective of users interested in purchasing real
                estate, it is important not only to check the information of real estate
                properties with the desired options, but also to attend open homes where
                they can view the properties firsthand and auctions where they can
                experience actual transactions.
            </IconListItem>
            <IconListItem>
                Therefore, when creating a real estate property list, in addition to the
                updated real estate property information, we added Open Home and Auctions
                tabs to encourage users to also check the real estate properties related
                to upcoming open homes and auctions.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppListImg3} />
        </PortfolioSectionContainer>
    );
};

const ListThumbnailContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To help potential real estate buyers make quick decisions without wasting
                unnecessary time, we placed tags on each real estate listing thumbnail
                showing the status of the property transaction. If a property is currently
                under offer, we added a grey circle with the tag &quot;Under offer&quot;
                to give a deactivated feel, while for other cases, we used a green circle
                to provide an activated feel, showing the update time of the property
                listing to encourage user clicks.
            </IconListItem>
            <IconListItem>
                We also inserted the logo of the real estate agent responsible for each
                listing on the property thumbnail to not only enhance the user&apos;s
                understanding of the property but also target PropertyMax&apos;s main
                audience, real estate agents, for advertising purposes.
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
        title: 'A thumbnail design that enhances user understanding of the item.',
        content: <ListThumbnailContent />,
    },
];

export const ListContent = () => <PortfolioSubSection subsections={ListContentData} />;

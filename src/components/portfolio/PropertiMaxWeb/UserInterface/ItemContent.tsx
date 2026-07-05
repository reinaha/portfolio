import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxWebItemsearchImg1,
    PropertiMaxWebItemsearchImg2,
    PropertiMaxWebItemsearchImg3,
    PropertiMaxWebItemsearchImg4,
    PropertiMaxWebItemsearchImg5,
    PropertiMaxWebItemsearchImg6,
    PropertiMaxWebItemsearchImg7,
} from '@/images/PropertiMaxWeb';

const ItemJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing the homepage, our primary focus was on making it easier and
                more intuitive for users to find properties. To achieve this, we ensured
                that the search bar, search filters, and categories were located in
                easy-to-find positions. Initially, we suggested including only the search
                bar on the homepage to emphasise its functionality. However, we realised
                that new users of real estate search apps might find it confusing and not
                know what to search for.
            </IconListItem>
            <IconListItem>
                Additionally, the client wanted to display a variety of properties on the
                homepage itself. As a result, we decided to retain the familiar format of
                websites with search functions, making it easy for users to navigate, even
                if they were using a real estate search app for the first time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const ItemSearchContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The search bar located at the top of the item search page enables users to
                view real-time search results based on the options they selected during
                their previous search. This feature helps users to check the details of
                their previous search and make quick adjustments to their search criteria,
                if necessary.
            </IconListItem>
            <IconListItem>
                For instance, suppose a user initially searched for properties in a
                particular location but then decided to modify their search to include
                more bedrooms. In that case, they can easily update the number of bedrooms
                in the search bar and see the updated results without having to start a
                new search from scratch. This feature provides users with a more efficient
                and personalised search experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg2} />
        </PortfolioSectionContainer>
    );
};

const ItemFatigueContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing search list pages, our main objective was to assist users
                in navigating through a vast amount of information and enable them to
                browse real estate listings for more extended periods without experiencing
                fatigue.
            </IconListItem>
            <IconListItem>
                Our strategy to minimise user fatigue was to simplify the search process
                as much as possible. A key example of this is displaying a summary of
                search options and the number of real estate properties found at the top
                of the search results page.
            </IconListItem>
            <IconListItem>
                This helps to save users&apos; energy and encourages them to search for
                real estate properties for extended periods without much difficulty.
                Additionally, by providing information such as the number of properties
                found, users can gain an understanding of current real estate market
                trends and streamline the search process for real estate properties they
                want.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg3} />
        </PortfolioSectionContainer>
    );
};

const ItemSortingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To prepare for the large number of real estate listings on the website, we
                added a &ldquo;sort by&rdquo; filter to the search results based on the
                user&apos;s search options. This allows users to view real estate listings
                in their preferred way.
            </IconListItem>
            <IconListItem>
                To provide a satisfying search experience for our users, we added various
                &ldquo;sort by&rdquo; options. We included sorting options such as
                inspections and auctions, which focus on real estate events. We also added
                sorting options for different ways of displaying real estate listings,
                including item search, list search, map search, and other options such as
                newest, A-Z name, Z-A name, and price.
            </IconListItem>
            <IconListItem>
                By giving users more control over their search results, we designed our
                platform to provide useful information quickly and efficiently.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg4} />
        </PortfolioSectionContainer>
    );
};

const ItemSideFilterContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We have included a filter feature on the left-hand side of the page,
                distinct from the brief search results bar situated at the top of the
                site. This feature allows users to select more detailed search options.
            </IconListItem>
            <IconListItem>
                The advantage of having this sidebar search filter is that it offers users
                a more granular level of control over their search criteria, allowing them
                to fine-tune their search results to meet their needs. This, in turn, can
                result in a more efficient and satisfying search experience for users.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg5} />
        </PortfolioSectionContainer>
    );
};

const ItemToggleCollapseContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To make it more convenient for users to navigate the numerous search
                options contained within the sidebar search filter, we have placed a down
                icon button next to each category.
            </IconListItem>
            <IconListItem>
                This design feature allows users to collapse and hide a category when they
                are not using it, providing them with a more streamlined and intuitive
                search experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg6} />
        </PortfolioSectionContainer>
    );
};

const ItemThumbnailContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Through the incorporation of extra details on each real estate
                listing&apos;s thumbnail, our platform is designed to minimise the time
                taken for user&apos;s search. Information such as the posting date, a
                synopsis of the property&apos;s attributes, cost, and agent details are
                presented on the thumbnail. Consequently, users can promptly assess each
                property without having to navigate into individual listings.
            </IconListItem>
            <IconListItem>
                This approach enhances not only the efficiency and satisfaction of the
                user&apos;s search experience, but also augments overall experience of
                interacting with the website.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg7} />
        </PortfolioSectionContainer>
    );
};
export const ItemContentData = [
    {
        title: 'Item search journey',
        content: <ItemJourneyContent />,
    },
    {
        title: 'Adjustable search results bar for efficient search experience',
        content: <ItemSearchContent />,
    },
    {
        title: 'Designing to reduce website fatigue and increase user engagement',
        content: <ItemFatigueContent />,
    },
    {
        title: 'Sorting and filter options to improve user search experience',
        content: <ItemSortingContent />,
    },
    {
        title: 'Side Search Filter for Better Search Experience',
        content: <ItemSideFilterContent />,
    },
    {
        title: 'Toggle collapse for a better filter experience',
        content: <ItemToggleCollapseContent />,
    },
    {
        title: 'Thumbnail design for a satisfying search experience with fewer clicks',
        content: <ItemThumbnailContent />,
    },
];

export const ItemContent = () => <PortfolioSubSection subsections={ItemContentData} />;

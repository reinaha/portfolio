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
                When designing the home page, the most important aspect that we focused on
                was making it easier and more intuitive for users to find properties.
            </IconListItem>
            <IconListItem>
                To achieve this, we placed the search bar, search filters, and categories
                in easy-to-find locations. Initially, we proposed an idea to only include
                the search bar on the home page to emphasize its functionality. However,
                we realized that new users of real estate search apps might find it
                confusing to know what to search for and how to do it. Additionally, the
                client wanted to showcase a variety of properties on the home page itself.
            </IconListItem>
            <IconListItem>
                Therefore, we decided to maintain the familiar format of websites with
                search functions to make it easy for users to navigate, even if they were
                using a real estate search app for the first time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const ItemSearchContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The search bar at the top of the items search page allows users to view
                real-time search results based on the options they selected during their
                previous search. This feature helps users check the details of their
                previous search and make quick adjustments to their search criteria if
                needed.
            </IconListItem>
            <IconListItem>
                For example, if a user initially searched for properties in a specific
                location and then decided to adjust their search to include more bedrooms,
                they can simply update the number of bedrooms in the search bar and view
                the updated results without having to start a new search from scratch.
                This feature provides users with a more efficient and personalized search
                experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg2} />
        </PortfolioSectionContainer>
    );
};

const ItemFatigueContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing search list pages, one of the main focuses was on helping
                users navigate through a large amount of information and continue to check
                real estate listings for longer periods without getting fatigued.
            </IconListItem>
            <IconListItem>
                To reduce user fatigue on the website, our goal was to help users think as
                little as possible. One of the prime examples of this is displaying a
                summary of search options and the number of real estate properties found
                at the top of the search results page.
            </IconListItem>
            <IconListItem>
                By doing so, we can prevent users from wasting unnecessary energy and
                encourage them to search for real estate properties for longer periods.
            </IconListItem>
            <IconListItem>
                Additionally, by displaying brief information such as the number of
                properties found, users can quickly gain insight into the current real
                estate market trends and streamline the real estate property search
                process.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg3} />
        </PortfolioSectionContainer>
    );
};

const ItemSortingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To prepare for the large amount of real estate listings available in the
                market, we added a &ldquo;sort by&rdquo; filter to the search results
                based on the user&apos;s search options. This enables users to view real
                estate listings in the way they prefer.
            </IconListItem>
            <IconListItem>
                In order to provide a satisfying search experience for our users, we added
                various &lsquo;sort by&rdquo; options.
            </IconListItem>
            <IconListItem>
                We included sorting options such as inspections and auctions that focus on
                real estate events, as well as sorting options for different ways of
                displaying real estate listings, including item search, list search, map
                search, and other options such as newest, A-Z name, Z-A name, price, etc.
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
                We have placed a filter feature on the left side of the page, separate
                from the brief search results bar located at the top of the site, which
                allows users to select more detailed options.
            </IconListItem>
            <IconListItem>
                The benefit of having this sidebar search filter is that it provides users
                with a more granular level of control over their search criteria, enabling
                them to refine their search results more precisely to meet their specific
                needs. This can lead to a more efficient and satisfying search experience
                for users.
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
                By adding brief information to the thumbnail of each real estate listing
                before examining the detailed information, we have designed the site to
                reduce unnecessary clicks and shorten users&apos; search time.
            </IconListItem>
            <IconListItem>
                Information such as the time the listing was posted, a brief summary of
                the property&apos;s specifications, price, and agent information is
                displayed on the image thumbnail, allowing users to quickly and easily
                evaluate each property without having to click into each individual
                listing.
            </IconListItem>
            <IconListItem>
                This not only makes the user&apos;s search experience more efficient and
                satisfying, but also increases the overall site satisfaction.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebItemsearchImg7} />
        </PortfolioSectionContainer>
    );
};
export const ItemContentData = [
    {
        title: 'Item view journey',
        content: <ItemJourneyContent />,
    },
    {
        title: 'Adjustable search results bar for efficient search experience',
        content: <ItemSearchContent />,
    },
    {
        title: 'Designing to reduce website fatigue and encourage longer usage',
        content: <ItemFatigueContent />,
    },
    {
        title: 'Various sorting filter options for a satisfying user search experience',
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

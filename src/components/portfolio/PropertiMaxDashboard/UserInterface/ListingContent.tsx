import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardListingImg1,
    PropertiMaxDashboardListingImg2,
    PropertiMaxDashboardListingImg3,
    PropertiMaxDashboardListingImg4,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                This page is a page that manages real estate property post lists and
                includes functions such as managing existing posts on the site or creating
                new posts.
            </IconListItem>
            <IconListItem>
                As this page is centered around posts, tabs such as all pages, published,
                drafts, and discontinued are provided depending on the status of each
                post.
            </IconListItem>
            <IconListItem>
                In a page where functions such as adding or editing posts are the center,
                efforts were made to emphasize important parts of the design and not to
                highlight the rest. Important functions such as &lsquo;Add New Post&rsquo;
                and &lsquo;Selection Form&rsquo; were designed to stand out, and strong
                colors were used for changes that occur when using the function to allow
                users to focus on the function.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg1} />
        </PortfolioSectionContainer>
    );
};

const ThumbnailContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To efficiently manage the real estate property post list, we included as
                much information as possible about the property in the thumbnail so that
                users can quickly understand the content of the updated post without
                unnecessary clicks, and easily manage the information.
            </IconListItem>
            <IconListItem>
                Additionally, we created options to manage the post list overall or
                individually. A checkbox is placed on the left side of each post thumbnail
                so that users can manage multiple posts at once. On the other hand, a
                small menu button is added to the right side of each post so that users
                can manage each post individually, such as editing, checking details, or
                deleting.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg2} />
        </PortfolioSectionContainer>
    );
};

const SidebarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The page for adding or editing a post is divided into two main sections.
                On the left, there is an area where users can write or edit the
                post&apos;s title, content, and photos, while on the right, there is a
                form for entering information about the real estate property.
            </IconListItem>
            <IconListItem>
                This design allows users to simultaneously view and edit real estate
                property information on the right while writing a post about it on the
                left, eliminating the need to constantly check the property information
                during the post creation process. Additionally, it enables users to
                double-check the information even while performing other tasks, in case
                any errors were made during the initial entry.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg3} />
        </PortfolioSectionContainer>
    );
};

const LoadSavedContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When users write a real estate post, they can click the &ldquo;load saved
                property&rdquo; button located at the top to retrieve real estate
                information they have already uploaded to &ldquo;my properties.&rdquo;
                This design feature allows users to easily and automatically fill in real
                estate information when writing a post, reducing the time it takes to
                create a real estate post.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg4} />
        </PortfolioSectionContainer>
    );
};

export const ListingContentData = [
    {
        title: 'Listing journey',
        content: <JourneyContent />,
    },
    {
        title: 'Efficient Management of Real Estate Listings through Thumbnail and Option Design',
        content: <ThumbnailContent />,
    },
    {
        title: 'Design to reduce post creation mistakes using the sidebar',
        content: <SidebarContent />,
    },
    {
        title: "Time-saving 'load' feature for real estate property post creation",
        content: <LoadSavedContent />,
    },
];

export const ListingContent = () => (
    <PortfolioSubSection subsections={ListingContentData} />
);

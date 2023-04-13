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
                This page provides a comprehensive real estate property post list
                management system that includes essential functions like creating and
                editing posts. Depending on the status of each post, users can easily
                navigate between tabs such as all pages, published, drafts, and
                discontinued.
            </IconListItem>
            <IconListItem>
                Our design philosophy emphasises highlighting important features like the
                &ldquo;Add New Post&rdquo; and &ldquo;Selection Form&rdquo; while keeping
                everything else unobtrusive.
            </IconListItem>
            <IconListItem>
                We have used strong, contrasting colours to make it easy for users to
                focus on important functions and to draw attention to any changes that
                occur while using them.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg1} />
        </PortfolioSectionContainer>
    );
};

const ThumbnailContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We know that managing real estate property posts can be a hassle, which is
                why we&apos;ve designed our platform to help you work more efficiently.
                Our thumbnail and option design includes as much information as possible
                about each property, so you can quickly understand each post without
                unnecessary clicks. Plus, we&apos;ve made it easy to manage posts
                individually or as a group. Simply use the checkboxes on the left of each
                thumbnail to manage multiple posts at once, or the menu button on the
                right to edit, check details, or delete each post individually.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg2} />
        </PortfolioSectionContainer>
    );
};

const SidebarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We&apos;ve divided the post creation and editing page into two sections.
                The left area is where you can write or edit your post&apos;s title,
                content, and photos, while the right section is where you can enter
                information about the real estate property.
            </IconListItem>
            <IconListItem>
                This design makes it possible to simultaneously view and edit your
                property information while writing your post, saving you time and
                preventing errors. You can even double-check the information while
                performing other tasks, in case any mistakes were made during the initial
                entry.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardListingImg3} />
        </PortfolioSectionContainer>
    );
};

const LoadSavedContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Writing a real estate post is now even quicker with our &ldquo;load saved
                property&rdquo; feature. Simply click the button located at the top of the
                page to retrieve real estate information you&apos;ve previously uploaded
                to &ldquo;my properties.&rdquo; This design feature allows you to easily
                and automatically fill in your post with your saved information, reducing
                the time it takes to create a real estate post.
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
        title: 'Streamlined real estate listings management with thumbnail and option design',
        content: <ThumbnailContent />,
    },
    {
        title: 'Design that reduces post creation mistakes with the sidebar',
        content: <SidebarContent />,
    },
    {
        title: "Time-saving 'Load' feature for real estate property post creation",
        content: <LoadSavedContent />,
    },
];

export const ListingContent = () => (
    <PortfolioSubSection subsections={ListingContentData} />
);

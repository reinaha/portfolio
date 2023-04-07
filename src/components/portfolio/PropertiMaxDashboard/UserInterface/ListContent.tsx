import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxWebListsearchImg1,
    PropertiMaxWebListsearchImg2,
} from '@/images/PropertiMaxWeb';

const ListJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We designed a page that displays real estate listings in a list format,
                which highlights the property information more effectively compared to the
                image-focused layout of the item search results.
            </IconListItem>
            <IconListItem>
                To design the list search results page, we considered what users would
                expect from this page as someone who prefers the list view. Given the
                characteristic of the list format that allows for easier comparison of
                property information, we designed the page by placing the basic
                information of each property at the center of the list.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebListsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const ListNavigationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                In Item search results, the &ldquo;agent contact&rdquo; button was
                difficult to include in the thumbnail layout. However, with the expanded
                layout space available in list search results, we were able to add this
                button to provide an easy way for users to contact agents along with the
                real estate property information.
            </IconListItem>
            <IconListItem>
                This design decision was made to provide a better user experience by
                offering a simple way for users to get in touch with agents.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebListsearchImg2} />
        </PortfolioSectionContainer>
    );
};

export const ListContentData = [
    {
        title: 'List view journey',
        content: <ListJourneyContent />,
    },
    {
        title: 'Agent contact button for better user experience',
        content: <ListNavigationContent />,
    },
];

export const ListContent = () => <PortfolioSubSection subsections={ListContentData} />;

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
                We created a page that showcases real estate listings in a list format,
                which places more emphasis on property information compared to the
                image-heavy layout of the item search results.
            </IconListItem>
            <IconListItem>
                When designing the list search results page, we put ourselves in the shoes
                of users who prefer the list view. Understanding that this format makes it
                easier to compare property information, we centred the basic details of
                each property right where users need them most.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebListsearchImg1} />
        </PortfolioSectionContainer>
    );
};

const ListNavigationContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                While incorporating the “agent contact” button into the thumbnail layout
                of our item search results proved difficult, we were able to take full
                advantage of the expanded layout space of our detailed list search results
                to implement this feature seamlessly.
            </IconListItem>
            <IconListItem>
                By adding this button alongside the real estate property information,
                users can easily get in touch with agents. Ultimately, this design
                decision was made with the user&apos;s convenience in mind and to deliver
                an even more satisfying search experience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebListsearchImg2} />
        </PortfolioSectionContainer>
    );
};

export const ListContentData = [
    {
        title: 'List search journey',
        content: <ListJourneyContent />,
    },
    {
        title: 'Agent contact button for better user experience',
        content: <ListNavigationContent />,
    },
];

export const ListContent = () => <PortfolioSubSection subsections={ListContentData} />;

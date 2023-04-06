import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppMysavedImg1,
    PropertiMaxAppMysavedImg2,
    PropertiMaxAppMysavedImg3,
} from '@/images/PropertiMaxApp';

const SavedListJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The goal of creating a page where users can easily view their saved
                property or agent lists led us to design the Saved Properties page. To
                help users quickly check their many saved lists, we added a filter
                function by date, region, and property options, allowing them to easily
                find the properties they want.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMysavedImg1} />
        </PortfolioSectionContainer>
    );
};

const SavedListTabsContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Originally in the planned site map, saved properties and saved agents were
                designed as separate pages. However, as the concept of &ldquo;saved
                lists&rdquo; is the same from the user&apos;s perspective, it was deemed
                unnecessary to split them into separate pages and could potentially
                inconvenience users. Therefore, we decided to integrate saved properties
                and saved agents into one page.
            </IconListItem>
            <IconListItem>
                To accommodate the different categories of saved lists on one page, we
                added switch tab at the top of the app to organize saved properties and
                saved agents.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMysavedImg2} />
        </PortfolioSectionContainer>
    );
};

const SavedListReduceClicksContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Since the most essential function for users in the saved agent list was to
                contact the agent, we needed a design that allowed them to execute their
                desired action quickly without unnecessary clicks.
            </IconListItem>
            <IconListItem>
                Therefore, we designed it with a simple agent introduction and message and
                call buttons placed on the right.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppMysavedImg3} />
        </PortfolioSectionContainer>
    );
};

export const SavedListContentData = [
    {
        title: 'My saved list journey',
        content: <SavedListJourneyContent />,
    },
    {
        title: 'Combining saved properties and saved agents into one page using tab switching',
        content: <SavedListTabsContent />,
    },
    {
        title: 'Design to reduce unnecessary clicks and help users achieve their goals quickly',
        content: <SavedListReduceClicksContent />,
    },
];

export const SavedListContent = () => (
    <PortfolioSubSection subsections={SavedListContentData} />
);

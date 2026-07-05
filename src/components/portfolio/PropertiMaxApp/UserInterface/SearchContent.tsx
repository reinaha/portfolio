import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppSearchagentImg1,
    PropertiMaxAppSearchagentImg2,
    PropertiMaxAppSearchagentImg3,
} from '@/images/PropertiMaxApp';

const SearchJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We&apos;ve put a lot of thought into how property buyers would want to use
                the agent page.
            </IconListItem>
            <IconListItem>
                Depending on the buyer&apos;s preference, they may want an agent of the
                same gender or a different gender, an agent of a particular race, or
                someone who has experience in real estate transactions. Based on this
                background, we designed the agent list to show information that indirectly
                showcases an agent&apos;s background.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppSearchagentImg1} />
        </PortfolioSectionContainer>
    );
};

const SearchSimplifyingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing the Agent Profile page, the most challenging part was
                creating an introduction section that is necessary for users to understand
                the agent but can become unnecessarily lengthy, making it difficult to
                find other important information.
            </IconListItem>
            <IconListItem>
                To solve this issue, we created a &ldquo;Read more&rdquo; button in the
                introduction section, allowing users to check the summary first and then
                choose to view the full version of the introduction.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppSearchagentImg2} />
        </PortfolioSectionContainer>
    );
};

const SearchHighlightingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Similar to the Property detail page, we also fixed the most important
                contact section of the Agent detail page to the bottom of the app, so that
                users can easily contact the agents if they wanted, even among a large
                amount of content.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppSearchagentImg3} />
        </PortfolioSectionContainer>
    );
};

export const SearchContentData = [
    {
        title: 'Search agents journey',
        content: <SearchJourneyContent />,
    },
    {
        title: 'Simplifying long content for better design',
        content: <SearchSimplifyingContent />,
    },
    {
        title: 'Highlighting important elements among a lot of content',
        content: <SearchHighlightingContent />,
    },
];

export const SearchContent = () => (
    <PortfolioSubSection subsections={SearchContentData} />
);

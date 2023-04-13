import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppFilterImg1,
    PropertiMaxAppFilterImg2,
    PropertiMaxAppFilterImg3,
} from '@/images/PropertiMaxApp';

const FilterJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The most challenging aspect of designing this app was the search filter
                page. Due to the nature of the real estate industry, each listing comes
                with numerous options by default. By simply listing them all on the filter
                page, users may easily feel fatigued and find the app difficult to use.
                Therefore, various search options had to be designed in a way that was
                simple and interesting.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg1} />
        </PortfolioSectionContainer>
    );
};

const FilterResearchContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Before designing the filter page, it was important to analyse our target
                audience and determine how they prioritised real estate properties in
                their minds.
            </IconListItem>
            <IconListItem>
                Based on our analysis, the target audience prioritised the following real
                estate options in order: &ldquo;Location → Price → Number of Bedrooms and
                Bathrooms&rdquo;. Other options, such as property features and sales
                methods, were deemed as &ldquo;nice to have&rdquo; by many users.
            </IconListItem>
            <IconListItem>
                Additionally, the most commonly used filters when searching for a property
                were &ldquo;Location → Property Type → Price Range&rdquo;.
            </IconListItem>
            <IconListItem>
                Taking these findings into account, the filter page was designed with a
                switch bar for the &ldquo;Rent or Buy&rdquo; parent category at the top,
                followed by &ldquo;Location → Property Type → Price Range → Rooms and Beds
                → Other Options&rdquo; below it.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg2} />
        </PortfolioSectionContainer>
    );
};

const FilterIntuitiveContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The overall design of the interface aimed to prevent users from feeling
                bored while using the filter by incorporating various types of components
                to visually stimulate the user.
            </IconListItem>
            <IconListItem>
                A graph that indicates the number of properties in the price range was
                added on top of the basic slider bar design of the price range bar. In the
                rooms and beds section, a range slider was used to allow users to set the
                maximum and minimum value desired quickly and intuitively.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg3} />
        </PortfolioSectionContainer>
    );
};

export const FilterContentData = [
    {
        title: 'Filter journey',
        content: <FilterJourneyContent />,
    },
    {
        title: 'User research on search filter priority',
        content: <FilterResearchContent />,
    },
    {
        title: 'Intuitive and interesting designs of various components',
        content: <FilterIntuitiveContent />,
    },
];

export const FilterContent = () => (
    <PortfolioSubSection subsections={FilterContentData} />
);

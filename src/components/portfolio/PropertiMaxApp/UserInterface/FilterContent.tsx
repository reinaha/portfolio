import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppFilterImg1,
    PropertiMaxAppFilterImg2,
    PropertiMaxAppFilterImg3,
} from '@/images/PropertiMaxApp';

const FilterJourneyContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                The most challenging aspect of designing this app was the search filter
                page. Due to the nature of the real estate industry, each item comes with
                various options by default. If we simply list them all on the filter page,
                users may easily feel fatigued and find the app difficult to use.
                Therefore, our goal was to design various search options in a way that is
                easy and not boring.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg1} />
        </PortfolioContainer>
    );
};

const FilterResearchContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                Before designing the filter page, it was important to analyze our target
                audience and determine how they prioritize real estate properties in their
                minds.
            </IconListItem>
            <IconListItem>
                We focused on analyzing which filters our target audience prioritizes when
                searching for a single real estate property, which options within the
                property listing are most important to users, and the priority of these
                options.
            </IconListItem>
            <IconListItem>
                Based on our analysis, our target audience prioritized the following real
                estate options in order: &quot;Location → Price → Number of Bedrooms and
                Bathrooms&quot;. Other options, such as property features and sales
                methods, were deemed as &quot;nice to have&quot; by many users.
            </IconListItem>
            <IconListItem>
                Additionally, the most commonly clicked filters when searching for a
                property were &quot;Location → Property Type → Price Range&quot;.
            </IconListItem>
            <IconListItem>
                Taking these findings into account, we designed the filter page with a
                switch bar for the &quot;Rent or Buy&quot; parent category at the top,
                followed by &quot;Location → Property Type → Price Range → Rooms and Beds
                → Other Options&quot; below it.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg2} />
        </PortfolioContainer>
    );
};

const FilterIntuitiveContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                In terms of design, we aimed to prevent users from feeling bored while
                using the filter by incorporating various types of components to add an
                element of fun.
            </IconListItem>
            <IconListItem>
                For the price range bar, we added a graph that displays the up and down of
                the price to the basic slider bar design. In the rooms and beds section,
                we designed a range slider to allow users to quickly and enjoyably set the
                numbers they want.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppFilterImg3} />
        </PortfolioContainer>
    );
};

export const FilterContentData = [
    {
        title: 'Filter journey',
        content: <FilterJourneyContent />,
    },
    {
        title: 'User research on real estate option priority for effective search filters',
        content: <FilterResearchContent />,
    },
    {
        title: 'Designing intuitive and fun filters using various design components',
        content: <FilterIntuitiveContent />,
    },
];

export const FilterContent = () => (
    <PortfolioSubSection subsections={FilterContentData} />
);

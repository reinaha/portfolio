import { IconListItem } from '@/components';
import {
    PortfolioContainer,
    PortfolioImage,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppHomeImg1,
    PropertiMaxAppHomeImg2,
    PropertiMaxAppHomeImg3,
} from '@/images/PropertiMaxApp';

const HomeJourneyContent = () => {
    return (
        <PortfolioContainer>
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
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg1} />
        </PortfolioContainer>
    );
};

const SearchBarContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                We designed the search bar, search filters, and categories to be
                prominently displayed at the top of the app&apos;s homepage, making it
                easier for users to find and conduct property searches.
            </IconListItem>
            <IconListItem>
                By positioning these elements at the top of the screen, we aimed to
                encourage users to search for properties more easily and intuitively.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg2} />
        </PortfolioContainer>
    );
};

const CategoryMenuContent = () => {
    return (
        <PortfolioContainer>
            <IconListItem>
                The client requested that we display a total of seven real estate
                categories on the homepage: house, apartment, townhouse, unit, lifestyle,
                land, and all. Additionally, they wanted to display a diverse range of
                properties on the homepage.
            </IconListItem>
            <IconListItem>
                We found it challenging to simply list all the categories in a single row,
                so we designed the category tab to be swiped right to find the desired
                category. The category tab order was arranged according to the most
                preferred property types by our target audience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg3} />
        </PortfolioContainer>
    );
};

export const HomeContentData = [
    {
        title: 'Home journey',
        content: <HomeJourneyContent />,
    },
    {
        title: 'Positioning the search bar to encourage user searches',
        content: <SearchBarContent />,
    },
    {
        title: 'Simplifying the display of various category lists',
        content: <CategoryMenuContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

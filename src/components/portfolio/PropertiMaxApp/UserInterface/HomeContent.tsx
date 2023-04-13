import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxAppHomeImg1,
    PropertiMaxAppHomeImg2,
    PropertiMaxAppHomeImg3,
} from '@/images/PropertiMaxApp';

const HomeJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing the home page, the main focus was on making it easier and
                more intuitive for users to find properties.
            </IconListItem>
            <IconListItem>
                To achieve this, the search bar, search filters, and categories were
                placed in easy-to-find locations. Initial idea only included the search
                bar on the home page to emphasise its functionality. However, I came to a
                realisation that new users of real estate search apps might not know what
                keywords to search for. Additionally, the client wanted to showcase a
                variety of properties on the home page.
            </IconListItem>
            <IconListItem>
                Therefore, the design was based on the familiar design of websites with
                search functions to make it easy for users to navigate, even if they were
                using a real estate search app for the first time.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg1} />
        </PortfolioSectionContainer>
    );
};

const SearchBarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The search bar, search filters, and categories were designed to be
                displayed at the top of the app&apos;s homepage, making it easier and
                intuitive for users to find and use property searches.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryMenuContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The client requested that a total of seven real estate categories should
                be displayed on the homepage: house, apartment, townhouse, unit,
                lifestyle, land, and all. Additionally, the client wanted to display a
                diverse range of properties on the homepage.
            </IconListItem>
            <IconListItem>
                It was not feasible to simply list all the categories in a single row, so
                the category tab was designed to be swipeable horizontally to find the
                desired category. The order of the category tab was determined by the most
                commonly searched property types by the target audience.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxAppHomeImg3} />
        </PortfolioSectionContainer>
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
        title: 'Simplifying the category lists',
        content: <CategoryMenuContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

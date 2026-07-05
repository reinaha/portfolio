import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    HomeCategoryMenu,
    HomeClinicChange,
    HomeDeliveryStatus,
    HomeJourney,
    HomeSubcategories,
} from '@/images';

const HomeJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                When designing the home screen, the most important consideration was to
                make it easy for users to search for products and quickly find categories.
                Therefore, the search bar was placed at the top and the important
                categories in the middle of the home screen. In addition, to show as many
                discounted items as possible, a list of sale-related items were placed in
                the bottom section of the screen.
            </IconListItem>
            <PortfolioImage imageSrc={HomeJourney} />
        </PortfolioSectionContainer>
    );
};

const ClinicChangeContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To accommodate for the fact that the target users - dental professionals,
                often manage multiple clinics rather than just a single clinic,
                &ldquo;Change Clinic&rdquo; button was placed at the top of the app to
                easily switch between the delivery location of the user session.
            </IconListItem>
            <IconListItem>
                Users can easily change their preferred delivery clinic by clicking on the
                drop-down button on the top. In addition, they can also change, add, or
                delete clinics through the &ldquo;edit detail&rdquo; option.
            </IconListItem>
            <PortfolioImage imageSrc={HomeClinicChange} />
        </PortfolioSectionContainer>
    );
};

const CategoryMenuContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The biggest challenge when designing the app was figuring out how to
                organise and display a large number of products in a simple and intuitive
                way. With over 2,000 products to display, it was crucial to reorganise the
                categories and present them in a streamlined manner.
            </IconListItem>
            <IconListItem>
                In addition to displaying categories as tab buttons on the home screen,
                &ldquo;See all&rdquo; button was added to take users to a separate menu
                page where they can view all categories at once.
            </IconListItem>
            <IconListItem>
                To ensure that users can access the category menu from any page, the
                app&apos;s bottom menu bar was designed to include a category (menu)
                button that takes users to the category page.
            </IconListItem>
            <PortfolioImage imageSrc={HomeCategoryMenu} />
        </PortfolioSectionContainer>
    );
};

const SubcategoriesContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                From client feedback that suggested all product categories should be
                visible at once, subcategories were added under parent categories and a
                drop-down button was designed to display subcategories when pressed.
            </IconListItem>
            <PortfolioImage imageSrc={HomeSubcategories} />
        </PortfolioSectionContainer>
    );
};

const ReducingPhoneEnquiriesContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To address one of the most frequently asked questions by existing clients,
                we placed information about the latest order status in the centre of our
                home screen. This aimed to reduce the number of customer phone inquiries
                regarding delivery status.
            </IconListItem>
            <IconListItem>
                Users who have placed orders can check their purchase history and the
                estimated delivery date of the products they ordered through the app.
            </IconListItem>
            <PortfolioImage imageSrc={HomeDeliveryStatus} />
        </PortfolioSectionContainer>
    );
};

export const HomeContentData = [
    {
        title: 'Home journey',
        content: <HomeJourneyContent />,
    },
    {
        title: 'Interface to change delivery clinic',
        content: <ClinicChangeContent />,
    },
    {
        title: 'Easily accessible category menu',
        content: <CategoryMenuContent />,
    },
    {
        title: 'Easy-to-find subcategories',
        content: <SubcategoriesContent />,
    },
    {
        title: 'Transparent product delivery information',
        content: <ReducingPhoneEnquiriesContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

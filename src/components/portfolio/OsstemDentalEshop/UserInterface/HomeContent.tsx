import { Box, Stack, Typography } from '@mui/material';
import HomeCategoryMenu from '@resources/OsstemDentalEshop/HomeCategoryMenu.jpg';
import HomeClinicChange from '@resources/OsstemDentalEshop/HomeClinicChange.jpg';
import HomeDeliveryStatus from '@resources/OsstemDentalEshop/HomeDeliveryStatus.jpg';
import HomeJourney from '@resources/OsstemDentalEshop/HomeJourney.jpg';
import HomeMain from '@resources/OsstemDentalEshop/HomeMain.jpg';
import HomeMain2 from '@resources/OsstemDentalEshop/HomeMain2.jpg';
import HomeSubcategories from '@resources/OsstemDentalEshop/HomeSubcategories.jpg';

import { JourneyContainer, PortfolioContainer } from '@/components/portfolio';

import { PortfolioFullWidthImage } from '../../portfolioBricks/PortfolioFullWidthImage';
import { PortfolioSection } from '../../PortfolioSection';

export const HomeContent = () => {
    return (
        <Stack spacing={4}>
            <PortfolioFullWidthImage image={HomeMain2} marginBottom={3} />
            <PortfolioSection
                title="Home journey"
                content={<HomeJourneyContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Target-oriented clinic change tab"
                content={<ClinicChangeContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Category menu for finding products at a glance"
                content={<CategoryMenuContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Easy-to-find subcategories"
                content={<SubcategoriesContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Reducing phone inquiries through product delivery status"
                content={<ReducingPhoneEnquiriesContent />}
                headerVariant="h4"
            />
        </Stack>
    );
};

const HomeJourneyContent = () => {
    return (
        <JourneyContainer image={HomeJourney}>
            <Typography>
                When designing the home page, the most important consideration was to make
                it easy for customers to search for products and quickly find categories.
                Therefore, we placed the search bar at the top and the important
                categories in the middle of the home page. In addition, we aimed to show
                as many discounted items as possible, so we added a list of sale-related
                items at the bottom.
            </Typography>
        </JourneyContainer>
    );
};

const ClinicChangeContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To accommodate the fact that our target customers, dental professionals,
                often manage multiple clinics rather than just one, we have placed the
                &ldquo;Change Clinic&rdquo; tab at the top of our app so that they can
                easily switch the purchasing location of our products.
            </Typography>
            <Typography>
                Users can easily change their preferred delivery clinic by clicking the
                drop-down button on the top tab. In addition, they can also change, add,
                or delete clinics through &ldquo;edit detail&rdquo; option.
            </Typography>
            <Box component="img" alt="Cover" src={HomeClinicChange} />
        </PortfolioContainer>
    );
};

const CategoryMenuContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                The biggest challenge in designing this app was figuring out how to
                showcase a large number of products in a simple and intuitive way. With
                over 2,000 products to display, it was crucial to reorganize the
                categories and present them in a streamlined manner.
            </Typography>
            <Typography>
                In addition to displaying categories as tab buttons on the homepage, we
                added a &ldquo;See all&rdquo; button that takes users to a separate menu
                page where they can view all categories at once.
            </Typography>
            <Typography>
                To ensure that users can access the category menu from any page, we
                designed the app&apos;s bottom menu bar to include a category (menu)
                button that takes users to the category page when clicked.
            </Typography>
            <Box component="img" alt="Cover" src={HomeCategoryMenu} />
        </PortfolioContainer>
    );
};

const SubcategoriesContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                Due to customer feedback that they wanted to see all product categories at
                once, despite having a large number of products, we added subcategories
                under parent categories and designed a drop-down button to display
                subcategories when clicked.
            </Typography>
            <Box component="img" alt="Cover" src={HomeSubcategories} />
        </PortfolioContainer>
    );
};

const ReducingPhoneEnquiriesContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To address one of the most frequently asked questions by existing
                customers, we placed information about the product delivery period in the
                center of our homepage. By doing so, we aimed to reduce the number of
                customer phone inquiries.
            </Typography>
            <Typography>
                Customers who have placed orders can check not only their purchase history
                but also the delivery period of the products they ordered through our app.
            </Typography>
            <Box component="img" alt="Cover" src={HomeDeliveryStatus} />
        </PortfolioContainer>
    );
};

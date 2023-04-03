import { Box, Stack, Typography } from '@mui/material';
import ProductDescriptionButton from '@resources/OsstemDentalEshop/ProductDescriptionButton.jpg';
import ProductJourney from '@resources/OsstemDentalEshop/ProductJourney.jpg';
import ProductMain from '@resources/OsstemDentalEshop/ProductMain.jpg';
import ProductOptionTab from '@resources/OsstemDentalEshop/ProductOptionTab.jpg';
import ProductSubcategory from '@resources/OsstemDentalEshop/ProductSubcategory.jpg';

import { JourneyContainer, PortfolioContainer } from '@/components';

import { PortfolioFullWidthImage } from '../../portfolioBricks/PortfolioFullWidthImage';
import { PortfolioSection } from '../../PortfolioSection';

export const ProductContent = () => {
    return (
        <Stack spacing={4}>
            <PortfolioFullWidthImage image={ProductMain} marginBottom={1.5} />
            <PortfolioSection
                title="Product journey"
                content={<ProductJourneyContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Categorizing products through subcategory tabs"
                content={<ProductSubcategoryContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Product option tabs that reduce the number of product listings"
                content={<ProductOptionContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Concise product description button for extensive content"
                content={<ProductDescriptionButtonContent />}
                headerVariant="h4"
            />
        </Stack>
    );
};

const ProductJourneyContent = () => {
    return (
        <JourneyContainer image={ProductJourney}>
            <Typography>
                To make it easy for users to find products among a large number of
                options, we made a significant effort to keep the overall design as simple
                as possible. We maintained a clean and minimalistic design while using a
                bold, orange color for the category section to make it stand out and
                easier for users to navigate.
            </Typography>
        </JourneyContainer>
    );
};

const ProductSubcategoryContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                As our product selection grew, it became difficult for users to easily
                find the products they were looking for. To address this issue, we
                recognized the importance of categorizing our products in a more granular
                way. We achieved this by adding subcategories as tabs under each parent
                category, making it easier for users to recognize and find products within
                those subcategories.
            </Typography>
            <Typography>
                To further reduce user inconvenience, we included the number of products
                in each subcategory tab on the left-hand side, enabling users to
                anticipate the number of products within each subcategory without having
                to navigate directly to it.
            </Typography>
            <Box component="img" alt="Cover" src={ProductSubcategory} />
        </PortfolioContainer>
    );
};

const ProductOptionContent = () => {
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
            <Box component="img" alt="Cover" src={ProductOptionTab} />
        </PortfolioContainer>
    );
};

const ProductDescriptionButtonContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                Due to customer feedback that they wanted to see all product categories at
                once, despite having a large number of products, we added subcategories
                under parent categories and designed a drop-down button to display
                subcategories when clicked.
            </Typography>
            <Box component="img" alt="Cover" src={ProductDescriptionButton} />
        </PortfolioContainer>
    );
};

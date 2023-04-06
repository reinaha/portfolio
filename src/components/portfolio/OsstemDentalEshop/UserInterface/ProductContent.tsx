import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';
import {
    ProductDescriptionButton,
    ProductJourney,
    ProductOptionTab,
    ProductSubcategory,
} from '@/images';

const ProductJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To make it easy for users to find products among a large number of
                options, we made a significant effort to keep the overall design as simple
                as possible. We maintained a clean and minimalistic design while using a
                bold, orange color for the category section to make it stand out and
                easier for users to navigate.
            </IconListItem>
            <PortfolioImage imageSrc={ProductJourney} />
        </PortfolioSectionContainer>
    );
};

const ProductSubcategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As our product selection grew, it became difficult for users to easily
                find the products they were looking for. To address this issue, we
                recognized the importance of categorizing our products in a more granular
                way. We achieved this by adding subcategories as tabs under each parent
                category, making it easier for users to recognize and find products within
                those subcategories.
            </IconListItem>
            <IconListItem>
                To further reduce user inconvenience, we included the number of products
                in each subcategory tab on the left-hand side, enabling users to
                anticipate the number of products within each subcategory without having
                to navigate directly to it.
            </IconListItem>
            <PortfolioImage imageSrc={ProductSubcategory} />
        </PortfolioSectionContainer>
    );
};

const ProductOptionContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The biggest challenge in designing this app was figuring out how to
                showcase a large number of products in a simple and intuitive way. With
                over 2,000 products to display, it was crucial to reorganize the
                categories and present them in a streamlined manner.
            </IconListItem>
            <IconListItem>
                In addition to displaying categories as tab buttons on the homepage, we
                added a &ldquo;See all&rdquo; button that takes users to a separate menu
                page where they can view all categories at once.
            </IconListItem>
            <IconListItem>
                To ensure that users can access the category menu from any page, we
                designed the app&apos;s bottom menu bar to include a category (menu)
                button that takes users to the category page when clicked.
            </IconListItem>
            <PortfolioImage imageSrc={ProductOptionTab} />
        </PortfolioSectionContainer>
    );
};

const ProductDescriptionButtonContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Due to customer feedback that they wanted to see all product categories at
                once, despite having a large number of products, we added subcategories
                under parent categories and designed a drop-down button to display
                subcategories when clicked.
            </IconListItem>
            <PortfolioImage imageSrc={ProductDescriptionButton} />
        </PortfolioSectionContainer>
    );
};

export const ProductContentData = [
    {
        title: 'Product journey',
        content: <ProductJourneyContent />,
    },
    {
        title: 'Categorizing products through subcategory tabs',
        content: <ProductSubcategoryContent />,
    },
    {
        title: 'Product option tabs that reduce the number of product listings',
        content: <ProductOptionContent />,
    },
    {
        title: 'Concise product description button for extensive content',
        content: <ProductDescriptionButtonContent />,
    },
];

export const ProductContent = () => (
    <PortfolioSubSection subsections={ProductContentData} />
);

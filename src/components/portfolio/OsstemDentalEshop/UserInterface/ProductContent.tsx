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
                Significant effort was made to keep the overall design as simple as
                possible to make it easy for users to find products among a large number
                of options. Product screen maintains a clean and minimalistic design
                applied throughout the app but also adds bold, orange colour in the
                category section to make it stand out and make it easier for users to
                navigate.
            </IconListItem>
            <PortfolioImage imageSrc={ProductJourney} />
        </PortfolioSectionContainer>
    );
};

const ProductSubcategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As the selection of available products grew, it became difficult for users
                to find the products they were looking for. A more granular way of
                categorising the products was necessary to address this issue. This was
                achieved by adding subcategories as tabs under each major category, making
                it easier for users to recognise and find products within those
                subcategories.
            </IconListItem>
            <IconListItem>
                To further enhance user experience, the number of products available in
                each subcategory tab was displayed on the left-hand side, giving users a
                rough idea of the type of the products within each subcategory without
                having to navigate directly into it.
            </IconListItem>
            <PortfolioImage imageSrc={ProductSubcategory} />
        </PortfolioSectionContainer>
    );
};

const ProductOptionContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                For dental implant products, many products vary in length, size, and other
                characteristics, even if they are the same product. Originally in
                catalogues they were listed as separate products with different product
                codes. For the users it would take a long time to find the product they
                need if a similar approach was used for the app.
            </IconListItem>
            <IconListItem>
                To address this a system was designed to allow users to select a
                representative product and configure the options to match the specific
                product code they need.
            </IconListItem>
            <PortfolioImage imageSrc={ProductOptionTab} />
        </PortfolioSectionContainer>
    );
};

const ProductDescriptionButtonContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As expensive products often require a large amount of information in the
                product description, the product description was displayed in a collapsed
                form with a &ldquo;read more&rdquo; button to allow users to expand and
                check the full product details as required.
            </IconListItem>
            <IconListItem>
                When the description expands, the photo section from the product
                information is hidden and the core information, such as the product name,
                price, quantity, and options, were placed at the top. Additionally,
                &ldquo;add to cart&rdquo; button was fixed to the bottom of the screen to
                be always visible.
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
        title: 'Subcategory tabs under categories',
        content: <ProductSubcategoryContent />,
    },
    {
        title: 'Product option selection to reduce listed products',
        content: <ProductOptionContent />,
    },
    {
        title: 'Collapsed product description',
        content: <ProductDescriptionButtonContent />,
    },
];

export const ProductContent = () => (
    <PortfolioSubSection subsections={ProductContentData} />
);

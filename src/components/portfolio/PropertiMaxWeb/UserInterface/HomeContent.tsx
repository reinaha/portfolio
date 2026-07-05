import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxWebHomeImg1,
    PropertiMaxWebHomeImg2,
    PropertiMaxWebHomeImg3,
} from '@/images/PropertiMaxWeb';

const HomeJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                In designing our website, we focused on creating a simple and intuitive
                design that sets us apart from the complex user interface of our main
                competitors. Our objective was to make the PropertiMax website more
                user-friendly than our competitors, especially for our target audience of
                property buyers.
            </IconListItem>
            <IconListItem>
                To achieve this, we minimised the amount of text on our website as much as
                possible and used photos and icons as alternatives. We also eliminated
                unnecessary lists, such as recommended property listings, and emphasised
                the search function and real estate category menu, which are the most
                important parts of our website. By doing so, we aimed to reduce user
                fatigue and help users focus more on their search on our website.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebHomeImg1} />
        </PortfolioSectionContainer>
    );
};

const SearchBarContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Our objective was to design the website so that users can easily search
                for the desired real estate listings. To achieve this, it was necessary to
                conduct research on what priorities users had when selecting real estate
                options.
            </IconListItem>
            <IconListItem>
                User research revealed that users prioritise location, price, and the
                number of bedrooms and bathrooms when searching for real estate listings.
                Based on this information, we designed the search bar by placing the most
                important element, &ldquo;location,&rdquo; in the centre, followed by
                &ldquo;price,&rdquo; &ldquo;number of bedrooms,&rdquo; &ldquo;number of
                bathrooms,&rdquo; and &ldquo;parking space.&rdquo; For other relatively
                less important additional options, we created a &ldquo;Filter&rdquo;
                button that users can click to select.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebHomeImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryMenuContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                While users can set the property type through the drop-down menu in the
                search bar, we wanted to make it even faster and more convenient for users
                who want to view real estate listings. To address this, we categorised the
                real estate options and placed them in a separate menu for easy access.
            </IconListItem>
            <IconListItem>
                To make the category menu more user-friendly, we used relevant images for
                each category. This helps users better understand the different types of
                properties available on our website and navigate to the specific
                categories they are interested in. For example, we used images of
                townhouses for the &ldquo;Townhouse&rdquo; category and images of
                apartments for the &ldquo;Apartment&rdquo; category. This visual approach
                not only makes it easier for users to find what they are looking for, but
                it also adds an element of aesthetic appeal to the website.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxWebHomeImg3} />
        </PortfolioSectionContainer>
    );
};

export const HomeContentData = [
    {
        title: 'Home journey',
        content: <HomeJourneyContent />,
    },
    {
        title: 'Designing the search bar based on user research',
        content: <SearchBarContent />,
    },
    {
        title: 'Intuitive image category menu that enhances user comprehension',
        content: <CategoryMenuContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

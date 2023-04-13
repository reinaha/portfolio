import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                The biggest challenge was to condense a vast amount of information within
                real estate listings into a limited screen size of mobile devices. Icons
                were used where it was appropriate and each page was designed by dividing
                and arranging elements by the order of importance, since some pages
                unavoidably had to be longer.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Since real estate listings included various options, users could get
                confused about which page they are currently on when searching for a
                property with specific options. To avoid this, breadcrumbs were placed at
                the top of all search pages to assist user navigation.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                Since listings are created by individuals, there was a concern that the
                overall design of the app might not look consistent. Consistency in design
                was enforced by using consistent design elements wherever possible.
                User-uploaded real estate listing photos, prices, and other information
                were designed with restrictions in minimum and maximum size and text to
                ensure that they don&apos;t deviate from the overall design.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

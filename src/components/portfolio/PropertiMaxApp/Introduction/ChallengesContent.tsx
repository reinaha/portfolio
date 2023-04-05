import { PortfolioContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                One challenge was to condense a vast amount of information within real
                estate listings into a limited mobile screen size. We replaced parts that
                could be replaced with icons and designed each page with elements divided
                by priority and arranged in order of importance, since some pages
                unavoidably had to be longer.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Since real estate listings include various options, users could get
                confused about which page they are currently on when searching for a
                property with specific options. To avoid this, we placed breadcrumbs at
                the top of all search pages to help users navigate and avoid getting lost.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                Since it is a format where someone uploads new items in real-time rather
                than selling limited items, there was a concern that the overall design of
                the app might not look consistent if not careful. We tried to maintain
                consistency in design by using consistent design elements wherever
                possible. For user-uploaded real estate listing photos, prices, and other
                information, we designed them with minimum and maximum size and text to
                ensure that they don&apos;t deviate from the overall design framework.
            </IconListItem>
        </PortfolioContainer>
    );
};

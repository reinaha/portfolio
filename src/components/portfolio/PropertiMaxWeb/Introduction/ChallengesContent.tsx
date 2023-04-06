import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                As there were various types of real estate and their respective options,
                making it easy for users to navigate through them was one of our
                challenges. To address this, we conducted case studies on some of
                Australia&apos;s major real estate transaction websites.
            </IconListItem>
            <IconListItem iconType="noIcon">
                We placed the main menu bar at the top of the website, categorizing it
                into Residential, Rural, Commercial, Business, and Agent under parents
                navigation. The remaining sub-options were designed to be selected through
                the search bar&apos;s filter function.
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
        </PortfolioSectionContainer>
    );
};

import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                One of our challenges was to make it easy for users to navigate through
                various types of real estate and their respective options. To address
                this, we conducted case studies on some of Australia&apos;s major real
                estate transaction websites.
            </IconListItem>
            <IconListItem iconType="noIcon">
                We placed the main menu bar at the top of the website and categorised it
                into Residential, Rural, Commercial, Business, and Agent under parent
                navigation. The remaining sub-options were designed to be selected through
                the search bar&apos;s filter function.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Another challenge we faced was the potential for users to become confused
                about which page they were currently on when searching for a property with
                specific options, due to the numerous options available in real estate
                listings. To avoid this, we placed breadcrumbs at the top of all search
                pages to help users navigate and avoid getting lost.
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                As property listings were created by agents, we were concerned that the
                overall design of the app might not look consistent without proper
                measures in place. To maintain consistency in design, we used consistent
                design elements wherever possible. For user-uploaded real estate listing
                photos, prices, and other information, we designed them with minimum and
                maximum size and text to ensure that they did not deviate from the overall
                design framework.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                Given the complexity of information involved in the property agent
                dashboard, designing a user-friendly interface was one of our main
                challenges.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To address this, we replaced intuitive elements with icons or graphics
                where possible and used lighter colors to de-emphasize other basic
                functionalities, thereby emphasizing the most important components.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                As the main real estate management dashboard received a high volume of
                notifications from both the site and potential clients, it was essential
                that agents could react promptly. However, as the dashboard already
                contained a significant amount of information, displaying notifications
                within it risked overwhelming agents.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To address this, we designed a sidebar on the left-hand side of the
                dashboard, where agents could immediately view notifications from both
                posts and customer requests.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

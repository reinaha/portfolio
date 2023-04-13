import { PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const ChallengesContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                Designing a user-friendly interface for the complex property agent
                dashboard was one of our primary challenges.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To tackle this, we utilised icons and graphics in place of text where
                possible, and opted for lighter colours to de-emphasise basic
                functionalities, while highlighting the most important components.
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                Managing a high volume of notifications from both the site and potential
                clients was crucial, and agents needed to be able to respond promptly.
                However, with the dashboard already containing a significant amount of
                information, presenting notifications within it risked overwhelming
                agents.
            </IconListItem>
            <IconListItem iconType="noIcon">
                To overcome this challenge, we created a sidebar on the left-hand side of
                the dashboard, where agents could quickly access notifications from both
                posts and customer requests.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

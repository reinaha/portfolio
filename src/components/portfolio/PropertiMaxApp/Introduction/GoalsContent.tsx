import { Chip, Typography } from '@mui/material';

import { PortfolioContainer, PortfolioContainerProps } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const GoalsContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioContainer spacing={12.5}>
            <GoalSection title="Main Goal" color={goalColor}>
                <Typography>
                    In the early days, the key factor that users were looking for in a new
                    real estate application was the ability to view the largest number of
                    real estate listings possible on the app. As a result, our main goal
                    was to design an application that would make real estate agents
                    interested in our app and eager to upload their real estate listings,
                    in other words, to create an application that would make real estate
                    agents want to upload their listings.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, we made every effort to implement a real estate
                    agent-friendly design. For example, we ensured that the home page
                    displayed as many real estate listings as possible, and we made sure
                    that each real estate listing included the real estate agent&apos;s
                    logo so that agents could indirectly advertise to users.
                </IconListItem>
            </GoalSection>
            <GoalSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    The sub-goal is to enable real estate buyers targeted towards a
                    specific demographic to easily and conveniently find potentially
                    complex and challenging properties.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    To enhance users&sapos; comprehension of the app, we designed
                    appropriate icons and various graphical elements, as real estate
                    listings often contain a multitude of options and potentially complex
                    information.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    Given the app&apos;s content-heavy nature, we designed menus that
                    could be intuitively represented through icons to prevent user
                    fatigue.
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={subGoalColor}>
                    Because the app targets individuals with significant purchasing power
                    in real estate, who may be of different age groups compared to other
                    apps, we opted to use icons for navigation, while including both icons
                    and text for crucial and potentially confusing elements.
                </IconListItem>
            </GoalSection>
        </PortfolioContainer>
    );
};

interface GoalSectionProps extends PortfolioContainerProps {
    title: string;
    color: {
        primary: string;
        secondary: string;
    };
}

const GoalSection = ({
    title,
    color: { primary, secondary },
    children,
}: GoalSectionProps) => {
    return (
        <PortfolioContainer spacing={7.5}>
            <Chip
                label={title}
                sx={{
                    bgcolor: secondary,
                    color: primary,
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 4px',
                    borderRadius: '32px',
                    width: '100px',
                }}
            />
            {children}
        </PortfolioContainer>
    );
};

import { Chip, Typography } from '@mui/material';

import { PortfolioSectionContainer, PortfolioSectionContainerProps } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const GoalsContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <GoalSection title="Main Goal" color={goalColor}>
                <Typography>
                    As PropertiMax was a latecomer to the real estate market, we knew that
                    we needed a clear and compelling benefit for users to come to our
                    website in order to attract a large user base early on.
                </Typography>
                <Typography>
                    Ultimately, what users wanted was the ability to see a large number of
                    real estate listings on one website, so we needed to make sure that
                    real estate agents who manage those listings would be interested in
                    uploading their properties to our site.
                </Typography>
                <Typography>
                    For this reason, our main goal at the outset was to create a website
                    that would be attractive to real estate agents and make them want to
                    upload their properties to our platform.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, we made every effort to implement a real estate
                    agent-friendly design. For example, we ensured that the home page
                    displayed as many real estate listings as possible, and we made sure
                    that each real estate listing included the real estate agent&aspo;s
                    logo so that agents could indirectly advertise to users.
                </IconListItem>
            </GoalSection>
            <GoalSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    The sub-goal is to make our website more convenient than our
                    competitors for property buyers who are our main target.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    The main competitor&apos;s UI was designed in a way that simply listed
                    many items and listings, which made users feel easily fatigued while
                    using the website. To address this issue, our PropertyMax real estate
                    listings website aimed to create a user-friendly and simple design by
                    hiding items under categories and minimizing clutter, making it easier
                    and more convenient for users to view real estate listings.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    We aimed to keep the design as simple as possible by eliminating
                    unnecessary elements, but since the target audience for the app is
                    real estate buyers with significant purchasing power, who are
                    typically older, we decided to include both icons and text for
                    potentially confusing elements to ensure ease of use.
                </IconListItem>
            </GoalSection>
        </PortfolioSectionContainer>
    );
};

interface GoalSectionProps extends PortfolioSectionContainerProps {
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
        <PortfolioSectionContainer spacing={7.5}>
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
        </PortfolioSectionContainer>
    );
};

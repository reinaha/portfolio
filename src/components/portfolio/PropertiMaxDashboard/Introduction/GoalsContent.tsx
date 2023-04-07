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
                    Our main goal in designing the dashboard was to provide a
                    user-friendly platform for agents to easily upload, update, and manage
                    their property listings without any inconvenience.
                </Typography>
                <Typography>
                    By offering a convenient dashboard experience to agents, we aimed to
                    establish PropertiMax as a &ldquo;easy-to-use platform for managing
                    real estate listings&rdquo; in the minds of users in the long run.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, we focused on designing a user-friendly interface
                    that would allow agents to easily add and modify listings. We also
                    added data analysis features to help agents effectively manage their
                    listings. Ultimately, by providing a seamless experience for agents,
                    we aimed to increase the number of property listings on the
                    PropertiMax main website and attract more property buyers, which is
                    our main target audience.
                </IconListItem>
            </GoalSection>
            <GoalSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    We hoped that the PropertiMax Dashboard would go beyond just being a
                    website for listing real estate properties and instead become a tool
                    that could assist agents in their personal tasks. The more time agents
                    spent on the PropertiMax Dashboard, the stronger their connection to
                    PropertiMax would become, and this could also encourage them to upload
                    more real estate listings.
                </Typography>
                <Typography>
                    Therefore, our goal was to design features that could help agents with
                    their tasks and keep them engaged with the PropertiMax Dashboard for
                    longer periods of time.
                </Typography>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    To achieve this, we added features such as schedule alerts, schedule
                    management, and client list management, which would make the dashboard
                    not only a place for uploading real estate properties but also a space
                    for managing personal tasks.
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

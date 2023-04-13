import { Typography } from '@mui/material';

import { PortfolioChipSection, PortfolioSectionContainer } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const GoalsContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <PortfolioChipSection title="Main Goal" color={goalColor}>
                <Typography>
                    Our primary objective in designing the PropertiMax dashboard was to
                    create a user-friendly platform that allows agents to effortlessly
                    manage, update, and upload their property listings without any hassle.
                    Our goal was to establish PropertiMax as the go-to platform for easy
                    property listing management in the minds of our users in the long run.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, we focused on crafting a user-friendly interface that
                    would enable agents to seamlessly add and modify listings. We also
                    integrated data analysis features to help agents effectively manage
                    their listings. Ultimately, by delivering a hassle-free experience for
                    agents, we aimed to increase the number of property listings on the
                    PropertiMax main website, thereby attracting more property buyers -
                    our primary target audience.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    We aimed to make the PropertiMax Dashboard more than just a platform
                    for listing properties. Our goal was to create a tool that would
                    assist agents in their daily tasks and build a stronger connection
                    between them and PropertiMax. By offering features that help agents
                    save time and improve their productivity, we aimed to encourage them
                    to spend more time on the dashboard and ultimately increase the number
                    of real estate listings uploaded to the platform. Our objective was to
                    establish PropertiMax as a reliable and helpful resource for agents in
                    the real estate industry.
                </Typography>
                <Typography>
                    Our aim was to create a dashboard that would be more than just a
                    platform for listing real estate properties, but also a tool that
                    would assist agents in their daily activities. In order to keep agents
                    engaged with the PropertiMax Dashboard for longer periods of time, we
                    set out to design features that would help them with their tasks.
                </Typography>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    To accomplish this, we added features such as schedule alerts,
                    schedule management, and client list management. By transforming the
                    dashboard into a space for managing personal tasks, we aimed to
                    establish stronger connections with agents and encourage them to
                    upload more real estate listings.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

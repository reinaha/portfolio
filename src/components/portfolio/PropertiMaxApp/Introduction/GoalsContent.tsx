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
                    Initially, the key factor that encouraged users to use a real estate
                    application was identified to be the ability to view a large number of
                    real estate listings. As a result, the main goal of the project was to
                    design an application that would make real estate agents interested in
                    the app and make them eager to upload their real estate listings on
                    the app.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, there was an emphasis on implementing a real estate
                    agent-friendly design. For example, while the home page displayed as
                    many real estate listings as possible, the design ensured that each
                    real estate listing included the real estate agent&apos;s logo so that
                    agents could indirectly advertise themselves to users.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    The sub-goal was to create an app that is accessible to people looking
                    to purchase a property, who may not be familiar with the property
                    market.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    To enhance users&apos; comprehension of the information provided by
                    the app, appropriate icons and various graphical elements were used,
                    as real estate listings often contain a multitude of options and
                    potentially complex information.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    Given the app&apos;s content-heavy nature, menus were designed to be
                    intuitive with various information represented by icons to prevent
                    user fatigue.
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={subGoalColor}>
                    The app targets individuals with purchasing power enough to afford
                    properties, who may be of different age groups compared to other apps.
                    Hence icons were used for navigation, while both icons and text were
                    included for crucial and potentially confusing elements.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

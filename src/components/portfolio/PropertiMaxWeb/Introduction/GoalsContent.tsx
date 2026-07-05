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
                    To establish a strong user base early on, PropertiMax aimed to provide
                    clear and compelling benefits for its users as a latecomer in the real
                    estate market.
                </Typography>
                <Typography>
                    We recognized that the key requirement for users was to have access to
                    a wide range of real estate listings on a single platform. Thus, our
                    primary goal was to design a website that would entice real estate
                    agents to upload their properties to our platform and make it stand
                    out in the competitive market.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    To achieve this, we added features that were particularly useful for
                    real estate agents, such as the ability to easily manage and update
                    their listings, track their performance and statistics, and
                    communicate with potential buyers through the platform. In addition,
                    we made sure that the process of uploading a property was
                    straightforward and efficient, so agents would not be deterred from
                    using our platform.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection title="Sub Goal" color={subGoalColor}>
                <Typography>
                    The sub-goal is to make our website more convenient than our
                    competitors for property buyers who are our main target.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    Create a user-friendly and simplified design. We noticed that the main
                    competitor&apos;s UI was overwhelming for users as it simply listed
                    many items and listings, causing users to easily feel fatigued while
                    using the website. To address this issue, we decided to hide items
                    under categories and minimise clutter to make it easier and more
                    convenient for users to view real estate listings on our website.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    Create a simple design for the app by removing any unnecessary
                    elements. Considering that our target audience is real estate buyers
                    with substantial purchasing power, who tend to be older, we decided to
                    incorporate both icons and text for potentially unintuitive elements
                    to ensure ease of use.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioChipSection, PortfolioSectionContainer } from '@/components';

export const TargetContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <PortfolioChipSection
                title="Main Target"
                subtitle="Real Estate Agents"
                color={goalColor}
            >
                <Typography>
                    The main target audience for the PropertiMax Real Estate Trading
                    Application was real estate agents. As this application was new to the
                    market, it was crucial to build up a large number of property listings
                    on the app in order to attract potential buyers. The initial phase of
                    application launch involved providing real estate agents with an
                    attractive platform to upload property listings.
                </Typography>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Sub Target"
                subtitle="Property Buyers"
                color={subGoalColor}
            >
                <Typography>
                    The sub target audience was people who are looking to purchase
                    properties. We aimed to estabalish an aggressive marketing strategy to
                    encourage users to try searching for a property through the app.
                </Typography>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

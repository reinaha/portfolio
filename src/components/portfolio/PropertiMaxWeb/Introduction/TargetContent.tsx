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
                    The primary audience of the PropertiMax real estate trading website
                    are real estate agents. The success of the website largely depended on
                    the number of property listings on the site to create a significant
                    user base. Consequently, real estate agents who wanted to list their
                    properties were the primary target audience.
                </Typography>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Sub Target"
                subtitle="Real Estate Buyers"
                color={subGoalColor}
            >
                <Typography>
                    The website&apos;s secondary target audience were real estate buyers.
                    A proactive marketing strategy can be implemented to attract consumers
                    interested in purchasing real estate and to facilitate convenient real
                    estate transactions through the website. This approach can help the
                    website gain a competitive edge over other competitors in the
                    industry.
                </Typography>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

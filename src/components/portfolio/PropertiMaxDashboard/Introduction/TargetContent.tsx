import { Typography } from '@mui/material';

import { PortfolioChipSection, PortfolioSectionContainer } from '@/components';

export const TargetContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    return (
        <PortfolioSectionContainer spacing={12.5}>
            <PortfolioChipSection
                title="Main Target"
                subtitle="Real Estate Agents"
                color={goalColor}
            >
                <Typography>
                    The PropertiMax real estate admin dashboard was designed with real
                    estate agents as the primary target audience. Our main objective was
                    to create a user-friendly platform that would enable agents to easily
                    upload property listings and obtain comprehensive property
                    information. This would allow us to outperform competitors in the
                    market and encourage more listings on our website, thus increasing our
                    database of high-quality property listings and enhancing customer
                    satisfaction. By prioritising the needs of real estate agents, we hope
                    to provide value to both agents and potential buyers.
                </Typography>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

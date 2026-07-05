import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const OverviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Before designing any solution, I first needed to understand how offline
                actually behaved across the product. Rather than assuming existing
                behaviour was correct, I mapped real user scenarios, audited every offline
                interaction, and identified patterns that could scale across the
                application.
            </Typography>
        </PortfolioSectionContainer>
    );
};

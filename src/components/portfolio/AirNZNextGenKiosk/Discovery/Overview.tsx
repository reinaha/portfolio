import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const OverviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Transitioning from a linear flow to a modular architecture introduced a
                new level of complexity. Instead of designing fixed screens, we needed to
                define a scalable framework that determined how modules should be grouped,
                ordered, and conditionally displayed across hundreds of different check-in
                scenarios.
            </Typography>
        </PortfolioSectionContainer>
    );
};

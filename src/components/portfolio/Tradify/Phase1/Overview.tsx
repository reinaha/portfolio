import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const Phase1OverviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Discovery showed that the existing offline experience first needed a
                stronger foundation before more advanced offline capabilities could be
                introduced. Phase 1 focused on improving clarity and consistency by
                defining capability boundaries, correcting misleading behaviours, and
                standardising offline communication across the product.
            </Typography>
        </PortfolioSectionContainer>
    );
};

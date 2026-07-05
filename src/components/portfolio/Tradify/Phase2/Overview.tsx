import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const Phase2OverviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Unlike offline mode, low connectivity is unpredictable. Requests may
                succeed, fail, or recover at any moment. The challenge was designing an
                experience that kept users moving without introducing unnecessary
                interruptions, while still providing clear feedback when the network
                became unreliable.
            </Typography>
        </PortfolioSectionContainer>
    );
};

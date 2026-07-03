import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const RootCauseContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The legacy check-in experience was built on a rigid linear flow, requiring
                every passenger to follow the same sequence regardless of their travel
                context. As the product evolved, this architecture became increasingly
                difficult to scale, making it challenging to accommodate diverse passenger
                journeys, streamline simple check-ins, and introduce new capabilities
                without adding complexity.
            </Typography>
        </PortfolioSectionContainer>
    );
};

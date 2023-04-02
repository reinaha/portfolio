import { Box, Stack } from '@mui/material';
import { ReactNode } from 'react';

import { PortfolioContainer } from './PortfolioContainer';

type JourneyContainerProps = {
    spacing?: number;
    image?: string;
    children?: ReactNode;
};

export const JourneyContainer = ({
    spacing = 1.4,
    image,
    children,
}: JourneyContainerProps) => {
    return (
        <Stack spacing={spacing}>
            <PortfolioContainer>{children}</PortfolioContainer>
            {image ? <Box component="img" alt="Cover" src={image} /> : null}
        </Stack>
    );
};

import { Box, Container, Stack } from '@mui/material';
import { useLayoutEffect } from 'react';

import {
    HomeBottomCover,
    PortfolioHeader,
    PortfolioHeaderProps,
    PortfolioSectionDotNav,
    PortfolioSectionNavProvider,
} from '@/components';

type PortfolioContainerProps = {
    headerProps: PortfolioHeaderProps;
    children: React.ReactNode;
};

export const PortfolioContainer = ({
    headerProps,
    children,
}: PortfolioContainerProps) => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <PortfolioSectionNavProvider>
            <PortfolioSectionDotNav />
            <Stack spacing={25}>
                <PortfolioHeader {...headerProps} />
                {children}
                <Box>
                    <Container>
                        <HomeBottomCover />
                    </Container>
                </Box>
            </Stack>
        </PortfolioSectionNavProvider>
    );
};

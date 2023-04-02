import { Box, Container, Fade, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, useRef } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';

export type PortfolioSectionProps = {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
};

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
}: PortfolioSectionProps) => {
    const componentRef = useRef(null);

    const isInViewPort = useIsInViewport(componentRef);

    return (
        <Box paddingBottom={3}>
            <Container>
                <Fade in={isInViewPort} timeout={2000}>
                    <Typography variant={headerVariant} paddingBottom={1.5}>
                        {title}
                    </Typography>
                </Fade>
            </Container>
            <Fade in={isInViewPort} timeout={3000}>
                <Box ref={componentRef}>{content}</Box>
            </Fade>
        </Box>
    );
};

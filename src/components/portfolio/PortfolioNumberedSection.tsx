import { Box, Chip, Container, Fade, Slide, Typography } from '@mui/material';
import { ReactNode, useRef } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';

export type PortfolioNumberedSectionProps = {
    title?: string;
    number?: number;
    content?: ReactNode;
    numberColor: string;
    backgroundColor: string;
};

export const PortfolioNumberedSection = ({
    title,
    number,
    content,
    numberColor,
    backgroundColor,
}: PortfolioNumberedSectionProps) => {
    const componentRef = useRef(null);

    const isInViewPort = useIsInViewport(componentRef);

    return (
        <Box>
            <Container>
                <Slide direction="up" in={isInViewPort} timeout={2000}>
                    <Box paddingBottom={2} sx={{ display: 'flex' }}>
                        <Chip
                            label={number}
                            sx={{
                                bgcolor: `${backgroundColor}`,
                                color: `${numberColor}`,
                                fontSize: '26px',
                                fontWeight: 500,
                                marginRight: 0.8,
                                height: '2em',
                                width: '2em',
                                borderRadius: '50%',
                            }}
                        />
                        <Typography variant="h2" paddingTop={0.3} paddingBottom={1.5}>
                            {title}
                        </Typography>
                    </Box>
                </Slide>
            </Container>
            <Fade in={isInViewPort} timeout={2500}>
                <Box ref={componentRef}>{content}</Box>
            </Fade>
        </Box>
    );
};

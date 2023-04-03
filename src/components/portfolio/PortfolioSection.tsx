import { Box, BoxProps, Container, Grid, Stack, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';
import HeaderMarkerIcon from '@/icons/HeaderMarkerIcon.svg';

export interface PortfolioSectionProps extends BoxProps {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
}

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
    ...props
}: PortfolioSectionProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const containerRef = useRef(null);

    const isInViewPort = useIsInViewport(containerRef);

    useEffect(() => {
        if (!visible && isInViewPort) {
            setVisible(true);
        }
    }, [visible, isInViewPort]);

    const containerPadding = 5;

    return (
        <Box ref={containerRef} {...props}>
            {/* <Slide
                container={containerRef.current}
                direction="up"
                in={visible}
                easing="cubic-bezier(0, 1, .8, 1)"
            > */}
            <Container
                disableGutters
                sx={{ paddingLeft: containerPadding, paddingRight: containerPadding }}
            >
                <Grid container spacing={{ lg: 0, md: 0, sm: 5, xs: 5 }}>
                    <Grid item lg={2} md={2} sm={12} xs={12} paddingRight={6.5}>
                        <Stack
                            direction={{
                                lg: 'row',
                                md: 'column-reverse',
                                sm: 'row',
                                xs: 'row',
                            }}
                            spacing={3}
                        >
                            <Box
                                component="img"
                                alt="Cover"
                                src={HeaderMarkerIcon}
                                maxWidth="15%"
                                sx={{ objectFit: 'none' }}
                            />
                            <Typography variant={headerVariant}>{title}</Typography>
                        </Stack>
                    </Grid>
                    <Grid item lg={10} md={10} sm={12} xs={12}>
                        {content}
                    </Grid>
                </Grid>
            </Container>
            {/* </Slide> */}
        </Box>
    );
};

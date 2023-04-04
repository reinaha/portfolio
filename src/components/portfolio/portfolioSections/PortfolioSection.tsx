import { Box, Container, Grid, Stack, StackProps, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ResponsiveStyleValue } from '@mui/system';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { PortfolioImageContainer } from '@/components';
import { useIsInViewport } from '@/hooks/Viewport';
import HeaderMarkerIcon from '@/icons/HeaderMarkerIcon.svg';

export interface PortfolioSectionProps extends StackProps {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
    reverseTitleIcon?: boolean;
    titlePadding?: number;
    coverImg?: string;
}

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
    reverseTitleIcon = false,
    titlePadding,
    coverImg,
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

    const stackDirection: ResponsiveStyleValue<
        'row' | 'row-reverse' | 'column' | 'column-reverse'
    > = reverseTitleIcon
        ? {
              lg: 'row-reverse',
              md: 'column-reverse',
              sm: 'row-reverse',
              xs: 'row-reverse',
          }
        : {
              lg: 'row',
              md: 'column-reverse',
              sm: 'row',
              xs: 'row',
          };

    const stackJustifyContent: 'flex-start' | 'flex-end' = reverseTitleIcon
        ? 'flex-end'
        : 'flex-start';

    return (
        <Stack ref={containerRef} spacing={25} {...props}>
            {/* <Slide
                container={containerRef.current}
                direction="up"
                in={visible}
                easing="cubic-bezier(0, 1, .8, 1)"
            > */}
            {coverImg ? <PortfolioImageContainer imageSrc={coverImg} /> : null}
            <Box>
                <Container
                    disableGutters
                    sx={{ paddingLeft: containerPadding, paddingRight: containerPadding }}
                >
                    <Grid container spacing={{ lg: 0, md: 0, sm: 5, xs: 5 }}>
                        <Grid item lg={2} md={2} sm={12} xs={12} paddingRight={6.5}>
                            <Stack
                                direction={stackDirection}
                                spacing={3}
                                paddingTop={titlePadding}
                                justifyContent={stackJustifyContent}
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
            </Box>
            {/* </Slide> */}
        </Stack>
    );
};

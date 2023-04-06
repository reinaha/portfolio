import { Box, Container, Grid, Stack, StackProps, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ResponsiveStyleValue } from '@mui/system';
import { ReactNode } from 'react';

import { PortfolioImageContainer } from '@/components';
import HeaderMarkerIcon from '@/icons/HeaderMarkerIcon.svg';

export interface PortfolioSectionProps extends StackProps {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
    reverseTitleIcon?: boolean;
    titlePadding?: number;
    coverImg?: string;
    sectionRef?:
        | ((instance: HTMLDivElement | null) => void)
        | React.RefObject<HTMLDivElement>
        | null
        | undefined;
}

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
    reverseTitleIcon = false,
    titlePadding,
    coverImg,
    sectionRef,
    ...props
}: PortfolioSectionProps) => {
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
        <Stack spacing={25} {...props}>
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
                                <Typography variant={headerVariant} ref={sectionRef}>
                                    {title}
                                </Typography>
                            </Stack>
                        </Grid>
                        <Grid item lg={10} md={10} sm={12} xs={12}>
                            {content}
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Stack>
    );
};

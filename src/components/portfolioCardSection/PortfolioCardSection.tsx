import { Box, BoxProps, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { IPortfolioCard } from '@/models';

import { PortfolioCard } from '../card';

interface PortfolioCardSectionProps extends BoxProps {
    portfolioCardData: IPortfolioCard[];
}

export const PortfolioCardSection = ({
    portfolioCardData,
    ...props
}: PortfolioCardSectionProps) => {
    const navigate = useNavigate();

    return (
        <Box id="PortfolioSection" {...props}>
            <Grid container alignItems="stretch" columnSpacing={5.5} rowSpacing={11}>
                {portfolioCardData.map((p, index) => {
                    return (
                        <Grid item key={index} xs={12} sm={12} md={6} lg={6}>
                            <PortfolioCard
                                title={p.title}
                                subtitle={p.subtitle}
                                tags={p.tags}
                                backgroundImage={p.backgroundImg}
                                textColor={p.textColor}
                                titleProps={p.titleProps}
                                subtitleProps={p.subtitleProps}
                                titleSubtitleSpacing={p.titleSubtitleSpacing}
                                titleIcon={p.titleIcon}
                                buttonOnClick={p.onClick(navigate)}
                            />
                        </Grid>
                    );
                })}
            </Grid>
        </Box>
    );
};

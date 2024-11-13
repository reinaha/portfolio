import { Box, BoxProps, Grid, Stack, useMediaQuery, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPortfolioCard } from '@/models';

import { HomeFilterButton } from '../button/HomeFilterButton';
import { PortfolioCard } from '../card';

interface PortfolioCardSectionProps extends BoxProps {
    portfolioCardData: IPortfolioCard[];
}

export const PortfolioCardSection = ({
    portfolioCardData,
    ...props
}: PortfolioCardSectionProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isLargerThanMediumScreen = useMediaQuery(theme.breakpoints.up('sm'));
    const [portfolioFilter, setPortfolioFilter] = useState<string>('');

    const onClickFilterButton = (filterValue: string) => () => {
        setPortfolioFilter(filterValue);
    };

    return (
        <Box id="PortfolioSection" {...props}>
            <Grid container alignItems="stretch" columnSpacing={5} rowSpacing={5}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                    <Stack direction="row" spacing={5}>
                        <HomeFilterButton
                            buttonText={
                                'All' + (isLargerThanMediumScreen ? ' Projects' : '')
                            }
                            value=""
                            selected={portfolioFilter === ''}
                            onClick={onClickFilterButton('')}
                        />
                        <HomeFilterButton
                            buttonText={
                                'UX/UI' + (isLargerThanMediumScreen ? ' Design' : '')
                            }
                            value="uxui"
                            selected={portfolioFilter === 'uxui'}
                            onClick={onClickFilterButton('uxui')}
                        />
                        <HomeFilterButton
                            buttonText={
                                'Multimedia' + (isLargerThanMediumScreen ? ' Design' : '')
                            }
                            value="multimedia"
                            selected={portfolioFilter === 'multimedia'}
                            onClick={onClickFilterButton('multimedia')}
                        />
                    </Stack>
                    {/* <ToggleButtonGroup
                        value={portfolioFilter}
                        exclusive
                        onChange={(_, newValue) => setPortfolioFilter(newValue)}
                    >
                        <ToggleButton value="">All Projects</ToggleButton>
                        <ToggleButton value="uxui">UX/UI Design Only</ToggleButton>
                        <ToggleButton value="multimedia">
                            Multimedia Design Only
                        </ToggleButton>
                    </ToggleButtonGroup> */}
                </Grid>
                {portfolioCardData
                    .filter((d) => {
                        if (portfolioFilter) {
                            return d.filterCriteria?.includes(portfolioFilter);
                        } else {
                            return true;
                        }
                    })
                    .map((p, index) => {
                        return (
                            <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
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

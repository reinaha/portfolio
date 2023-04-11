import { Box, Grid } from '@mui/material';

import { PortfolioDetailCard } from '@/components';
import { HeaderCard } from '@/models';

type PortfolioDetailCardsProps = {
    headerCards: HeaderCard[];
};

export const PortfolioDetailCards = ({ headerCards = [] }: PortfolioDetailCardsProps) => {
    return (
        <Box paddingTop={2} paddingBottom={2} minHeight="134px">
            <Grid container alignItems="stretch" width="100%" spacing={5}>
                {headerCards.map((pd: HeaderCard, index: number) => (
                    <Grid key={index} item container xs={6} sm={6} md={3} lg={3}>
                        <PortfolioDetailCard title={pd.title} content={pd.content} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

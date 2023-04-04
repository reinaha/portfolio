import { Box, Grid } from '@mui/material';

import { PortfolioDetailCard } from '../homeCards/PortfolioDetailCard';

export type PortfolioDetailCardInfo = {
    title: string;
    content?: React.ReactNode;
};

type PortfolioDetailCardsProps = {
    portfolioDetailCardInfos: PortfolioDetailCardInfo[];
};

export const PortfolioDetailCards = ({
    portfolioDetailCardInfos = [],
}: PortfolioDetailCardsProps) => {
    return (
        <Box paddingTop={2} paddingBottom={2} minHeight="134px">
            <Grid container alignItems="stretch" width="100%" spacing={5}>
                {portfolioDetailCardInfos.map(
                    (pd: PortfolioDetailCardInfo, index: number) => (
                        <Grid key={index} item container xs={6} sm={6} md={3} lg={3}>
                            <PortfolioDetailCard title={pd.title} content={pd.content} />
                        </Grid>
                    )
                )}
            </Grid>
        </Box>
    );
};

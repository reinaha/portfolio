import { Grid } from '@mui/material';

import { PortfolioDetailCard } from '../homeCards/PortfolioDetailCard';

export type PortfolioDetailCardInfo = {
    title: string;
    content?: React.ReactNode;
    icon: string;
};

type PortfolioDetailCardsProps = {
    portfolioDetailCardInfos: PortfolioDetailCardInfo[];
};

export const PortfolioDetailCards = ({
    portfolioDetailCardInfos = [],
}: PortfolioDetailCardsProps) => {
    return (
        <Grid
            container
            alignItems="stretch"
            justifyContent="center"
            direction="row"
            spacing={0.5}
            paddingRight={1}
        >
            {portfolioDetailCardInfos.map(
                (pd: PortfolioDetailCardInfo, index: number) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        sm={6}
                        md={12 / portfolioDetailCardInfos.length}
                        lg={12 / portfolioDetailCardInfos.length}
                    >
                        <PortfolioDetailCard
                            title={pd.title}
                            content={pd.content}
                            icon={pd.icon}
                        />
                    </Grid>
                )
            )}
        </Grid>
    );
};

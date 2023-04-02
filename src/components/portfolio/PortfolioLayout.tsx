import { Box, Divider, Stack } from '@mui/material';

import { PortfolioDetailCardInfo, PortfolioDetailCards } from './PortfolioDetailCards';
import { PortfolioHeader, PortfolioHeaderProps } from './PortfolioHeader';

type PortfolioLayoutProps = {
    coverImg: string;
    headerProps: PortfolioHeaderProps;
    portfolioDetailCardInfos: PortfolioDetailCardInfo[];
    children: React.ReactNode;
};

export const PortfolioLayout = ({
    coverImg,
    headerProps,
    portfolioDetailCardInfos,
    children,
}: PortfolioLayoutProps) => {
    return (
        <Stack spacing={1}>
            <Box
                component="img"
                alt="Cover"
                src={coverImg}
                width="100%"
                sx={{ marginLeft: '-1em', marginRight: '-1em' }}
            />
            <PortfolioHeader {...headerProps} />
            <Divider variant="middle" />
            {portfolioDetailCardInfos ? (
                <PortfolioDetailCards
                    portfolioDetailCardInfos={portfolioDetailCardInfos}
                />
            ) : null}
            {children}
        </Stack>
    );
};

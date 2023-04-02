import { Box, Stack } from '@mui/material';

import { PortfolioHeader, PortfolioHeaderProps } from './PortfolioHeader';

type PortfolioLayoutProps = {
    coverImg: string;
    headerProps: PortfolioHeaderProps;
    children: React.ReactNode;
};

export const PortfolioLayout = ({
    coverImg,
    headerProps,
    children,
}: PortfolioLayoutProps) => {
    return (
        <Stack spacing={1}>
            <Box component="img" alt="Cover" src={coverImg} width="100%" />
            <PortfolioHeader {...headerProps} />
            {children}
        </Stack>
    );
};

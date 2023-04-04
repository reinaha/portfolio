import { Stack } from '@mui/material';

import { PortfolioHeader, PortfolioHeaderProps } from './PortfolioHeader';

type PortfolioLayoutProps = {
    headerProps: PortfolioHeaderProps;
    children: React.ReactNode;
};

export const PortfolioLayout = ({ headerProps, children }: PortfolioLayoutProps) => {
    return (
        <Stack spacing={25} paddingBottom={25}>
            <PortfolioHeader {...headerProps} />
            {children}
        </Stack>
    );
};

import { Stack } from '@mui/material';

import { PortfolioHeader, PortfolioHeaderProps } from '@/components';

type PortfolioContainerProps = {
    headerProps: PortfolioHeaderProps;
    children: React.ReactNode;
};

export const PortfolioContainer = ({
    headerProps,
    children,
}: PortfolioContainerProps) => {
    return (
        <Stack spacing={25} paddingBottom={25}>
            <PortfolioHeader {...headerProps} />
            {children}
        </Stack>
    );
};

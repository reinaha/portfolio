import { Stack, StackProps } from '@mui/material';
import { ReactNode } from 'react';

export interface PortfolioContainerProps extends StackProps {
    children?: ReactNode;
}

export const PortfolioContainer = ({
    spacing,
    children,
    ...props
}: PortfolioContainerProps) => {
    return (
        <Stack spacing={spacing || 6} {...props}>
            {children}
        </Stack>
    );
};

import { Stack, StackProps } from '@mui/material';
import { ReactNode } from 'react';

export interface PortfolioSectionContainerProps extends StackProps {
    children?: ReactNode;
}

export const PortfolioSectionContainer = ({
    spacing,
    children,
    ...props
}: PortfolioSectionContainerProps) => {
    return (
        <Stack spacing={spacing || 6} {...props}>
            {children}
        </Stack>
    );
};

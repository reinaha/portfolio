import { Stack, StackProps } from '@mui/material';
import { ReactNode } from 'react';

interface PortfolioSubsectionProps extends StackProps {
    titleComponent: ReactNode;
}

export const PortfolioSubsection = ({
    titleComponent,
    spacing,
    children,
    ...props
}: PortfolioSubsectionProps) => {
    return (
        <Stack spacing={spacing || 30} {...props}>
            {titleComponent}
            {children}
        </Stack>
    );
};

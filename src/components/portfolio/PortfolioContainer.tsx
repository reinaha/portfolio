import { Container, Stack, StackProps } from '@mui/material';
import { ReactNode } from 'react';

interface PortfolioContainerProps extends StackProps {
    children?: ReactNode;
}

export const PortfolioContainer = ({
    spacing,
    children,
    ...props
}: PortfolioContainerProps) => {
    return (
        <Container>
            <Stack spacing={spacing || 1} {...props}>
                {children}
            </Stack>
        </Container>
    );
};

import { Stack } from '@mui/material';
import { ReactNode } from 'react';

interface PortfolioTemplateProps {
    header?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}

export const PortfolioTemplate = ({
    header,
    footer,
    children,
}: PortfolioTemplateProps) => {
    return (
        <Stack spacing={25}>
            {header}
            {children}
            {footer}
        </Stack>
    );
};

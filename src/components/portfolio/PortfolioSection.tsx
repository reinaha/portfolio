import { Box, Container, Typography } from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode } from 'react';

export type PortfolioSectionProps = {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
};

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
}: PortfolioSectionProps) => {
    return (
        <Box paddingBottom={3}>
            <Container>
                <Typography variant={headerVariant} paddingBottom={1.5}>
                    {title}
                </Typography>
            </Container>
            {content}
        </Box>
    );
};

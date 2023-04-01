import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';

export type PortfolioSectionProps = {
    title?: string;
    content?: ReactNode;
};

export const PortfolioSection = ({ title, content }: PortfolioSectionProps) => {
    return (
        <Box paddingBottom={2}>
            <Typography variant="h2" paddingBottom={1.5}>
                {title}
            </Typography>
            {content}
        </Box>
    );
};

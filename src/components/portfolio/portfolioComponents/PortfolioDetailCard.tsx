import { Stack, Typography } from '@mui/material';
import { ReactNode } from 'react';

type PortfolioDetailCardProps = {
    title: string;
    content: ReactNode;
};

export const PortfolioDetailCard = ({ title, content }: PortfolioDetailCardProps) => {
    return (
        <Stack spacing={5}>
            <Typography variant="h6">{title}</Typography>
            <Stack>{content}</Stack>
        </Stack>
    );
};

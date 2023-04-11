import { Stack, Typography } from '@mui/material';

import { HeaderCard } from '@/models';

export const PortfolioDetailCard = ({ title, content }: HeaderCard) => {
    return (
        <Stack spacing={5}>
            <Typography variant="h6">{title}</Typography>
            <Stack>{content}</Stack>
        </Stack>
    );
};

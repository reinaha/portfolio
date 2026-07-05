import { Stack, Typography, useTheme } from '@mui/material';

import { BeyondPortfolioData } from '@/data';

import { PressListItem } from './PressListItem';

export const BeyondPortfolioSection = () => {
    const theme = useTheme();

    return (
        <Stack width="100%" maxWidth="1024px" marginX="auto" paddingBottom={20}>
            <Typography
                sx={{
                    fontSize: '32px',
                    fontWeight: 600,
                    color: theme.palette.primary.main,
                    paddingBottom: 6,
                }}
            >
                Beyond the Portfolio
            </Typography>
            <Stack width="100%">
                {BeyondPortfolioData.map((item, index) => (
                    <PressListItem key={index} item={item} showDivider={true} />
                ))}
            </Stack>
        </Stack>
    );
};

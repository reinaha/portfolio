import { Box, Stack } from '@mui/material';

import { FeaturedWorkCard } from '@/components';
import { FeaturedWorkData } from '@/data';

export const FeaturedWorkSection = () => {
    const largeCards = FeaturedWorkData.filter((c) => c.tier === 'large');
    const mediumCards = FeaturedWorkData.filter((c) => c.tier === 'medium');

    return (
        <Stack width="100%" maxWidth="1024px" marginX="auto" spacing={5} paddingY={5}>
            {largeCards.map((c, index) => (
                <FeaturedWorkCard key={index} {...c} />
            ))}
            <Box
                sx={{
                    display: 'grid',
                    width: '100%',
                    gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                    columnGap: 4,
                    rowGap: 5,
                }}
            >
                {mediumCards.map((c, index) => (
                    <FeaturedWorkCard key={index} {...c} />
                ))}
            </Box>
        </Stack>
    );
};

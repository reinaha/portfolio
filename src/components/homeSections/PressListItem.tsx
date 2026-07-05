import { Divider, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';

import { CircularArrowButton } from '@/components';
import { IBeyondPortfolioItem } from '@/models';

type PressListItemProps = {
    item: IBeyondPortfolioItem;
    showDivider?: boolean;
};

export const PressListItem = ({ item, showDivider = true }: PressListItemProps) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';
    const dividerColor = isDarkMode ? 'rgba(255, 255, 255, 0.12)' : '#E0E0E0';
    const [hovered, setHovered] = useState(false);

    return (
        <Stack width="100%">
            <Stack
                width="100%"
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                paddingY={4}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={item.href ? () => window.open(item.href, '_blank') : undefined}
                sx={{ cursor: item.href ? 'pointer' : 'default' }}
            >
                <Stack
                    direction={{ md: 'row', xs: 'column' }}
                    spacing={2}
                    alignItems={{ md: 'center', xs: 'flex-start' }}
                >
                    <Typography
                        sx={{
                            fontSize: '15px',
                            fontWeight: 600,
                            color: theme.palette.primary.main,
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography sx={{ fontSize: '14px', color: secondaryColor }}>
                        {item.sourceLine}
                    </Typography>
                </Stack>
                <CircularArrowButton variant="outlined" size={50} hovered={hovered} />
            </Stack>
            {showDivider && <Divider sx={{ borderColor: dividerColor }} />}
        </Stack>
    );
};

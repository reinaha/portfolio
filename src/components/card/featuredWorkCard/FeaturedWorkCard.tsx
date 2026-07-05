import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { CircularArrowButton } from '@/components';
import { IFeaturedWorkCard } from '@/models';

type FeaturedWorkCardProps = IFeaturedWorkCard;

export const FeaturedWorkCard = ({
    card,
    tier,
    title,
    subtitle,
    image,
}: FeaturedWorkCardProps) => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';
    const arrowSize = tier === 'large' ? 56 : 50;
    const titleFontSize = tier === 'large' ? '20px' : '18px';
    const [hovered, setHovered] = useState(false);

    return (
        <Stack
            onClick={card.onClick(navigate)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            sx={{ cursor: 'pointer', width: '100%' }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: 300,
                    borderRadius: '22px',
                    overflow: 'hidden',
                }}
            >
                <Box
                    sx={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transition: 'transform 0.6s ease-in-out',
                        transform: hovered ? 'scale(1.06)' : 'scale(1)',
                    }}
                />
            </Box>
            <Stack direction="row" alignItems="center" spacing={4} paddingY={4}>
                <CircularArrowButton
                    variant="outlined"
                    size={arrowSize}
                    hovered={hovered}
                />
                <Stack>
                    <Typography
                        sx={{
                            fontFamily: 'DM Sans',
                            fontSize: titleFontSize,
                            lineHeight: '25px',
                            letterSpacing: '-0.2px',
                            fontWeight: 400,
                            color: theme.palette.primary.main,
                        }}
                    >
                        {title}
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: '12px',
                            lineHeight: '18px',
                            letterSpacing: '0.5px',
                            fontFamily: 'Raleway',
                            fontWeight: 500,
                            color: secondaryColor,
                        }}
                    >
                        {subtitle}
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

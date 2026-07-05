import { Box, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { PortfolioCard } from '@/components';
import { VisualWorksData } from '@/data';

export const VisualWorksSection = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';

    return (
        <Stack
            id="visualwork"
            width="100%"
            maxWidth="1024px"
            marginX="auto"
            spacing={6}
            paddingTop={16}
            paddingBottom={39}
        >
            <Typography
                sx={{
                    fontSize: '13px',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    color: secondaryColor,
                    paddingBottom: 5,
                }}
            >
                Visual Works
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    width: '100%',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
                    gap: 5,
                }}
            >
                {VisualWorksData.map(({ card }, index) => (
                    <PortfolioCard
                        key={index}
                        title={card.title}
                        subtitle={card.subtitle}
                        backgroundImage={card.backgroundImg}
                        textColor={card.textColor}
                        arrowVariant={isDarkMode ? 'solidDark' : 'solidLight'}
                        arrowSize={50}
                        buttonOnClick={card.onClick(navigate)}
                    />
                ))}
            </Box>
        </Stack>
    );
};

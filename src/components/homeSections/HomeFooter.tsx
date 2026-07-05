import { Icon, IconButton, Stack, Typography, useTheme } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LogoDark, LogoLight } from '@/icons';

export const HomeFooter = () => {
    const navigate = useNavigate();
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';
    const secondaryColor = isDarkMode ? 'rgba(255, 255, 255, 0.6)' : '#818181';

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            maxWidth="1024px"
            marginX="auto"
            width="100%"
            paddingY={20}
        >
            <IconButton
                onClick={() => navigate('/')}
                sx={{ padding: 0, height: '1.5em' }}
            >
                <Icon sx={{ height: '100%', width: '100%' }}>
                    <img
                        src={isDarkMode ? LogoDark : LogoLight}
                        alt="logo"
                        style={{ height: '100%' }}
                    />
                </Icon>
            </IconButton>
            <Typography sx={{ fontSize: '14px', color: secondaryColor }}>
                Sumin · Product Designer
            </Typography>
        </Stack>
    );
};

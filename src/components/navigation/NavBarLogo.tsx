import { keyframes } from '@emotion/react';
import { Box, Icon, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LogoDark, LogoLight } from '@/icons';
import { NavBarComponent } from '@/models';

// Logo starts standing upright (rotated -90deg from its normal orientation)
// and topples clockwise into place, like it's falling over onto its side —
// the overshoot in the easing gives it a little settle/wobble at the end.
const fallOver = keyframes`
    0% { transform: rotate(-90deg); }
    100% { transform: rotate(0deg); }
`;

export const NavBarLogo = ({ isDarkTheme = true, curPath }: NavBarComponent) => {
    const navigate = useNavigate();

    return (
        <IconButton
            onClick={() => navigate('/', { state: { from: curPath } })}
            sx={{ padding: '0px', height: '1.5em' }}
        >
            <Icon sx={{ height: '100%', width: '100%' }}>
                <Box
                    component="img"
                    src={isDarkTheme ? LogoDark : LogoLight}
                    alt="logo"
                    sx={{
                        height: '100%',
                        transformOrigin: 'center',
                        animation: `${fallOver} 0.7s cubic-bezier(0.34, 1.56, 0.64, 1) 1`,
                    }}
                />
            </Icon>
        </IconButton>
    );
};

import { Icon, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import { LogoDark, LogoLight } from '@/icons';
import { NavBarComponent } from '@/models';

export const NavBarLogo = ({ isDarkTheme = true, curPath }: NavBarComponent) => {
    const navigate = useNavigate();

    return (
        <IconButton
            onClick={() => navigate('/', { state: { from: curPath } })}
            sx={{ padding: '0px', height: '1.5em' }}
        >
            <Icon sx={{ height: '100%', width: '100%' }}>
                <img
                    src={isDarkTheme ? LogoDark : LogoLight}
                    alt="logo"
                    style={{ height: '100%' }}
                />
            </Icon>
        </IconButton>
    );
};

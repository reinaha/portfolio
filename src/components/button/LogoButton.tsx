import { Avatar, Icon, IconButton } from '@mui/material';

type LogoButtonProps = {
    iconSrc: string;
};

export const LogoButton = ({ iconSrc }: LogoButtonProps) => {
    return (
        <IconButton sx={{ padding: '0px' }}>
            <Avatar
                sx={{
                    bgcolor: 'black',
                    width: '60px',
                    height: '60px',
                    '&:hover': {
                        backgroundColor: '#292D32',
                    },
                }}
            >
                <Icon sx={{ textAlign: 'center' }}>
                    <img
                        src={iconSrc}
                        className="logoButtonIcon"
                        alt="logo"
                        style={{
                            height: '100%',
                        }}
                    />
                </Icon>
            </Avatar>
        </IconButton>
    );
};

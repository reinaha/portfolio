import { Icon } from '@mui/material';

type ColourIconsProps = {
    icon: string;
};

export const ColourIcons = ({ icon }: ColourIconsProps) => {
    return (
        <Icon
            sx={{
                textAlign: 'center',
                height: 'auto',
                width: 'auto',
                fontSize: '28px',
                marginBottom: 1,
            }}
        >
            <img
                src={icon}
                style={{
                    height: '1.6em',
                }}
                alt="icon"
            />
        </Icon>
    );
};

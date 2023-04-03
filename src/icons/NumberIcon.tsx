import { Avatar, Typography } from '@mui/material';

interface NumberIconProps {
    iconColor?: {
        primary?: string;
        secondary?: string;
    };
    number: number;
}

export const NumberIcon = ({
    number,
    iconColor = { primary: '#FFFFFF', secondary: '#000000' },
}: NumberIconProps) => {
    return (
        <Avatar
            sx={{
                color: iconColor.primary,
                bgcolor: iconColor.secondary,
                maxWidth: '31px',
                maxHeight: '31px',
            }}
        >
            <Typography variant="body2" fontWeight={600}>
                {number}
            </Typography>
        </Avatar>
    );
};

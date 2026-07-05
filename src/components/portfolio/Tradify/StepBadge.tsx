import { Box, Typography } from '@mui/material';

type StepBadgeProps = {
    label: string;
    color: { primary: string; secondary: string };
};

export const StepBadge = ({ label, color }: StepBadgeProps) => {
    return (
        <Box
            sx={{
                backgroundColor: color.secondary,
                borderRadius: '32px',
                paddingX: 4,
                paddingY: 2,
                width: 'fit-content',
            }}
        >
            <Typography
                sx={{ color: color.primary, fontWeight: 500, whiteSpace: 'nowrap' }}
            >
                {label}
            </Typography>
        </Box>
    );
};

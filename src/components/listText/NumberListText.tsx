import { Box, Chip, Stack, Typography } from '@mui/material';

type NumberListTextProps = {
    number: number;
    text: string | string[];
    numberColor: string;
    backgroundColor: string;
};

export const NumberListText = ({
    number,
    text,
    numberColor,
    backgroundColor,
}: NumberListTextProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Chip
                label={number}
                sx={{
                    bgcolor: `${backgroundColor}`,
                    color: `${numberColor}`,
                    fontSize: '18px',
                    fontWeight: 500,
                    marginRight: 0.955,
                }}
            />
            {Array.isArray(text) ? (
                <Stack spacing={1.4}>
                    {text.map((t, index) => (
                        <Typography key={index}>{t}</Typography>
                    ))}
                </Stack>
            ) : (
                <Typography>{text}</Typography>
            )}
        </Box>
    );
};

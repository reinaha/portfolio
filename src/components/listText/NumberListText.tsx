import { Box, Chip, Stack, Typography } from '@mui/material';

type NumberListTextProps = {
    number: number;
    textTitle?: string;
    text: string | string[];
    numberColor: string;
    backgroundColor: string;
    listSpacing?: number;
};

export const NumberListText = ({
    number,
    textTitle,
    text,
    numberColor,
    backgroundColor,
    listSpacing = 1.4,
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
                    marginRight: 0.6,
                }}
            />
            {Array.isArray(text) ? (
                <Stack spacing={listSpacing}>
                    {textTitle ? (
                        <Typography fontWeight="bold">{textTitle}</Typography>
                    ) : null}
                    {text.map((t, index) => (
                        <Typography key={index}>{t}</Typography>
                    ))}
                </Stack>
            ) : (
                <Stack spacing={listSpacing}>
                    {textTitle ? (
                        <Typography fontWeight="bold">{textTitle}</Typography>
                    ) : null}
                    <Typography>{text}</Typography>
                </Stack>
            )}
        </Box>
    );
};

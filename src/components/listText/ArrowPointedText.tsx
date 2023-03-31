import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Stack, Typography } from '@mui/material';

type ArrowPointedTextProps = {
    text: string | string[];
};

export const ArrowPointedText = ({ text }: ArrowPointedTextProps) => {
    return (
        <Box sx={{ display: 'flex' }}>
            <ArrowForwardIcon
                fontSize="small"
                sx={{ marginTop: '0.25em', marginRight: 1.5 }}
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

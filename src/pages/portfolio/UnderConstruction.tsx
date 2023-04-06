import ConstructionIcon from '@mui/icons-material/Construction';
import { Box, Stack, Typography } from '@mui/material';

export const UnderConstruction = () => {
    return (
        <Stack paddingTop={30} spacing={10} textAlign="center" alignContent="center">
            <Typography variant="h1">Under Construction</Typography>
            <Box sx={{ fontSize: '100px' }}>
                <ConstructionIcon fontSize="inherit" />
            </Box>
            <Typography variant="h3">There&apos;s no content here.</Typography>
        </Stack>
    );
};

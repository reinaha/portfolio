import { Stack, Typography } from '@mui/material';

export const HomeTopCover = () => {
    return (
        <Stack alignItems="center">
            <Typography paddingTop={7.5} paddingBottom={12.5} variant="subtitle1">
                Hello, I&apos;m Sumin
            </Typography>
            <Typography textAlign="center" variant="h1">
                I&apos;m a Product Designer,
            </Typography>
            <Typography textAlign="center" variant="h1">
                with a Visual and Web Development background
            </Typography>
            <Typography textAlign="center" paddingTop={5} variant="subtitle2">
                Focused on accessible, scalable product design grounded in real world
                usage
            </Typography>
        </Stack>
    );
};

import { Stack, Typography } from '@mui/material';

export const HomeTopCover = () => {
    return (
        <Stack alignItems="center">
            <Typography paddingTop={7.5} paddingBottom={12.5} variant="subtitle1">
                Hello, I&apos;m Sumin
            </Typography>
            <Typography textAlign="center" variant="h1">
                I&apos;m a UI/UX Designer,
            </Typography>
            <Typography textAlign="center" variant="h1">
                with Web Development and Marketing Skills
            </Typography>
            <Typography textAlign="center" paddingTop={5} variant="subtitle2">
                I specialise in UI/UX Design, Responsive Web Design and Visual Development
            </Typography>
        </Stack>
    );
};

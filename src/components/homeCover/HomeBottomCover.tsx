import { Box, Button, Stack, StackProps, Typography } from '@mui/material';

interface ButtomButton {
    key: number;
    text: string;
    bgColor?: {
        dark: string;
        light: string;
    };
    onClick(): Window | null | void;
}

const bottomButtons: ButtomButton[] = [
    {
        key: 0,
        text: 'reina.smh@gmail.com',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
        onClick: () => console.log('No Email Yet'),
    },
    {
        key: 1,
        text: 'LinkedIn',
        onClick: () => window.open('https://www.linkedin.com/in/reinaha/'),
    },
    {
        key: 2,
        text: 'Dribbble',
        onClick: () => window.open('https://dribbble.com/reinaha/'),
    },
];

export const HomeBottomCover = ({ ...props }: StackProps) => {
    return (
        <Stack
            id="ContactMe"
            direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
            width="100%"
            paddingBottom={30}
            rowGap={5}
            alignItems="center"
            className="ContactMe"
            {...props}
        >
            <Box flexGrow={1}>
                <Typography variant="h1">Let&apos;s Talk</Typography>
            </Box>
            <Stack
                direction={{ lg: 'row', md: 'row', sm: 'row', xs: 'column' }}
                spacing={3.5}
            >
                {bottomButtons.map((page) => {
                    const buttonColor = page.bgColor?.dark;

                    return (
                        <Button
                            key={page.key}
                            color="primary"
                            disableElevation
                            onClick={page.onClick}
                            sx={{
                                bgcolor: buttonColor,
                                borderRadius: 25,
                                paddingLeft: 4.5,
                                paddingRight: 4.5,
                                paddingTop: 2,
                                paddingBottom: 2,
                            }}
                        >
                            <Typography variant="button" textTransform="none">
                                {page.text}
                            </Typography>
                        </Button>
                    );
                })}
            </Stack>
        </Stack>
    );
};

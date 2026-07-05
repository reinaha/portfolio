import { Box, BoxProps, Container, useTheme } from '@mui/material';

interface PortfolioVideoProps extends BoxProps {
    videoSrc: string;
    poster?: string;
}

export const PortfolioVideo = ({ videoSrc, poster, ...props }: PortfolioVideoProps) => {
    return (
        <Box
            component="video"
            autoPlay
            loop
            muted
            playsInline
            poster={poster}
            width="100%"
            {...props}
        >
            <source src={videoSrc} type="video/webm" />
        </Box>
    );
};

export const PortfolioVideoContainer = (props: PortfolioVideoProps) => {
    const containerPadding = 5;
    const theme = useTheme();
    const bgcolor =
        theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, 0.05)' : '#F5F5F5';

    return (
        <Box bgcolor={bgcolor}>
            <Container
                disableGutters
                sx={{
                    paddingLeft: containerPadding,
                    paddingRight: containerPadding,
                    paddingTop: 22,
                    paddingBottom: 22,
                }}
            >
                <PortfolioVideo sx={{ marginTop: 6.5 }} {...props} />
            </Container>
        </Box>
    );
};

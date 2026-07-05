import { Box, BoxProps, Container } from '@mui/material';

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

    return (
        <Box bgcolor="#F5F5F5">
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

import { Box, BoxProps, Container, useTheme } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface PortfolioImageProps extends BoxProps {
    imageSrc: string;
}

export const PortfolioImage = ({ imageSrc }: PortfolioImageProps) => {
    return <LazyLoadImage width="100%" alt="portfolio" src={imageSrc} />;
};

export const PortfolioImageExtraMargin = (props: PortfolioImageProps) => {
    return (
        <Box>
            <PortfolioImage sx={{ marginTop: 6.5 }} {...props} />
        </Box>
    );
};

export const PortfolioImageContainer = (props: PortfolioImageProps) => {
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
                <PortfolioImage sx={{ marginTop: 6.5 }} {...props} />
            </Container>
        </Box>
    );
};

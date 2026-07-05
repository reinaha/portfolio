import 'react-lazy-load-image-component/src/effects/opacity.css';
// Side-effect import: registers every image's real aspect ratio (see
// imageDimensions.ts) before any PortfolioImage below ever renders.
import '@/images/generatedImageDimensions';

import { Box, BoxProps, Container, Skeleton, useTheme } from '@mui/material';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { getImageAspectRatio } from '@/images/imageDimensions';

interface PortfolioImageProps extends BoxProps {
    imageSrc: string;
}

// Fallback for any image not covered by the generated aspect-ratio registry
// (e.g. one added without re-running generateImageDimensions.py) — a 2:1 wide
// banner is close enough to hold the layout steady while it downloads.
const FALLBACK_ASPECT_RATIO = 2;

export const PortfolioImage = ({ imageSrc, sx, ...props }: PortfolioImageProps) => {
    const [loaded, setLoaded] = useState(false);
    const aspectRatio = getImageAspectRatio(imageSrc) ?? FALLBACK_ASPECT_RATIO;

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                // MUI's sx system appends "px" to bare numbers for CSS
                // properties it doesn't recognise as unitless, which silently
                // breaks aspect-ratio — pass it as a string to avoid that.
                aspectRatio: loaded ? 'auto' : String(aspectRatio),
                ...sx,
            }}
            {...props}
        >
            {!loaded && (
                <Skeleton
                    variant="rectangular"
                    animation="wave"
                    sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                />
            )}
            <LazyLoadImage
                width="100%"
                alt="portfolio"
                src={imageSrc}
                effect="opacity"
                afterLoad={() => setLoaded(true)}
            />
        </Box>
    );
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

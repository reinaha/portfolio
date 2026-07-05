import 'react-lazy-load-image-component/src/effects/opacity.css';

import { Box, BoxProps, Container, Skeleton, useTheme } from '@mui/material';
import { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface PortfolioImageProps extends BoxProps {
    imageSrc: string;
}

// Most of these case-study images land somewhere around a 2:1 wide banner —
// close enough to hold the layout steady while the real image is still
// downloading, without needing per-image dimensions on hand.
const PLACEHOLDER_ASPECT_RATIO = '2 / 1';

export const PortfolioImage = ({ imageSrc, sx, ...props }: PortfolioImageProps) => {
    const [loaded, setLoaded] = useState(false);

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                aspectRatio: loaded ? 'auto' : PLACEHOLDER_ASPECT_RATIO,
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

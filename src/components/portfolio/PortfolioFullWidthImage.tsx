import { Box, BoxProps, Fade } from '@mui/material';
import { useRef } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';

interface PortfolioFullWidthImageProps extends BoxProps {
    image: string;
}

export const PortfolioFullWidthImage = ({
    image,
    ...props
}: PortfolioFullWidthImageProps) => {
    const componentRef = useRef(null);

    const isInViewPort = useIsInViewport(componentRef);
    return (
        <Fade in={isInViewPort} timeout={2000}>
            <Box
                width="100%"
                component="img"
                alt="Cover"
                src={image}
                ref={componentRef}
                {...props}
            />
        </Fade>
    );
};

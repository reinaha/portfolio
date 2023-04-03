import {
    Box,
    BoxProps,
    Container,
    Fade,
    Slide,
    Typography,
    useScrollTrigger,
} from '@mui/material';
import { Variant } from '@mui/material/styles/createTypography';
import { ReactNode, useEffect, useRef, useState } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';

export interface PortfolioSectionProps extends BoxProps {
    title?: string;
    content?: ReactNode;
    headerVariant?: Variant;
}

export const PortfolioSection = ({
    title,
    content,
    headerVariant = 'h3',
    ...props
}: PortfolioSectionProps) => {
    const [visible, setVisible] = useState<boolean>(false);
    const containerRef = useRef(null);

    const isInViewPort = useIsInViewport(containerRef);

    const scrollTrigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 800,
    });

    useEffect(() => {
        if (!visible && isInViewPort) {
            setVisible(true);
        }
    }, [visible, isInViewPort]);

    return (
        <Box ref={containerRef} {...props}>
            <Slide
                container={containerRef.current}
                direction="up"
                in={visible}
                easing="cubic-bezier(0, 1, .8, 1)"
            >
                <Container>
                    <Typography variant={headerVariant} paddingBottom={1.5}>
                        {title}
                    </Typography>
                    {content}
                </Container>
            </Slide>
        </Box>
    );
};

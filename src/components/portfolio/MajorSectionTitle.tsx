import { Container, Fade, Stack, Typography } from '@mui/material';
import { useRef } from 'react';

import { useIsInViewport } from '@/hooks/Viewport';

export type MajorSectionTitleProps = {
    title: string;
    subTitle: React.ReactNode;
};

export const MajorSectionTitle = ({ title, subTitle }: MajorSectionTitleProps) => {
    const componentRef = useRef(null);

    const isInViewPort = useIsInViewport(componentRef);

    return (
        <Stack paddingTop={5} paddingBottom={5} sx={{ backgroundColor: '#FAFAFA' }}>
            <Fade in={isInViewPort} timeout={2000}>
                <Container>
                    {subTitle}
                    <Typography variant="h1" paddingBottom={1.5} ref={componentRef}>
                        {title}
                    </Typography>
                </Container>
            </Fade>
        </Stack>
    );
};

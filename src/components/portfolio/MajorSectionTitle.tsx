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
        <Stack
            paddingTop={'100px'}
            paddingBottom={'100px'}
            sx={{ backgroundColor: 'rgb(233,233,233)' }}
        >
            <Fade in={isInViewPort} timeout={2000}>
                <Container>
                    {subTitle}
                    <Typography
                        variant="h1"
                        paddingBottom={1.5}
                        color="black"
                        ref={componentRef}
                    >
                        {title}
                    </Typography>
                </Container>
            </Fade>
        </Stack>
    );
};

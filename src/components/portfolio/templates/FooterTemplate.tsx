import { Box, Container } from '@mui/material';

import { HomeBottomCover } from '@/components/homeCover';
import { FooterTemplateProps } from '@/models';

const DefaultFooter = () => {
    return (
        <Container>
            <HomeBottomCover />
        </Container>
    );
};

export const FooterTemplate = ({
    FooterContent = DefaultFooter,
}: FooterTemplateProps) => {
    return (
        <Box>
            <FooterContent />
        </Box>
    );
};

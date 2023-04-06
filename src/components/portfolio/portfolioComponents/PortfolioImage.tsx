import { Box, BoxProps, Container } from '@mui/material';

interface PortfolioImageProps extends BoxProps {
    imageSrc: string;
}

export const PortfolioImage = ({ imageSrc, ...props }: PortfolioImageProps) => {
    return (
        <Box
            width="100%"
            component="img"
            alt="portfolio-image"
            src={imageSrc}
            {...props}
        />
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
                <PortfolioImage sx={{ marginTop: 6.5 }} {...props} />
            </Container>
        </Box>
    );
};

import { Box, BoxProps } from '@mui/material';

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

export const PortfolioImageExtraMargin = ({ ...props }: PortfolioImageProps) => {
    return (
        <Box>
            <PortfolioImage sx={{ marginTop: 6.5 }} {...props} />
        </Box>
    );
};

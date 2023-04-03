import { BoxProps } from '@mui/material';

import { PortfolioImage } from '@/components';

interface PortfolioFullWidthImageProps extends BoxProps {
    image: string;
}

export const PortfolioFullWidthImage = ({
    image,
    ...props
}: PortfolioFullWidthImageProps) => {
    return <PortfolioImage imageSrc={image} width="100%" {...props} />;
};

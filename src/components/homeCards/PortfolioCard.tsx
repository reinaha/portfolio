import { Box, Typography } from '@mui/material';

import { DiagonalArrowButton } from '../buttons/DiagonalArrowButton';
import { FiCard, FiCardContent, FiCardMedia } from '../fullImageCard';

type PortfolioCardProps = {
    title: string;
    subTitle: string;
    backgroundImage: string;
    buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const PortfolioCard = ({
    title,
    subTitle,
    backgroundImage,
    buttonOnClick,
}: PortfolioCardProps) => {
    return (
        <FiCard>
            <FiCardMedia image={backgroundImage} />
            <FiCardContent>
                <Box sx={{ display: 'inline-flex', width: '100%' }}>
                    <Box sx={{ color: 'black', flexGrow: 1 }}>
                        <Typography fontSize="24px" fontWeight="600">
                            {title}
                        </Typography>
                        <Typography variant="subtitle1" component="h6">
                            {subTitle}
                        </Typography>
                    </Box>
                    <DiagonalArrowButton onClick={buttonOnClick} />
                </Box>
            </FiCardContent>
        </FiCard>
    );
};

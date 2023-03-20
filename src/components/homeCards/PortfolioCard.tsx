import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Box, IconButton, Typography } from '@mui/material';

import { FiCard, FiCardContent, FiCardMedia } from '../fullImageCard';

type PortfolioCardProps = {
    title: string;
    subTitle: string;
    backgroundImage: string;
};

export const PortfolioCard = ({
    title,
    subTitle,
    backgroundImage,
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
                    <IconButton
                        sx={{
                            height: '2em',
                            padding: '0.5em',
                            color: 'white',
                            backgroundColor: '#292D32',
                        }}
                    >
                        <NorthEastIcon />
                    </IconButton>
                </Box>
            </FiCardContent>
        </FiCard>
    );
};

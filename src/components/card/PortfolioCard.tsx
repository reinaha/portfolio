import { Chip, Stack, Typography } from '@mui/material';

import { DiagonalArrowButton } from '../button/DiagonalArrowButton';
import { FiCard, FiCardContent, FiCardMedia } from './fullImageCard';

type PortfolioCardProps = {
    title: string;
    subtitle?: string;
    tags?: string[];
    backgroundImage?: string;
    buttonOnClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const PortfolioCard = ({
    title,
    subtitle,
    tags = [],
    backgroundImage,
    buttonOnClick,
}: PortfolioCardProps) => {
    return (
        <FiCard onClick={buttonOnClick}>
            <FiCardMedia image={backgroundImage} />
            <FiCardContent>
                <Stack direction="row">
                    <Stack spacing={3} sx={{ color: 'black', flexGrow: 1 }}>
                        <Typography fontSize="24px" fontWeight={600}>
                            {title}
                        </Typography>
                        {subtitle ? (
                            <Typography fontSize="16px" fontWeight={500}>
                                {subtitle}
                            </Typography>
                        ) : null}
                        <Stack direction="row" spacing={2}>
                            {tags.map((t, index) => (
                                <Chip
                                    key={index}
                                    label={t}
                                    sx={{
                                        color: '#FFFFFF',
                                        backgroundColor: '#292D32',
                                        opacity: 0.5,
                                    }}
                                />
                            ))}
                        </Stack>
                    </Stack>
                    <DiagonalArrowButton />
                </Stack>
            </FiCardContent>
        </FiCard>
    );
};

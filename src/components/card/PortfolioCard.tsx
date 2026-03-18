import { CardMedia, Chip, Stack, Typography, TypographyProps } from '@mui/material';
import { useState } from 'react';

import { DiagonalArrowButton } from '../button/DiagonalArrowButton';
import { FiCard, FiCardContent, FiCardMedia } from './fullImageCard';

type PortfolioCardProps = {
    title: string;
    subtitle?: string;
    tags?: string[];
    backgroundImage?: string;
    textColor?: string;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
    titleSubtitleSpacing?: number;
    titleIcon?: React.ReactNode;
    hoverVideo?: string;
    buttonOnClick?: React.MouseEventHandler<HTMLDivElement>;
};

export const PortfolioCard = ({
    title,
    subtitle,
    tags = [],
    backgroundImage,
    textColor = 'black',
    titleProps = {
        fontSize: '22px',
        fontWeight: 600,
        whiteSpace: 'pre-wrap',
        lineHeight: '28px',
        letterSpacing: '-0.01em',
    },
    subtitleProps = {
        fontSize: '14px',
        fontWeight: 500,
        lineHeight: '30px',
        letterSpacing: '-0.02em',
    },
    titleSubtitleSpacing = 1,
    titleIcon,
    hoverVideo,
    buttonOnClick,
}: PortfolioCardProps) => {
    const [hover, setHover] = useState(false);

    return (
        <FiCard
            onClick={buttonOnClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {hover && hoverVideo ? (
                <CardMedia
                    component="video"
                    image={hoverVideo}
                    playsInline
                    preload="auto"
                    loop
                    autoPlay
                    muted
                    sx={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        height: '100%',
                        width: '100%',
                        transition: 'transform 0.6s ease-in-out',
                    }}
                />
            ) : (
                <>
                    <FiCardMedia image={backgroundImage} />
                    <FiCardContent>
                        <Stack direction="row">
                            <Stack
                                spacing={titleSubtitleSpacing}
                                sx={{ color: textColor, flexGrow: 1 }}
                            >
                                {titleIcon ? titleIcon : null}
                                <Typography {...titleProps}>{title}</Typography>
                                {subtitle ? (
                                    <Typography {...subtitleProps}>{subtitle}</Typography>
                                ) : null}
                                {tags ? (
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
                                ) : null}
                            </Stack>
                            <DiagonalArrowButton />
                        </Stack>
                    </FiCardContent>
                </>
            )}
        </FiCard>
    );
};

import { Chip, Stack, Typography } from '@mui/material';

import {
    PortfolioSectionContainer,
    PortfolioSectionContainerProps,
} from '../portfolioComponents';

interface PortfolioChipSectionProps extends PortfolioSectionContainerProps {
    title: string;
    subtitle?: string;
    color: {
        primary: string;
        secondary: string;
    };
}

export const PortfolioChipSection = ({
    title,
    subtitle,
    color: { primary, secondary },
    children,
}: PortfolioChipSectionProps) => {
    return (
        <PortfolioSectionContainer spacing={7.5}>
            <Stack direction="row" spacing={4} alignItems="center">
                <Chip
                    label={title}
                    sx={{
                        bgcolor: secondary,
                        color: primary,
                        fontSize: '14px',
                        fontWeight: 500,
                        padding: '8px 4px',
                        borderRadius: '32px',
                        width: 'fit-content',
                    }}
                />
                {subtitle ? <Typography>{subtitle}</Typography> : null}
            </Stack>
            {children}
        </PortfolioSectionContainer>
    );
};

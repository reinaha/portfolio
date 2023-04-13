import { Chip } from '@mui/material';

import {
    PortfolioSectionContainer,
    PortfolioSectionContainerProps,
} from '../portfolioComponents';

interface PortfolioChipSectionProps extends PortfolioSectionContainerProps {
    title: string;
    color: {
        primary: string;
        secondary: string;
    };
}

export const PortfolioChipSection = ({
    title,
    color: { primary, secondary },
    children,
}: PortfolioChipSectionProps) => {
    return (
        <PortfolioSectionContainer spacing={7.5}>
            <Chip
                label={title}
                sx={{
                    bgcolor: secondary,
                    color: primary,
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 4px',
                    borderRadius: '32px',
                    width: '100px',
                }}
            />
            {children}
        </PortfolioSectionContainer>
    );
};

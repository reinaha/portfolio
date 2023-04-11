import { Typography } from '@mui/material';

import { PortfolioDetailCards, PortfolioSectionContainer } from '@/components';
import { PortfolioHeader } from '@/models';

export const HeaderContentTemplate = ({
    title,
    description,
    headerCards,
}: PortfolioHeader) => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">{title}</Typography>
            {description ? <Typography variant="body2">{description}</Typography> : null}
            {headerCards && headerCards.length > 0 ? (
                <PortfolioDetailCards headerCards={headerCards} />
            ) : null}
        </PortfolioSectionContainer>
    );
};

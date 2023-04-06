import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppProcess } from '@/images/PropertiMaxApp';

export const DesignProcessContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                This project spanned over a period of 6 months from Aug 2019 - Jan 2020
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxAppProcess} />
        </PortfolioSectionContainer>
    );
};

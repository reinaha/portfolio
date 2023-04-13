import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxWebProcess } from '@/images/PropertiMaxWeb';

export const DesignProcessContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                This project spanned over a period of 6 months from April 2018 - October
                2018
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxWebProcess} />
        </PortfolioSectionContainer>
    );
};

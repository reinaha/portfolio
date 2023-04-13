import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxDashboardProcess } from '@/images/PropertiMaxDashboard';

export const DesignProcessContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                This project spanned over a period of 6 months from November 2018 - April
                2019
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxDashboardProcess} />
        </PortfolioSectionContainer>
    );
};

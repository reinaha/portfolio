import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppProcess } from '@/images/PropertiMaxApp';

export const DesignProcessContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                This project spanned over a period of 6 months from April 2019 - October
                2019
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxAppProcess} />
        </PortfolioSectionContainer>
    );
};

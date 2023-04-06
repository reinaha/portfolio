import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { DesignProcess } from '@/images/OsstemDentalEShop';

export const DesignProcessContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                This project spanned over a period of three months from Feb 2022 - May
                2022
            </Typography>
            <PortfolioImageExtraMargin imageSrc={DesignProcess} />
        </PortfolioSectionContainer>
    );
};

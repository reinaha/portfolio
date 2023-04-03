import { Typography } from '@mui/material';
import DesignProcess from '@resources/OsstemDentalEshop/Intro/DesignProcess.png';

import { PortfolioContainer, PortfolioImageExtraMargin } from '@/components';

export const DesignProcessContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                This project spanned over a period of three months from Feb 2022 - May
                2022
            </Typography>
            <PortfolioImageExtraMargin imageSrc={DesignProcess} />
        </PortfolioContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioContainer, PortfolioImageExtraMargin } from '@/components';
import { PropertiMaxAppProcess } from '@/images/PropertiMaxApp';

export const DesignProcessContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                This project spanned over a period of 6 months from Aug 2019 - Jan 2020
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxAppProcess} />
        </PortfolioContainer>
    );
};

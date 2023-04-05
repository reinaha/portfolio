import { Typography } from '@mui/material';

import { PortfolioContainer } from '@/components';
import { OsstemDentalEShopCardInfo } from '@/data';

import { PortfolioDetailCards } from '../portfolioBricks/PortfolioDetailCards';

export const HeaderContent = () => {
    return (
        <PortfolioContainer spacing={5}>
            <Typography variant="h1">PropertiMax App</Typography>
            <Typography variant="body2">
                Prior to our decision to develop an e-commerce shop, the company relied
                exclusively on salespeople who would visit dental clinics to meet with
                dentists and sell our products. While this selling strategy was
                well-suited to the New Zealand market&apos;s preference for face-to-face
                interactions and conservatism, it also resulted in unstable income for our
                company.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={OsstemDentalEShopCardInfo} />
        </PortfolioContainer>
    );
};

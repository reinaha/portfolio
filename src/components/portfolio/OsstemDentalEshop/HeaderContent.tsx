import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { OsstemDentalEShopCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">Osstem Dental E-Shop</Typography>
            <Typography variant="body2">
                The goal of the Osstem Dental E-shop project was to develop an application
                for dentists who use dental materials and products supplied by Osstem to
                purchase them. The project commenced during the COVID-19 pandemic, when an
                online platform to sell the products became necessary. This project
                involved collaborating with software developers working in Osstem&apos;s
                head office, based in Korea. I participated in the project as the sole
                UX/UI designer over the span of approximately three months.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={OsstemDentalEShopCardInfo} />
        </PortfolioSectionContainer>
    );
};

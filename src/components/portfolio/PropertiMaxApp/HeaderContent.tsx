import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { OsstemDentalEShopCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">PropertiMax App</Typography>
            <Typography variant="body2">
                PropertiMax real estate trading mobile application was one of the key
                projects of PropertiMax, a real estate trading startup. As a lead UX/UI
                Designer, I was responsible for the overall design of the app as well as
                planning all of the content within the app. I worked in a team with three
                application developers for this project.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={OsstemDentalEShopCardInfo} />
        </PortfolioSectionContainer>
    );
};

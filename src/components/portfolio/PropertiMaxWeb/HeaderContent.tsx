import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { PropertiMaxWebCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">PropertiMax Website</Typography>
            <Typography variant="body2">
                As a Lead UX/UI Designer for PropertiMax, a real estate trading startup, I
                played a crucial role in developing the PropertiMax Real Estate Trading
                Website. Working alongside two web developers, I oversaw the overall
                design of the website, including managing all of the content design.
                Additionally, I provided support for front-end development using HTML,
                CSS, and jQuery.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={PropertiMaxWebCardInfo} />
        </PortfolioSectionContainer>
    );
};

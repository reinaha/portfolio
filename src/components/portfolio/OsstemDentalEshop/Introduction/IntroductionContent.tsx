import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const IntroductionContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Osstem New Zealand aimed to develop an e-commerce application for selling
                dental products, including dental implants, tools, and equipment.
            </Typography>
            <Typography>
                Prior to the decision to develop an e-commerce shop, Osstem New Zealand
                relied exclusively on sales representatives to visit dental clinics and
                meet with dentists to sell dental products. While this sales strategy was
                well-suited to the New Zealand market&apos;s preference for face-to-face
                interactions and the conservative dental industry, it also resulted in
                unstable income for the company as the revenue was dependent on
                capabilities of individual sales representatives.
            </Typography>
            <Typography>
                During the COVID-19 pandemic, due to social distancing restrictions, it
                was hard for sales representatives to interact with the clients which
                impacted the company revenue. This raised a need for an online platform to
                assist how orders were carried out.
            </Typography>
        </PortfolioSectionContainer>
    );
};

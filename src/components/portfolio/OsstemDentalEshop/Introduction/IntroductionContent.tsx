import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const IntroductionContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Osstem New Zealand aimed to develop an e-commerce application for the
                purpose of retailing dental products, including dental implants, tools,
                and equipment
            </Typography>
            <Typography>
                Prior to our decision to develop an e-commerce shop, the company relied
                exclusively on salespeople who would visit dental clinics to meet with
                dentists and sell our products. While this selling strategy was
                well-suited to the New Zealand market&apos;s preference for face-to-face
                interactions and conservatism, it also resulted in unstable income for our
                company.
            </Typography>
            <Typography>
                This was due to our revenue being dependent on the capabilities of sales
                representatives, as well as revenue volatility being highly influenced by
                environmental changes such as the COVID-19 pandemic.
            </Typography>
        </PortfolioSectionContainer>
    );
};

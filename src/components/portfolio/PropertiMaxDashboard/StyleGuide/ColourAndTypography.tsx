import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxDashboardColor } from '@/images/PropertiMaxDashboard';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                In order to maintain brand identity while giving a sense of trust and
                reliability, the company has chosen a gradient colour that blends a light
                blue shade with its primary green colour. The lightened version of this
                colour has also been used as a secondary colour.
            </Typography>
            <Typography>
                For text colours, black has been chosen as the main colour for
                readability. To ensure harmony with other colours, a small amount of blue
                has been added to the basic black colour. We used a light blue colour,
                which is a mix of grey and blue, as the sub-colour. Since the dashboard
                contains a large amount of information, the main colour, black, was mainly
                used for section headings. For the rest of the content, we used the
                sub-colour to create a design that does not look too complex overall.
            </Typography>
            <Typography>
                As a real estate transaction application, it was important to have
                high-quality and trustworthy images. Therefore, a sans-serif font was
                chosen from a variety of options. Since the app contains a lot of
                information, a font with excellent readability that can easily display a
                large amount of text was needed. That&apos;s why the popular font
                &lsquo;Roboto&rsquo;, which is often used for content text, was chosen as
                the final font.
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxDashboardColor} />
        </PortfolioSectionContainer>
    );
};

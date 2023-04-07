import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxWebColor } from '@/images/PropertiMaxWeb';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The company has chosen a gradient color that mixes a light blue shade with
                its primary green color, in order to maintain its brand identity while
                increasing trust and reliability. The lightened version of this color has
                also been used as a secondary color.
            </Typography>
            <Typography>
                On the text front, we aimed for a dark color scheme to ensure readability.
                To complement our main color green, we added some green to the basic black
                color to create a deep dark green as our main text color. For the
                sub-color of text, we chose a color that is more than 50% desaturated from
                the deep dark green color.
            </Typography>
            <Typography>
                As a real estate transaction website, it was important to have
                high-quality and trustworthy images. Therefore, a sans-serif font was
                chosen from a variety of options. Since the website contains a lot of
                information, a font with excellent readability that can easily display a
                large amount of text was needed. That&apos;s why the popular font
                &lsquo;Roboto&rsquo;, which is often used for content text, was chosen as
                the final font.
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxWebColor} />
        </PortfolioSectionContainer>
    );
};

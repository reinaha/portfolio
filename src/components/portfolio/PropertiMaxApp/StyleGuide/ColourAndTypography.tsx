import { Typography } from '@mui/material';

import { PortfolioContainer, PortfolioImageExtraMargin } from '@/components';
import { PropertiMaxAppColor } from '@/images/PropertiMaxApp';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                The company has chosen a gradient color that mixes a light blue shade with
                its primary green color, in order to maintain its brand identity while
                increasing trust and reliability. The lightened version of this color has
                also been used as a secondary color.
            </Typography>
            <Typography>
                For text colors, black has been chosen as the main color for readability.
                To ensure harmony with other colors, a small amount of blue has been added
                to the basic black color. The sub-color for text was selected as a gray
                color that is more than 50% desaturated from the main text color black.
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
            <PortfolioImageExtraMargin imageSrc={PropertiMaxAppColor} />
        </PortfolioContainer>
    );
};

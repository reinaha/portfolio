import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppColor } from '@/images/PropertiMaxApp';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The company has chosen a gradient colour that mixes a light blue shade
                with its primary green colour, in order to maintain its brand identity
                while increasing trust and reliability. The lightened version of this
                colour has also been used as a secondary colour.
            </Typography>
            <Typography>
                For text colours, black has been chosen as the main colour for
                readability. To ensure harmony with other colours, a small amount of blue
                has been added to the basic black colour. The sub-color for text was
                selected as a grey colour that is more than 50% desaturated from the main
                text colour.
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
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { PropertiMaxWebColor } from '@/images/PropertiMaxWeb';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                In order to maintain brand identity and increase trust and reliability, a
                gradient colour has been chosen that mixes the company&apos;s primary
                green colour with a light blue shade. The lightened version of this colour
                has been used as a secondary colour.
            </Typography>
            <Typography>
                For text, a dark colour scheme has been chosen to ensure readability. To
                complement the main green colour, a deep dark green was created by adding
                green to basic black as the main text colour. For sub-colour text, a
                colour that is more than 50% desaturated from the deep dark green colour
                was chosen.
            </Typography>
            <Typography>
                As a real estate transaction website, it&apos;s crucial to have
                high-quality and trustworthy images. Therefore, a sans-serif font was
                chosen from a variety of options. Since the website contains a lot of
                information, it was necessary to select a font with excellent readability
                that can easily display a large amount of text. For this reason, the
                popular font &lsquo;Roboto&rsquo;, which is often used for content text,
                was selected as the final font.
            </Typography>
            <PortfolioImageExtraMargin imageSrc={PropertiMaxWebColor} />
        </PortfolioSectionContainer>
    );
};

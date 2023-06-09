import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { ColourTypography } from '@/images/OsstemDentalEShop';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The main color of the app is the company&apos;s representative color,
                orange, and the light orange was chosen as the sub-color.
            </Typography>
            <Typography>
                For text color, black was chosen as the main color for readability, but
                the color was slightly desaturated from the basic black color to create
                harmony with other colors. The sub-color for text was selected as a gray
                color that is more than 50% desaturated from the main text color black.
            </Typography>
            <Typography>
                Given that the primary target audience of the app is dentists and it deals
                with products in the medical industry, we selected the &#39;Inter&#39;
                font, a clean and professional sans-serif font, with consideration given
                to its crispness, neatness and professionalism.
            </Typography>
            <PortfolioImageExtraMargin imageSrc={ColourTypography} />
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { PortfolioImageExtraMargin, PortfolioSectionContainer } from '@/components';
import { ColourTypography } from '@/images/OsstemDentalEShop';

export const ColourAndTypographyContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The primary colour of the app is the company&apos;s brand colour - orange,
                and light orange was chosen as the secondary colour.
            </Typography>
            <Typography>
                For the text, black was chosen as the main colour for readability, but was
                slightly desaturated from the basic black colour to create harmony with
                other colours. The sub-colour chosen for text was grey that is more than
                50% desaturated from the main text colour.
            </Typography>
            <Typography>
                Given that the primary target audience of the app is dentists and the app
                deals with products in the medical industry, &lsquo;Inter&rsquo; font, a
                clean and professional sans-serif font, was used with consideration given
                to its crispness, neatness and professionalism.
            </Typography>
            <PortfolioImageExtraMargin imageSrc={ColourTypography} />
        </PortfolioSectionContainer>
    );
};

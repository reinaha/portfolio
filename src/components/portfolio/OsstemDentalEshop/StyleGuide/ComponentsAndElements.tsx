import { Container } from '@mui/material';

import Components from '../../../../../resources/OsstemDentalEshop/Components.jpg';
import { PortfolioFullWidthImage } from '../../PortfolioFullWidthImage';

export const ComponentsAndElementsContent = () => {
    return (
        <Container>
            <PortfolioFullWidthImage image={Components} sx={{ borderRadius: '8px' }} />
        </Container>
    );
};

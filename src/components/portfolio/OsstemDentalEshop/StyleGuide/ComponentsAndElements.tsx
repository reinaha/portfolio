import Components from '@resources/OsstemDentalEshop/StyleGuide/Components.png';

import { PortfolioImage } from '../../portfolioBricks';
import { PortfolioSectionContainer } from '../../portfolioBricks/PortfolioSectionContainer';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={Components} />
        </PortfolioSectionContainer>
    );
};

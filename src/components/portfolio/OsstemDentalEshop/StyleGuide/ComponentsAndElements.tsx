import Components from '@resources/OsstemDentalEshop/StyleGuide/Components.png';

import { PortfolioImage } from '../../portfolioBricks';
import { PortfolioContainer } from '../../portfolioBricks/PortfolioContainer';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioContainer>
            <PortfolioImage imageSrc={Components} />
        </PortfolioContainer>
    );
};

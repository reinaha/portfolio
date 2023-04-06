import { PortfolioImage } from '@/components';
import { PortfolioSectionContainer } from '@/components';
import { Components } from '@/images/OsstemDentalEShop';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={Components} />
        </PortfolioSectionContainer>
    );
};

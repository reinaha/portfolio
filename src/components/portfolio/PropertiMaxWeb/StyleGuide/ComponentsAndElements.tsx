import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxWebComponent } from '@/images/PropertiMaxWeb';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxWebComponent} />
        </PortfolioSectionContainer>
    );
};

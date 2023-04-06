import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppComponent } from '@/images/PropertiMaxApp';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxAppComponent} />
        </PortfolioSectionContainer>
    );
};

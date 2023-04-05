import { PortfolioContainer, PortfolioImage } from '@/components';
import { PropertiMaxAppComponent } from '@/images/PropertiMaxApp';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioContainer>
            <PortfolioImage imageSrc={PropertiMaxAppComponent} />
        </PortfolioContainer>
    );
};

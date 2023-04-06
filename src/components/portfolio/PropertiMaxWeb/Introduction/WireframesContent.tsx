import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxWebWireframe } from '@/images/PropertiMaxWeb';

export const WireframesContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxWebWireframe} />
        </PortfolioSectionContainer>
    );
};

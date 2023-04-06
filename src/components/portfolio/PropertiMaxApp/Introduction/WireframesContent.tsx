import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppWireframe } from '@/images/PropertiMaxApp';

export const WireframesContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxAppWireframe} />
        </PortfolioSectionContainer>
    );
};

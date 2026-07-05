import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxDashboardComponent } from '@/images/PropertiMaxDashboard';

export const ComponentsAndElementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxDashboardComponent} />
        </PortfolioSectionContainer>
    );
};

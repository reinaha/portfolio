import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { PropertiMaxAppSitemap } from '@/images/PropertiMaxApp';

export const SitemapContent = () => {
    return (
        <PortfolioSectionContainer>
            <PortfolioImage imageSrc={PropertiMaxAppSitemap} />
        </PortfolioSectionContainer>
    );
};

import Cover from '@resources/OsstemDentalEshop/StyleGuide/Cover.png';

import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { ColourAndTypographyContent, ComponentsAndElementsContent } from './StyleGuide';

export const StyleGuideMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Style Guide',
            }}
            coverImage={Cover}
            portfolioSections={[
                { title: 'Colour & Typography', content: <ColourAndTypographyContent /> },
                {
                    title: 'Components & Elements',
                    content: <ComponentsAndElementsContent />,
                },
            ]}
        />
    );
};

import { PortfolioMajorSection } from '@/components';
import { StyleGuideCover } from '@/images/OsstemDentalEShop';

import { ColourAndTypographyContent, ComponentsAndElementsContent } from './StyleGuide';

const styleGuideSections = [
    { title: 'Colour & Typography', content: <ColourAndTypographyContent /> },
    {
        title: 'Components & Elements',
        content: <ComponentsAndElementsContent />,
    },
];

export const StyleGuideMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Style Guide',
                subTitles: styleGuideSections.map((s) => s.title),
            }}
            coverImage={StyleGuideCover}
            portfolioSections={styleGuideSections}
        />
    );
};

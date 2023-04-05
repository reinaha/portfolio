import { PortfolioMajorSection } from '@/components';
import { PropertiMaxAppStyleguidecover } from '@/images/PropertiMaxApp';

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
            coverImage={PropertiMaxAppStyleguidecover}
            portfolioSections={styleGuideSections}
        />
    );
};

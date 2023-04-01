import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';
import {
    ColourAndTypographyContent,
    ComponentsAndElementsContent,
    GridContent,
} from './StyleGuide';

export const StyleGuideMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Style Guide',
                subTitle: <OsstemApplicationSubtitle />,
            }}
            portfolioSections={[
                { title: 'Colour & Typography', content: <ColourAndTypographyContent /> },
                { title: 'Grid System', content: <GridContent /> },
                {
                    title: 'Components & Elements',
                    content: <ComponentsAndElementsContent />,
                },
            ]}
        />
    );
};

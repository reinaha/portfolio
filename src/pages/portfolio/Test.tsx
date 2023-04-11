import { PortfolioMajorSection, PortfolioMajorSectionProps } from '@/components';
import {
    ChallengesContent,
    ColourAndTypographyContent,
    ComponentsAndElementsContent,
    DesignProcessContent,
    GoalsContent,
    IntroductionContent,
    PrototypeContent,
    SitemapContent,
    WireframesContent,
} from '@/components/portfolio/OsstemDentalEshop';
import {
    ContentTemplate,
    FooterTemplate,
    HeaderTemplate,
    PortfolioTemplate,
} from '@/components/portfolio/templates';
import { OsstemDentalEShopCardInfo } from '@/data';
import { HeaderCover, StyleGuideCover } from '@/images/OsstemDentalEShop';
import { MajorSections, PortfolioHeader } from '@/models';

const header: PortfolioHeader = {
    title: 'Test Portfolio',
    description: 'This is a test description for testing new templating',
    projectType: 'UI/UX',
    coverImage: HeaderCover,
    headerCards: OsstemDentalEShopCardInfo,
};

const introductionSections = [
    { title: 'Introduction', content: <IntroductionContent /> },
    { title: 'Target', content: <IntroductionContent /> },
    { title: 'Goal', content: <GoalsContent /> },
    { title: 'Challenges', content: <ChallengesContent /> },
    { title: 'Design Process', content: <DesignProcessContent /> },
    {
        title: 'Sitemap',
        content: <SitemapContent />,
    },
    {
        title: 'Wireframes',
        content: <WireframesContent />,
    },
    {
        title: 'Prototype',
        content: <PrototypeContent />,
    },
];

const styleGuideSections = [
    { title: 'Colour & Typography', content: <ColourAndTypographyContent /> },
    {
        title: 'Components & Elements',
        content: <ComponentsAndElementsContent />,
    },
];

const majorSections: MajorSections<PortfolioMajorSectionProps> = {
    sections: [
        {
            portfolioSections: introductionSections,
        },
        {
            sectionTitle: {
                title: 'Style Guide',
                subTitles: styleGuideSections.map((s) => s.title),
            },
            coverImage: StyleGuideCover,
            portfolioSections: styleGuideSections,
        },
    ],
};

export const Test = () => {
    return (
        <PortfolioTemplate
            header={<HeaderTemplate {...header} />}
            footer={<FooterTemplate />}
        >
            <ContentTemplate
                MajorSectionComponent={PortfolioMajorSection}
                majorSections={majorSections}
            />
        </PortfolioTemplate>
    );
};

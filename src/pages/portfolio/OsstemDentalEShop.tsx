import { Box, Typography } from '@mui/material';

import Cover2 from '../../../resources/OsstemDentalEshop/Cover2.jpg';
import {
    MajorSectionTitle,
    PortfolioLayout,
    PortfolioSection,
} from '../../components/portfolio';
import {
    ChallengesContent,
    ColourAndTypographyContent,
    ComponentsAndElementsContent,
    DesignProcessContent,
    GoalsContent,
    GridContent,
    InformationArchitectureContent,
    IntroductionContent,
    MidFidelityWireframesContent,
} from '../../components/portfolio/OsstemDentalEshop';
import { OsstemDentalEShopCardInfo } from '../../data';

const OsstemApplicationSubtitle = () => {
    return (
        <Typography variant="subtitle1" sx={{ marginTop: '20px' }}>
            <Box fontWeight="bold" display="inline">
                Osstem dental e-shop
            </Box>{' '}
            Application
        </Typography>
    );
};

export const OsstemDentalEShop = () => {
    return (
        <PortfolioLayout
            coverImg={Cover2}
            title="Osstem dental e-shop"
            subTitle="Find the best deal on dental tools at your fingertips."
            portfolioMetaData={{
                projectType: 'Commercial',
                applicationType: 'Application',
                startDate: new Date(2022, 2),
                endDate: new Date(2022, 5),
            }}
            portfolioDetailCardInfos={OsstemDentalEShopCardInfo}
        >
            <PortfolioSection title="Introduction" content={<IntroductionContent />} />
            <PortfolioSection title="Goals" content={<GoalsContent />} />
            <PortfolioSection title="Challenges" content={<ChallengesContent />} />
            <PortfolioSection title="Design Process" content={<DesignProcessContent />} />
            <PortfolioSection
                title="Information Architecture"
                content={<InformationArchitectureContent />}
            />{' '}
            <PortfolioSection
                title="Mid-Fidelity Wireframes"
                content={<MidFidelityWireframesContent />}
            />
            <MajorSectionTitle
                title="Style guide"
                subTitle={<OsstemApplicationSubtitle />}
            />
            <PortfolioSection
                title="Colour & Typography"
                content={<ColourAndTypographyContent />}
            />
            <PortfolioSection title="Grid System" content={<GridContent />} />
            <PortfolioSection
                title="Components & Elements"
                content={<ComponentsAndElementsContent />}
            />
        </PortfolioLayout>
    );
};

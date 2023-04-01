import { Box, Typography } from '@mui/material';

import Cover2 from '../../../resources/OsstemDentalEshop/Cover2.jpg';
import UISectionCover from '../../../resources/OsstemDentalEshop/UISectionCover.jpg';
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
    LearnedContent,
    MidFidelityWireframesContent,
    RetrospectiveContent,
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
            {/* Style Guide Section! */}
            <MajorSectionTitle
                title="Style Guide"
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
            {/* User Interface Section! */}
            <MajorSectionTitle
                title="User Interface"
                subTitle={<OsstemApplicationSubtitle />}
            />
            <Box component="img" alt="Cover" src={UISectionCover} />
            <PortfolioSection title="Entrance" content={null} />
            <PortfolioSection title="Sign up journey" content={null} />
            <PortfolioSection
                title="Integrating existing customer accounts with the app account"
                content={null}
            />
            <PortfolioSection
                title="Positioning sign-up progress bar at the top of the app"
                content={null}
            />
            {/* Takeaways Section! */}
            <MajorSectionTitle
                title="Takeaways"
                subTitle={<OsstemApplicationSubtitle />}
            />
            <PortfolioSection title="What I Learned" content={<LearnedContent />} />
            <PortfolioSection title="Retrospective" content={<RetrospectiveContent />} />
        </PortfolioLayout>
    );
};

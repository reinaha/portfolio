import { Divider } from '@mui/material';

import { PasswordGate, PortfolioContainer } from '@/components';
import {
    DiscoveryMajorSection,
    HeaderContent,
    IntroductionMajorSection,
    Phase1MajorSection,
    Phase2MajorSection,
    ProjectContextMajorSection,
    SummaryMajorSection,
} from '@/components/portfolio/Tradify';
import { TradifyHeaderCover } from '@/images/Tradify';

export const Tradify = () => {
    return (
        <PortfolioContainer
            headerProps={{
                title: 'Product Design',
                headerContent: <HeaderContent />,
                coverImg: TradifyHeaderCover,
                paddingTop: 30,
            }}
        >
            <IntroductionMajorSection />
            <Divider />
            <PasswordGate>
                <ProjectContextMajorSection />
                <Divider />
                <DiscoveryMajorSection />
                <Divider />
                <Phase1MajorSection />
                <Divider />
                <Phase2MajorSection />
                <Divider />
            </PasswordGate>
            <SummaryMajorSection />
            <Divider />
        </PortfolioContainer>
    );
};

import { Divider } from '@mui/material';

import { PortfolioContainer } from '@/components';
import {
    HeaderContent,
    IntroductionMajorSection,
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '@/components/portfolio/PropertiMaxDashboard';
import { PropertiMaxDashboardCover } from '@/images/PropertiMaxDashboard';

export const PropertiMaxDashboard = () => {
    return (
        <PortfolioContainer
            headerProps={{
                title: 'UX/UI Design',
                headerContent: <HeaderContent />,
                coverImg: PropertiMaxDashboardCover,
                paddingTop: 30,
            }}
        >
            <IntroductionMajorSection />
            <Divider />
            <StyleGuideMajorSection />
            <Divider />
            <UserInterfaceMajorSection />
            <Divider />
            <TakeawaysMajorSection />
        </PortfolioContainer>
    );
};

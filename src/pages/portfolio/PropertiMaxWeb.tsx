import { Divider } from '@mui/material';

import { PortfolioContainer } from '@/components';
import {
    HeaderContent,
    IntroductionMajorSection,
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '@/components/portfolio/PropertiMaxWeb';
import { PropertiMaxWebCover } from '@/images/PropertiMaxWeb';

export const PropertiMaxWeb = () => {
    return (
        <PortfolioContainer
            headerProps={{
                title: 'UX/UI Design',
                headerContent: <HeaderContent />,
                coverImg: PropertiMaxWebCover,
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
            <Divider />
        </PortfolioContainer>
    );
};

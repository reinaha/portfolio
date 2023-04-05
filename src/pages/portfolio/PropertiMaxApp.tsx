import { Divider } from '@mui/material';

import { PortfolioLayout } from '@/components';
import {
    HeaderContent,
    IntroductionMajorSection,
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '@/components/portfolio/PropertiMaxApp';
import { PropertiMaxAppCover } from '@/images/PropertiMaxApp';

export const PropertiMaxApp = () => {
    return (
        <PortfolioLayout
            headerProps={{
                title: 'UX/UI Design',
                headerContent: <HeaderContent />,
                coverImg: PropertiMaxAppCover,
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
        </PortfolioLayout>
    );
};

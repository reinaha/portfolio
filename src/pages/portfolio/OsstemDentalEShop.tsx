import { Divider } from '@mui/material';
import HeaderCover from '@resources/OsstemDentalEshop/HeaderCover.png';

import { PortfolioLayout } from '@/components';
import {
    HeaderContent,
    IntroductionMajorSection,
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '@/components/portfolio/OsstemDentalEshop';

export const OsstemDentalEShop = () => {
    return (
        <PortfolioLayout
            headerProps={{
                title: 'UX/UI Design',
                headerContent: <HeaderContent />,
                coverImg: HeaderCover,
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

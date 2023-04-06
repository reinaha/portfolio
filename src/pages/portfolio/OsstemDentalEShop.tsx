import { Divider } from '@mui/material';
import HeaderCover from '@resources/OsstemDentalEshop/HeaderCover.png';

import { PortfolioContainer } from '@/components';
import {
    HeaderContent,
    IntroductionMajorSection,
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '@/components/portfolio/OsstemDentalEshop';

export const OsstemDentalEShop = () => {
    return (
        <PortfolioContainer
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
        </PortfolioContainer>
    );
};

import { Divider } from '@mui/material';
import HeaderCover from '@resources/OsstemDentalEshop/HeaderCover.png';

import { PortfolioLayout } from '../../components/portfolio';
import {
    StyleGuideMajorSection,
    TakeawaysMajorSection,
    UserInterfaceMajorSection,
} from '../../components/portfolio/OsstemDentalEshop';
import { IntroductionMajorSection } from '../../components/portfolio/OsstemDentalEshop/IntroductionMajorSection';
import { OsstemDentalEShopCardInfo } from '../../data';

export const OsstemDentalEShop = () => {
    return (
        <PortfolioLayout
            headerProps={{
                title: 'Osstem dental e-shop',
                subTitle: 'Find the best deal on dental tools at your fingertips.',
                portfolioMetaData: {
                    projectType: 'Commercial',
                    applicationType: 'Application',
                    startDate: new Date(2022, 2),
                    endDate: new Date(2022, 5),
                },
                portfolioDetailCardInfos: OsstemDentalEShopCardInfo,
                coverImg: HeaderCover,
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

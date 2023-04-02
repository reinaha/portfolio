import Cover2 from '@resources/OsstemDentalEshop/Cover2.jpg';

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
            coverImg={Cover2}
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
            }}
        >
            <IntroductionMajorSection />
            <StyleGuideMajorSection />
            <UserInterfaceMajorSection />
            <TakeawaysMajorSection />
        </PortfolioLayout>
    );
};

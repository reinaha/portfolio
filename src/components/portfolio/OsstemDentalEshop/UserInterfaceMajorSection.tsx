import UISectionCover from '@resources/OsstemDentalEshop/UISectionCover.jpg';
import UISectionCover2 from '@resources/OsstemDentalEshop/UISectionCover2.png';

import { PortfolioFullWidthImage } from '../portfolioBricks/PortfolioFullWidthImage';
import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';
import {
    CheckoutContent,
    EntranceContent,
    HomeContent,
    MessageContent,
} from './UserInterface';
import { ProductContent } from './UserInterface/ProductContent';

export const UserInterfaceMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'User Interface',
            }}
            portfolioSections={[
                { title: 'Entrance', content: <EntranceContent /> },
                { title: 'Home', content: <HomeContent /> },
                { title: 'Product', content: <ProductContent /> },
                { title: 'Checkout', content: <CheckoutContent /> },
                { title: 'Message', content: <MessageContent /> },
            ]}
            coverImage={UISectionCover2}
            numbered
            numberOptions={{ numberColor: '#FB4200', backgroundColor: '#FB42000d' }}
        />
    );
};

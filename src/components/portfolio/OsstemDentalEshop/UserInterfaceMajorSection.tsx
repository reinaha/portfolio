import UISectionCover from '@resources/OsstemDentalEshop/UISectionCover.jpg';
import UISectionCover2 from '@resources/OsstemDentalEshop/UISectionCover2.png';

import { PortfolioFullWidthImage } from '../PortfolioFullWidthImage';
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
                subTitle: <OsstemApplicationSubtitle />,
            }}
            portfolioSections={[
                { title: 'Entrance', content: <EntranceContent /> },
                { title: 'Home', content: <HomeContent /> },
                { title: 'Product', content: <ProductContent /> },
                { title: 'Checkout', content: <CheckoutContent /> },
                { title: 'Message', content: <MessageContent /> },
            ]}
            midComponents={
                <PortfolioFullWidthImage
                    image={UISectionCover2}
                    paddingBottom={2}
                    sx={{ marginTop: '-0.1em !important', paddingBottom: 5 }}
                />
            }
            numbered
            numberOptions={{ numberColor: '#FB4200', backgroundColor: '#FB42000d' }}
        />
    );
};

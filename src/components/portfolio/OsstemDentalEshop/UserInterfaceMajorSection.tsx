import { Box } from '@mui/material';
import UISectionCover from '@resources/OsstemDentalEshop/UISectionCover.jpg';

import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';
import {
    CheckoutContent,
    EntranceContent,
    HomeContent,
    MessageContent,
} from './UserIntrerface';
import { ProductContent } from './UserIntrerface/ProductContent';

export const UserInterfaceMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'UserInterface',
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
                <Box component="img" alt="Cover" src={UISectionCover} paddingBottom={2} />
            }
            numbered
            numberOptions={{ numberColor: '#FB4200', backgroundColor: '#FB42000d' }}
        />
    );
};

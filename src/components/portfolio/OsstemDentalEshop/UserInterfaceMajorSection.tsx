import { Box } from '@mui/material';
import UISectionCover from '@resources/OsstemDentalEshop/UISectionCover.jpg';

import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';
import { EntranceContent, HomeContent } from './UserIntrerface';

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
                { title: 'Product', content: null },
                { title: 'Checkout', content: null },
                { title: 'Message', content: null },
            ]}
            midComponents={
                <Box component="img" alt="Cover" src={UISectionCover} paddingBottom={2} />
            }
            numbered
            numberOptions={{ numberColor: '#FB4200', backgroundColor: '#FB42000d' }}
        />
    );
};

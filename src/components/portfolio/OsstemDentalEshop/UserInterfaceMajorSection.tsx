import { Box } from '@mui/material';
import UISectionCover from '@resources/OsstemDentalEshop/UISectionCover.jpg';

import { PortfolioMajorSection } from '../PortfolioMajorSection';
import { OsstemApplicationSubtitle } from './OsstemApplicationSubtitle';

export const UserInterfaceMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'UserInterface',
                subTitle: <OsstemApplicationSubtitle />,
            }}
            portfolioSections={[
                { title: 'Entrance', content: null },
                { title: 'Home', content: null },
                { title: 'Product', content: null },
                { title: 'Checkout', content: null },
                { title: 'Message', content: null },
            ]}
            midComponents={<Box component="img" alt="Cover" src={UISectionCover} />}
        />
    );
};

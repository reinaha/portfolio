import CheckoutCover from '@resources/OsstemDentalEshop/UserInterface/CheckoutCover.svg';
import EntranceCover from '@resources/OsstemDentalEshop/UserInterface/EntranceCover.svg';
import HomeCover from '@resources/OsstemDentalEshop/UserInterface/HomeCover.svg';
import MessageCover from '@resources/OsstemDentalEshop/UserInterface/MessageCover.svg';
import ProductCover from '@resources/OsstemDentalEshop/UserInterface/ProductCover.svg';

import { PortfolioMajorSection } from '../PortfolioMajorSection';
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
                {
                    title: 'Entrance',
                    content: <EntranceContent />,
                    coverImg: EntranceCover,
                },
                { title: 'Home', content: <HomeContent />, coverImg: HomeCover },
                { title: 'Product', content: <ProductContent />, coverImg: ProductCover },
                {
                    title: 'Checkout',
                    content: <CheckoutContent />,
                    coverImg: CheckoutCover,
                },
                { title: 'Message', content: <MessageContent />, coverImg: MessageCover },
            ]}
        />
    );
};

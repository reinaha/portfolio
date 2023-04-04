import { PortfolioMajorSection } from '@/components';
import {
    CheckoutCover,
    EntranceCover,
    HomeCover,
    MessageCover,
    ProductCover,
} from '@/images';

import {
    CheckoutContent,
    EntranceContent,
    HomeContent,
    MessageContent,
    ProductContent,
} from './UserInterface';

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

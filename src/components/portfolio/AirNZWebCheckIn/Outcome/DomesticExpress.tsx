import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';

const HomeJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Domestic Express Check-in was designed for one of Air New Zealand&apos;s
                most valuable customer segments—loyal travellers who frequently fly the
                same domestic route for business. These customers typically travel alone
                on a single flight, keep their Frequent Flyer details up to date, prefer
                the same seat, rarely change their baggage, and are already familiar with
                the check-in process.
            </IconListItem>
            <IconListItem>
                Despite this, the legacy experience required them to complete seven or
                more mandatory steps every time they checked in, repeatedly asking for
                information and decisions that rarely changed. This unnecessary friction
                became a growing source of dissatisfaction among frequent travellers.
            </IconListItem>
            <IconListItem>
                To address this, the Express Check-in journey was completely restructured
                around the principle of showing only what is essential. The minimum
                journey was reduced from seven mandatory steps to just four by
                transforming optional services—such as seat selection, additional baggage,
                upgrades, and Frequent Flyer details—into modular, on-demand flows.
                Travellers can still access these services whenever they need them, but
                they are no longer forced through them by default.
            </IconListItem>
            <IconListItem>
                As a result, eligible customers can complete check-in significantly
                faster, while the experience remains flexible enough to support a wide
                range of travel needs without increasing complexity.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

export const DomesticExpressContentData = [
    {
        title: 'Domestic Express Check-in journey',
        content: <HomeJourneyContent />,
    },
];

export const DomesticExpressContent = () => (
    <PortfolioSubSection subsections={DomesticExpressContentData} />
);

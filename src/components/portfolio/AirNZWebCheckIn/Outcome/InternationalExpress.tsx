import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import { AirNZWebCheckInOutcomeInternationalExpress } from '@/images/AirNZWebCheckIn';

const InternationalJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                International Express Check-in was designed for another high-value
                customer segment—travellers who frequently fly across the Tasman for
                business or regularly visit family overseas. Although these customers
                travel internationally on a regular basis, the legacy experience still
                required them to complete eight or more mandatory steps for every
                check-in.
            </IconListItem>
            <IconListItem>
                The key difference from Domestic Express is that international journeys
                require one additional mandatory step: Personal Details. This step
                captures passport, visa, and travel document requirements that are not
                needed for domestic travel. Even with this added requirement, the
                redesigned journey reduces the minimum flow from 8+ steps to just 5, while
                keeping optional services in modular, on-demand flows.
            </IconListItem>
            <PortfolioImage imageSrc={AirNZWebCheckInOutcomeInternationalExpress} />
        </PortfolioSectionContainer>
    );
};

export const InternationalExpressContentData = [
    {
        title: 'International Express Check-in journey',
        content: <InternationalJourneyContent />,
    },
];

export const InternationalExpressContent = () => (
    <PortfolioSubSection subsections={InternationalExpressContentData} />
);

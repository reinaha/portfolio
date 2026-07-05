import { PortfolioMajorSection } from '@/components';
import {
    AirNZWebCheckInConditionalJourneyCover,
    AirNZWebCheckInDomesticExpressCover,
    AirNZWebCheckInInternationalExpressCover,
    AirNZWebCheckInPassengerJourneyVariationsCover,
} from '@/images/AirNZWebCheckIn';

import {
    ConditionalJourneyContent,
    DomesticExpressContent,
    InternationalExpressContent,
    PassengerJourneyVariationsContent,
} from './Outcome';

const outcomeSections = [
    {
        title: 'Domestic Express',
        content: <DomesticExpressContent />,
        coverImg: AirNZWebCheckInDomesticExpressCover,
        coverImgFullWidth: true,
    },
    {
        title: 'International Express',
        content: <InternationalExpressContent />,
        coverImg: AirNZWebCheckInInternationalExpressCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Passenger & Journey Variations',
        content: <PassengerJourneyVariationsContent />,
        coverImg: AirNZWebCheckInPassengerJourneyVariationsCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Conditional Journey',
        content: <ConditionalJourneyContent />,
        coverImg: AirNZWebCheckInConditionalJourneyCover,
        coverImgFullWidth: true,
    },
];

export const OutcomeMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Outcome',
                subTitles: outcomeSections.map((s) => s.title),
            }}
            portfolioSections={outcomeSections}
        />
    );
};

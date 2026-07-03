import { PortfolioMajorSection } from '@/components';
import { AirNZWebCheckInOutcomeCover } from '@/images/AirNZWebCheckIn';

import { DomesticExpressContent } from './Outcome';

const outcomeSections = [
    {
        title: 'Domestic Express',
        content: <DomesticExpressContent />,
        coverImage: AirNZWebCheckInOutcomeCover,
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

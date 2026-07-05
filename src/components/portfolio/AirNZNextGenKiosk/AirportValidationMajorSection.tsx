import { PortfolioMajorSection } from '@/components';

import {
    AirportValidationOverviewContent,
    InternationalKioskObservationContent,
    ObservationDrivenIterationContent,
    ObservationToInsightsContent,
} from './AirportValidation';

const airportValidationSections = [
    { title: 'Overview', content: <AirportValidationOverviewContent /> },
    {
        title: 'Validation 01',
        content: <InternationalKioskObservationContent />,
    },
    {
        title: 'Validation 02',
        content: <ObservationDrivenIterationContent />,
    },
    { title: 'Validation 03', content: <ObservationToInsightsContent /> },
];

export const AirportValidationMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Airport Validation',
                subTitles: airportValidationSections.map((s) => s.title),
            }}
            portfolioSections={airportValidationSections}
        />
    );
};

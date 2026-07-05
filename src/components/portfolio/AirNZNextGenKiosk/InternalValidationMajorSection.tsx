import { PortfolioMajorSection } from '@/components';

import {
    EmployeePrototypeTestingContent,
    GroundStaffWorkflowContent,
    InternalValidationOverviewContent,
} from './InternalValidation';

const internalValidationSections = [
    { title: 'Overview', content: <InternalValidationOverviewContent /> },
    { title: 'Validation 01', content: <GroundStaffWorkflowContent /> },
    { title: 'Validation 02', content: <EmployeePrototypeTestingContent /> },
];

export const InternalValidationMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Internal Validation',
                subTitles: internalValidationSections.map((s) => s.title),
            }}
            portfolioSections={internalValidationSections}
        />
    );
};

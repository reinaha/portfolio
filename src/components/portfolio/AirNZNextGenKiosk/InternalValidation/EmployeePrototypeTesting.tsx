import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskInternalValidationTwo } from '@/images/AirNZNextGenKiosk';

export const EmployeePrototypeTestingContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Employee Prototype Testing</Typography>
            <Typography>
                Before launching airport trials, we held regular internal testing sessions
                where Air New Zealand employees participated as proxy passengers. A trial
                kiosk was permanently installed in the office, allowing teams across the
                business to experience the prototype and provide feedback throughout
                development.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskInternalValidationTwo} />
        </PortfolioSectionContainer>
    );
};

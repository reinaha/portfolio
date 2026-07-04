import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskInternalValidationOne } from '@/images/AirNZNextGenKiosk';

export const GroundStaffWorkflowContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Ground Staff Workflow Validation
            </Typography>
            <Typography>
                Before testing with passengers, we validated the kiosk experience with Air
                New Zealand ground staff to understand how the product would fit into real
                airport operations. The sessions explored not only the passenger journey
                but also staff support tasks, operational workflows, and future kiosk
                management. Key findings helped us refine the flow around self-service
                support opportunities, staff ownership, maintenance responsibilities, and
                scalable kiosk monitoring.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskInternalValidationOne} />
        </PortfolioSectionContainer>
    );
};

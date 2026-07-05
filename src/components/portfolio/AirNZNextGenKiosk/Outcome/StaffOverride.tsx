import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomeStaffOverrideScreens } from '@/images/AirNZNextGenKiosk';

export const StaffOverrideContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Staff Override</Typography>
            <Typography>
                Some baggage scenarios required intervention from Air New Zealand staff,
                such as baggage overrides, policy exceptions, or operational approvals.
                Rather than sending passengers to a separate system, the kiosk allowed
                staff to securely transition into a dedicated override mode and continue
                the journey without restarting the check-in process.
            </Typography>
            <Typography>
                When assistance was required, ground staff authenticated themselves by
                scanning their staff ID before accessing the override interface. Once
                verified, they could review and modify baggage permissions, apply approved
                exception reasons, and return passengers to the standard check-in flow.
                The experience was designed to minimise disruption while maintaining
                operational control, security, and a seamless handoff between passenger
                self-service and staff-assisted interactions.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomeStaffOverrideScreens} />
        </PortfolioSectionContainer>
    );
};

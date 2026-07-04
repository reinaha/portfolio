import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskOutcomePassportScanningScreens } from '@/images/AirNZNextGenKiosk';

export const PassportScanningContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Passport Scanning</Typography>
            <Typography>
                The passport scanning experience was designed to support both identity
                verification and flexible passenger selection across different check-in
                scenarios. Single passengers could scan an alternative passport when
                required, while group bookings allowed remaining passengers to continue
                scanning individually without forcing every traveller through the same
                flow.
            </Typography>
            <Typography>
                One of the biggest design challenges emerged during user testing.
                Passengers who arrived from the Entry screen already understood how to
                scan their passport, but those entering via boarding pass scanning or
                manual booking reference often reached this screen without knowing what to
                do next.
            </Typography>
            <Typography>
                To address this, an onboarding guidance flow was introduced before
                scanning began. A short instructional video, supported by contextual
                guidance, explained how to position the passport correctly and what would
                happen next, significantly improving user confidence before interacting
                with the scanner.
            </Typography>
            <Typography>
                The experience also supported a wide range of interaction states,
                including scanning progress, loading, successful recognition, validation
                errors, and retry scenarios. For group bookings, reminder dialogs helped
                passengers continue the journey even when only part of the group completed
                passport scanning.
            </Typography>
            <PortfolioImage imageSrc={AirNZNextGenKioskOutcomePassportScanningScreens} />
        </PortfolioSectionContainer>
    );
};

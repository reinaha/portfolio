import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const DestinationRequirementsContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Destination Requirements Screen
            </Typography>
            <Typography>
                This experience appeared only when additional destination-specific
                requirements were needed before passengers could complete check-in. Rather
                than applying the same journey to every traveller, the kiosk dynamically
                inserted the appropriate flow based on the passenger&apos;s destination
                and regulatory requirements.
            </Typography>
            <Typography>
                For destinations requiring visa confirmation, passengers were asked to
                confirm that they held a valid visa before proceeding. Other destinations,
                such as Indonesia, required travellers to complete an online arrival card,
                so the kiosk provided clear guidance and direct access to the official
                application before continuing the journey.
            </Typography>
            <Typography>
                The experience also included destination-specific failure states. When
                mandatory requirements—such as ESTA approval or visa eligibility—could not
                be verified, passengers were clearly informed why check-in could not
                continue and were guided toward the appropriate next step, whether that
                meant completing the missing requirement or seeking assistance from Air
                New Zealand staff.
            </Typography>
        </PortfolioSectionContainer>
    );
};

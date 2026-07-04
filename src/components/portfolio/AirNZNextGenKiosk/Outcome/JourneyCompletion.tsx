import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const JourneyCompletionContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Journey Completion</Typography>
            <Typography>
                The final screen was designed to transition passengers smoothly from
                digital check-in to their next physical actions in the airport. Rather
                than simply confirming completion, it provided clear guidance on what to
                do next, including attaching bag tags, proceeding to Bag Drop, and heading
                to the departure gate.
            </Typography>
            <Typography>
                Passengers could also choose whether to print a boarding pass. Since many
                travellers already had a digital boarding pass, printing remained optional
                instead of being performed automatically. For checked baggage, bag tags
                were printed automatically, with a loading state informing passengers that
                printing was in progress and advising them not to remove the tag
                prematurely.
            </Typography>
            <Typography>
                The experience also accounted for operational edge cases. If the kiosk ran
                out of paper or printing was unavailable, dedicated support screens
                clearly explained the issue and informed passengers that an Air New
                Zealand representative would assist them, avoiding uncertainty at the
                final stage of the journey.
            </Typography>
        </PortfolioSectionContainer>
    );
};

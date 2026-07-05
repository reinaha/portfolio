import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const SeatReviewContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Seat Review</Typography>
            <Typography>
                The Seat Review experience was designed around confirmation rather than
                modification. By the time passengers reached the kiosk, most already had
                an assigned seat and rarely changed it, so the primary goal was to help
                them quickly verify their seat before continuing.
            </Typography>
            <Typography>
                The interface adapted to different journey types, supporting single
                passengers, multi-passenger bookings, and multi-flight itineraries while
                presenting seat assignments in a format appropriate to each scenario. For
                passengers who wished to make changes, seat editing remained available as
                a secondary action rather than interrupting the primary check-in flow.
            </Typography>
            <Typography>
                This approach reduced unnecessary interactions for the majority of
                travellers while still providing flexibility for passengers who needed to
                select or change their seats.
            </Typography>
        </PortfolioSectionContainer>
    );
};

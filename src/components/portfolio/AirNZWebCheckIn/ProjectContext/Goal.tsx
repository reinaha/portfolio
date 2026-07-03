import { Typography } from '@mui/material';

import { IconListItem, PortfolioSectionContainer } from '@/components';

export const GoalContent = () => {
    const iconColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Redesign the core check-in architecture into a flexible modular flow that
                could adapt dynamically to different passenger types, journey types, and
                future business needs.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Expand Check-in Coverage
                </Typography>
                <Typography>
                    Extend online check-in to support complex passenger journeys,
                    including multi-city itineraries, multi-passenger bookings, and
                    varying eligibility rules.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Enable Express Check-in
                </Typography>
                <Typography>
                    Allow eligible passengers to complete check-in faster by skipping
                    unnecessary steps.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Increase Online Check-in Success
                </Typography>
                <Typography>
                    Drive more successful self-service check-ins to reduce customer
                    support demand and airport operational costs.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={4} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Build for the Future
                </Typography>
                <Typography>
                    Create a scalable modular architecture that can easily support new
                    services, business requirements, and emerging technologies.
                </Typography>
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

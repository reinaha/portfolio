import { Typography } from '@mui/material';

import { IconListItem, PortfolioSectionContainer } from '@/components';

export const GoalContent = () => {
    const iconColor = { primary: '#08F', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Establish a scalable offline experience that supports technicians across
                the three most critical connectivity scenarios while creating a consistent
                foundation for future product development.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Define connectivity-aware behaviours
                </Typography>
                <Typography>
                    Establish clear behaviours for online, low connectivity, and offline
                    states, including how the experience should adapt as users transition
                    between them.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Build predictable offline journeys
                </Typography>
                <Typography>
                    Define when users can continue, when actions should be restricted, and
                    how cached data, server responses, and connectivity limitations should
                    be communicated throughout the journey.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Deliver a consistent experience across critical connectivity scenarios
                </Typography>
                <Typography>
                    Create a consistent experience across Cold Start, Warm Resume, and
                    Connection Loss During Use, enabling technicians to continue working
                    confidently as connectivity changes.
                </Typography>
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

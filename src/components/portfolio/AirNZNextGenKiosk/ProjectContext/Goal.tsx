import { Typography } from '@mui/material';

import { IconListItem, PortfolioSectionContainer } from '@/components';

export const GoalContent = () => {
    const iconColor = { primary: '#0088FF', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Replace the legacy vendor platform with a scalable in-house kiosk platform
                that delivers faster passenger journeys, improves airport operations, and
                enables continuous innovation.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Deliver Faster Check-in Journeys
                </Typography>
                <Typography>
                    Create adaptive check-in flows that reduce unnecessary steps, shorten
                    kiosk interaction time, and improve passenger throughput.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Redefine the Airport Journey
                </Typography>
                <Typography>
                    Design beyond check-in by guiding passengers through their next
                    airport actions, from Bag Drop to Boarding.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Improve Airport Operations
                </Typography>
                <Typography>
                    Reduce staff intervention through clearer self-service experiences
                    that improve processing efficiency and lower operational costs.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={4} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Build an In-house Future-ready Platform
                </Typography>
                <Typography>
                    Create a scalable platform that enables faster iteration, reduces
                    vendor dependency, and supports future services.
                </Typography>
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

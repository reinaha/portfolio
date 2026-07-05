import { Typography } from '@mui/material';

import { IconListItem, PortfolioSectionContainer } from '@/components';

export const ChallengesContent = () => {
    const iconColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Designing for offline required more than applying an offline banner or
                disabling unavailable actions. The main challenge was defining how the
                product should behave across changing connectivity, uncertain data states,
                and long field workflows.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Connectivity changes happen within journeys, not screens
                </Typography>
                <Typography>
                    Users don&apos;t experience offline as a single screen state. They may
                    start a workflow online, move into low connectivity, lose connection
                    entirely, and reconnect later. I needed to design the experience
                    around these transitions, defining where users could continue, where
                    they needed guidance, and where the system should prevent risky
                    actions.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Offline behaviour depends on data availability
                </Typography>
                <Typography>
                    A screen could behave very differently depending on whether cached
                    data existed, whether fresh data could be loaded, whether sync
                    succeeded, or whether there was simply no content available. This
                    meant the design had to account for both user-facing experience and
                    behind-the-scenes data handling.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Low connectivity creates ambiguous outcomes
                </Typography>
                <Typography>
                    Offline is easier to communicate because the system can clearly detect
                    there is no connection. Low connectivity is more complex: a request
                    may succeed, fail, or time out. Blocking too early would limit users
                    unnecessarily, but allowing everything could create misleading or
                    risky journeys.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={4} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Stakeholders needed a shared view of the system
                </Typography>
                <Typography>
                    Because many of these problems were not visible in static UI screens,
                    I created journey maps, capability maps, and state diagrams to help
                    product, design, and engineering teams align on how offline behaviour
                    should work across the app.
                </Typography>
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

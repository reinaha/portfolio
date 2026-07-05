import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { TradifyConnectivityScenarioMatrix } from '@/images';

export const DiscoveryOneContent = () => {
    const outcomeColor = { primary: '#0A69FA' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Defining Offline Scenarios
                </Typography>
                <Typography>
                    Offline isn&apos;t a single state. The experience changes depending on
                    both the user&apos;s connectivity and where they are in the app. I
                    defined the combinations of connectivity state (low connectivity,
                    super low connectivity, offline) and app state (cold start, warm
                    resume, in-app), as each combination results in different system
                    behaviours. Establishing these scenarios created a shared foundation
                    for discovery, testing, and design decisions.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Defined connectivity and app state combinations
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Established a shared framework for testing
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Created a clear scope for offline experience design
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={TradifyConnectivityScenarioMatrix} />
        </PortfolioSectionContainer>
    );
};

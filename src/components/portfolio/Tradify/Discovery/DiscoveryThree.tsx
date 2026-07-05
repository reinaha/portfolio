import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { TradifyOfflineCapabilityAnalysis } from '@/images';

export const DiscoveryThreeContent = () => {
    const outcomeColor = { primary: '#0A69FA' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Defining Action-Based Offline Principles
                </Typography>
                <Typography>
                    The audit revealed that designing offline behaviour screen by screen
                    wasn&apos;t scalable. Even within a single screen, different user
                    actions had different offline capabilities—some actions were fully
                    supported, others partially available, while some required a live
                    connection.
                </Typography>
                <Typography>
                    Instead, I reorganised the audit findings around user actions rather
                    than screens. For each action, I defined the expected offline
                    capability, identified where support was partial or unavailable, and
                    analysed whether the existing feedback aligned with user expectations.
                </Typography>
                <Typography>
                    This shifted the design approach from screen-based thinking to an
                    action-based framework that could be applied consistently across the
                    product.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Action-based offline capability framework
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Offline support matrix for common user actions
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Critical risk areas where user expectations and system behaviour
                    diverged
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Foundation for reusable offline interaction patterns
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={TradifyOfflineCapabilityAnalysis} />
        </PortfolioSectionContainer>
    );
};

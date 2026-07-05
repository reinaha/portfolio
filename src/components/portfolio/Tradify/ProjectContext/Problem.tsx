import { Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { TradifyExistingOfflineCapabilityAudit } from '@/images';

export const ProblemContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Tradify is frequently used in environments with unstable or limited
                connectivity, yet the offline experience had never been intentionally
                designed. Offline support had evolved incrementally over time, resulting
                in inconsistent behaviours, misleading interactions, and limited
                visibility into system status. Instead of providing a predictable offline
                experience, the product relied primarily on cached data and isolated
                offline behaviours, leaving users without clear guidance on what they
                could or couldn&apos;t do when connectivity changed.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Limited visibility into connectivity status
                </Typography>
                <Typography>
                    Offline feedback was inconsistent across the product. Connectivity
                    indicators such as the offline banner only appeared on selected
                    screens, while many server failures surfaced as generic error messages
                    that didn&apos;t explain the real problem. Users often didn&apos;t
                    realise they were offline or understand why certain actions failed.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Misleading offline journeys
                </Typography>
                <Typography>
                    Offline behaviour wasn&apos;t designed as a complete user journey.
                    Cached content remained accessible without clearly communicating its
                    limitations, allowing users to continue workflows that eventually
                    became blocked by server-dependent actions. Instead of helping users
                    adapt to offline conditions, the experience often failed at the end of
                    the journey.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    No strategy for changing connectivity
                </Typography>
                <Typography>
                    Field technicians frequently move between online, low-connectivity,
                    and offline environments throughout the day. However, the product only
                    considered a basic offline state and lacked UX patterns for
                    fluctuating network conditions, resulting in unpredictable behaviour
                    and inconsistent feedback as connectivity changed.
                </Typography>
            </IconListItem>
            <PortfolioImage imageSrc={TradifyExistingOfflineCapabilityAudit} />
        </PortfolioSectionContainer>
    );
};

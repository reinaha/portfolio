import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { TradifyOfflineCapabilityAuditDiagram } from '@/images';

export const DiscoveryTwoContent = () => {
    const outcomeColor = { primary: '#0A69FA' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Auditing Existing Offline Behaviour
                </Typography>
                <Typography>
                    I needed to understand how the current app was actually handling
                    offline states in detail. Rather than only checking whether each
                    feature worked or not, I audited every screen state, transition,
                    loading behaviour, error response, and feedback pattern. The focus was
                    to identify the exact boundaries of offline capability. For example,
                    some screens could still be reviewed offline, but editing or saving
                    actions were blocked. I documented where those boundaries appeared,
                    how the system responded, and whether users received clear feedback at
                    each point.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Screen-by-screen offline behaviour audit
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Capability boundaries identified across view, edit, save, and access
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Existing feedback patterns and inconsistencies documented
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={TradifyOfflineCapabilityAuditDiagram} />
        </PortfolioSectionContainer>
    );
};

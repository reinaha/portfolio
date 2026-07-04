import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskDiscovery01 } from '@/images/AirNZNextGenKiosk';

export const DiscoveryOneContent = () => {
    const outcomeColor = { primary: '#0A69FA' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Understanding the End-to-End Airport Journey
                </Typography>
                <Typography>
                    Before redesigning the kiosk, we first needed to understand the
                    broader airport experience rather than the check-in flow alone.
                    Through end-to-end journey mapping, we explored how passengers move
                    through the airport, what they need at each stage, where friction
                    occurs, and how the overall experience could be improved. This
                    established a shared understanding of the current experience and
                    informed future design opportunities.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Mapped the complete airport journey from pre-check-in to bag drop
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Identified passenger goals, behaviours, and pain points at each stage
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Captured future opportunities across the end-to-end experience
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Defined high-level design principles to guide the project
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={AirNZNextGenKioskDiscovery01} />
        </PortfolioSectionContainer>
    );
};

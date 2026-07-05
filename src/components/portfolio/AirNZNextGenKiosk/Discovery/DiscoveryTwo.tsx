import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskDiscovery02 } from '@/images/AirNZNextGenKiosk';

export const DiscoveryTwoContent = () => {
    const outcomeColor = { primary: '#008557' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Understanding Operational Pain Points
                </Typography>
                <Typography>
                    Alongside the journey mapping, we ran workshops with airport
                    stakeholders to uncover operational challenges that weren&apos;t
                    visible from the passenger journey alone. We investigated how physical
                    hardware, airport processes, accessibility, software limitations, and
                    staff workflows affected the overall self-service experience, ensuring
                    the new kiosk addressed both customer and operational needs.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Identified operational pain points from airport staff
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Evaluated physical hardware and kiosk environment constraints
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Discovered accessibility and language barriers
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Highlighted opportunities to reduce manual intervention and improve
                    self-service
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={AirNZNextGenKioskDiscovery02} />
        </PortfolioSectionContainer>
    );
};

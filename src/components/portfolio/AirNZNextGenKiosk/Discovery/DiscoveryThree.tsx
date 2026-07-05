import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskDiscovery03 } from '@/images/AirNZNextGenKiosk';

export const DiscoveryThreeContent = () => {
    const outcomeColor = { primary: '#3A31B2' };

    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Defining the Product Scope
                </Typography>
                <Typography>
                    Insights from discovery were translated into a comprehensive product
                    scope. Rather than thinking in screens, we broke the experience into
                    functional capabilities to ensure every part of the airport check-in
                    journey was considered before interface design began.
                </Typography>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{ fontWeight: '500' }}>Key outcomes</Typography>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Defined core product capabilities
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Identified feature dependencies
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Prioritised MVP and future enhancements
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={outcomeColor}>
                    Established a shared scope across product, design, and engineering
                </IconListItem>
            </Stack>
            <PortfolioImage imageSrc={AirNZNextGenKioskDiscovery03} />
        </PortfolioSectionContainer>
    );
};

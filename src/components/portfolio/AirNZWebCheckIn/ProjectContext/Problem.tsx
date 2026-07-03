import { Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZWebCheckInProjectContextProblem } from '@/images/AirNZWebCheckIn';

export const ProblemContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Although the legacy experience functioned for simple journeys, its linear
                architecture created several business and UX challenges.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Limited scalability
                </Typography>
                <Typography>
                    The system struggled to support the increasing number of passenger
                    types and journey combinations, making it difficult to expand online
                    check-in coverage.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    No support for Express Check-in
                </Typography>
                <Typography>
                    Frequent travellers and Air New Zealand&apos;s high-value loyalty
                    members were required to complete the same lengthy flow as everyone
                    else, regardless of whether many steps were actually relevant to them.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Increased operational cost
                </Typography>
                <Typography>
                    The inability to complete check-in online resulted in more customer
                    frustration, increased call centre enquiries, and additional airport
                    staff intervention, leading to higher operational costs.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={4} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Not future-ready
                </Typography>
                <Typography>
                    The architecture wasn&apos;t flexible enough to support future
                    services and technologies, such as post check-in ancillary purchases,
                    Digital Wallet integration, or new biometric check-in experiences.
                </Typography>
            </IconListItem>
            <PortfolioImage imageSrc={AirNZWebCheckInProjectContextProblem} />
        </PortfolioSectionContainer>
    );
};

import { Typography } from '@mui/material';

import { IconListItem, PortfolioSectionContainer } from '@/components';

export const ChallengesContent = () => {
    const iconColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                Building a new in-house kiosk platform meant more than replacing a legacy
                system. It required redefining the entire airport self-service
                experience—from the physical hardware to the digital journey—through
                extensive research into passenger behaviour, airport operations, and
                business needs. This established the foundation for a kiosk experience
                tailored to Air New Zealand.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Redefining the airport journey
                </Typography>
                <Typography>
                    The existing kiosk journey couldn&apos;t simply be replicated. We
                    first needed to understand how passengers move through the airport,
                    when they interact with the kiosk, and what they need before, during,
                    and after check-in.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Designing across physical and digital experiences
                </Typography>
                <Typography>
                    Unlike web check-in, the kiosk experience extends beyond the screen.
                    Printers, passport scanners, bag tags, and the physical kiosk all
                    directly influenced the digital experience, requiring both to be
                    designed together.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Balancing passenger, operational and business needs
                </Typography>
                <Typography>
                    The project wasn&apos;t only about improving usability. We needed to
                    understand passenger behaviour, operational pain points, and business
                    opportunities to create a better airport experience.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={4} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Designing for universal accessibility
                </Typography>
                <Typography>
                    Unlike web experiences, the kiosk is a shared physical touchpoint used
                    by passengers of all ages, abilities, and backgrounds. The experience
                    needed to be accessible and intuitive while accommodating the physical
                    constraints of a self-service environment.
                </Typography>
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

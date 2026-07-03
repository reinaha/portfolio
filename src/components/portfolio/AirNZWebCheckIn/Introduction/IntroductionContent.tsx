import { Typography } from '@mui/material';

import { PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZWebCheckInIntroduction } from '@/images';

export const IntroductionContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Air New Zealand had relied on the same legacy web check-in experience for
                many years. Although redesigning the platform had been discussed for
                years, the project was repeatedly postponed due to its complexity.
            </Typography>
            <Typography>
                The system needed to support a wide range of passenger types, including
                single travellers, group bookings, children, infants, accessibility
                passengers, and frequent flyers, alongside many different journey types
                such as domestic, international, multi-city, multi-flight, and one-day
                return itineraries. Each combination introduced different business rules,
                operational requirements, and regulatory constraints, making the redesign
                significantly more challenging than a typical UI refresh.
            </Typography>
            <Typography>
                As the business continued to evolve, replacing the legacy experience
                became unavoidable, and the Next Generation Web Check-in programme was
                finally initiated.
            </Typography>
            <Typography>
                I joined the project as the lead Product Designer and was responsible for
                the end-to-end design process, from discovery and journey mapping through
                UX architecture, user testing, visual design, developer handoff, and
                launch.
            </Typography>
            <PortfolioImage imageSrc={AirNZWebCheckInIntroduction} />
        </PortfolioSectionContainer>
    );
};

import { Stack, Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZNextGenKioskSolutionAdaptiveJourneyStepOne,
    AirNZNextGenKioskSolutionAdaptiveJourneyStepTwo,
} from '@/images/AirNZNextGenKiosk';

export const AdaptiveJourneyContent = () => {
    const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const focusColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>Adaptive Journey</Typography>
            <Typography sx={{ marginBottom: '16px' }}>
                Rather than creating separate check-in flows for every passenger scenario,
                the experience was designed as a single adaptive journey. Screens,
                content, and actions dynamically changed based on passenger type,
                itinerary, eligibility, and airline requirements, allowing the experience
                to remain simple while supporting increasingly complex business rules.
            </Typography>
            <PortfolioChipSection
                title="Step 1"
                subtitle="Establishing the Domestic Journey"
                color={stepOneColor}
            >
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    The Domestic MVP wasn&apos;t simply the first journey we released—it
                    established the foundation for every journey that followed. The focus
                    was to define the essential check-in steps, determine the right
                    sequence for each interaction, and build a flexible architecture
                    capable of supporting increasingly complex passenger types, flight
                    scenarios, destination requirements, and airline rules. This adaptive
                    foundation allowed the experience to scale without introducing
                    separate flows for different scenarios.
                </IconListItem>
                <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: '500' }}>Design Focus</Typography>
                    <IconListItem iconType="number" number={1} iconColor={focusColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Essential Journey Steps
                        </Typography>
                        <Typography>
                            Define the minimum steps required for check-in.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={2} iconColor={focusColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Information Architecture
                        </Typography>
                        <Typography>
                            Organise information into a clear, logical structure.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={3} iconColor={focusColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Screen Sequence
                        </Typography>
                        <Typography>
                            Create an intuitive order for each interaction.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={4} iconColor={focusColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Adaptive Framework
                        </Typography>
                        <Typography>
                            Support diverse passenger scenarios within a single journey.
                        </Typography>
                    </IconListItem>
                </Stack>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionAdaptiveJourneyStepOne}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 2"
                subtitle="Scaling the International Journey"
                color={stepTwoColor}
            >
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Building on the domestic foundation, the focus shifted to scaling the
                    journey without increasing complexity. Rather than creating separate
                    flows for different countries, the existing framework was extended to
                    support destination-specific regulations, passport and visa
                    requirements, and operational rules within the same adaptive journey.
                </IconListItem>
                <Stack spacing={2.5}>
                    <Typography sx={{ fontWeight: '500' }}>Design Focus</Typography>
                    <IconListItem iconType="number" number={1} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Destination Requirements
                        </Typography>
                        <Typography>
                            Support country-specific rules dynamically.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={2} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Regulatory Compliance
                        </Typography>
                        <Typography>
                            Integrate passport, visa, and travel requirements.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={3} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Rule-based Conditions
                        </Typography>
                        <Typography>
                            Trigger only relevant steps based on journey context.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={4} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Scalable Framework
                        </Typography>
                        <Typography>
                            Extend the existing journey without creating separate flows.
                        </Typography>
                    </IconListItem>
                </Stack>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionAdaptiveJourneyStepTwo}
                />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

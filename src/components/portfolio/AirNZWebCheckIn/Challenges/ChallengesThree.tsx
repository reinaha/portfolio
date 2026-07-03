import { Stack, Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZWebCheckInChallengeThreeStepOne,
    AirNZWebCheckInChallengeThreeStepThree,
    AirNZWebCheckInChallengeThreeStepTwo,
} from '@/images/AirNZWebCheckIn';

export const ChallengeThreeContent = () => {
    const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const stepThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Balancing Simplicity Across Complex Scenarios
                </Typography>
                <Typography>
                    One of the project&apos;s primary goals was to deliver a simple,
                    intuitive check-in experience while supporting an increasingly diverse
                    range of passenger and journey scenarios. As the number of scenarios
                    grew, maintaining simplicity became progressively more difficult.
                    Solutions that worked well for one journey often introduced friction
                    for another, making it essential to evaluate design decisions beyond a
                    single use case.
                </Typography>
                <Typography>
                    To manage this complexity, I created a scenario validation matrix
                    using representative personas covering the project&apos;s core
                    passenger and journey combinations. Throughout the design process,
                    every major concept was evaluated against this matrix to ensure it
                    delivered a balanced experience across all scenarios—not by optimising
                    for a single user, but by consistently achieving above-average
                    usability for everyone.
                </Typography>
                <Typography>
                    Rather than searching for a perfect solution for any single persona, I
                    optimised for the most balanced experience across the entire product
                    ecosystem.
                </Typography>
            </Stack>
            <PortfolioChipSection
                title="Step 1"
                subtitle="Balanced Solution Validation"
                color={stepOneColor}
            >
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    Tested each design option against representative personas to ensure it
                    achieved above-average usability across all key scenarios, rather than
                    maximising the experience for only one.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInChallengeThreeStepOne} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 2"
                subtitle="Flow Validation Across Personas"
                color={stepTwoColor}
            >
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Tested the proposed flow against representative personas and key
                    journey scenarios to identify usability issues, edge cases, and
                    trade-offs before progressing the design.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInChallengeThreeStepTwo} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 3"
                subtitle="Scenario-Based Design Validation"
                color={stepThreeColor}
            >
                <IconListItem iconType="arrow" iconColor={stepThreeColor}>
                    Used the scenario matrix throughout the design process to validate
                    high-fidelity concepts against representative personas and complex
                    journey combinations, ensuring every iteration remained robust across
                    real-world scenarios.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInChallengeThreeStepThree} />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

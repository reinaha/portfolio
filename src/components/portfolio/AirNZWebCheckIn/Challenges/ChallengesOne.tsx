import { Stack, Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioSectionContainer,
} from '@/components';

export const ChallengeOneContent = () => {
    const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const stepThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Define Core vs Conditional Journeys
                </Typography>
                <Typography>
                    Legacy Web Check-in forced most passengers through the same linear
                    sequence, regardless of their booking context. To create a modular
                    flow, I needed to define which parts of the journey were always
                    required and which modules should only appear when specific passenger,
                    journey, or service conditions were met.
                </Typography>
            </Stack>
            <PortfolioChipSection
                title="Step 1"
                subtitle="Identify Core Functional Elements"
                color={stepOneColor}
            >
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    The legacy experience was organised around screens. To build a modular
                    journey, I first separated each screen into functional elements,
                    grouped by what users were trying to accomplish rather than where the
                    information happened to live.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 2"
                subtitle="Define Activation Rules"
                color={stepTwoColor}
            >
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Each legacy screen was broken into its underlying functional element —
                    defined by the user&apos;s purpose, not the screen container it
                    happened to live in.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 3"
                subtitle="Generate Context-aware Journeys"
                color={stepThreeColor}
            >
                <IconListItem iconType="arrow" iconColor={stepThreeColor}>
                    With activation rules defined, journeys assemble dynamically from
                    context. Each context generates a unique, minimal sequence — no fixed
                    order required.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

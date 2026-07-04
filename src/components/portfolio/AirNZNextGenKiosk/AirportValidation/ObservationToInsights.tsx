import { Typography } from '@mui/material';

import {
    IconListItem,
    IconListItemGrid,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import { AirNZNextGenKioskAirportValidationInsightsFramework } from '@/images/AirNZNextGenKiosk';

export const ObservationToInsightsContent = () => {
    const iconColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                From Observation to Insights
            </Typography>
            <Typography>
                After each airport validation session, I synthesised the observation logs
                into a structured analysis framework. While the raw logs captured valuable
                passenger behaviour, they made it difficult to identify recurring patterns
                or understand the real reasons behind failures.
            </Typography>
            <Typography>
                Passengers could fail on the same screen for entirely different reasons.
                Simply knowing where a failure occurred wasn&apos;t enough—we needed to
                understand why it happened. To uncover the root cause, I categorised every
                observation into four behavioural phases.
            </Typography>
            <IconListItemGrid>
                <IconListItem iconType="number" number={1} iconColor={iconColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Phase A — Instruction
                    </Typography>
                    <Typography>What should I do?</Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={iconColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Phase B — Identification
                    </Typography>
                    <Typography>Where and how do I do it?</Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={iconColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Phase C — Attempt
                    </Typography>
                    <Typography>I&apos;m doing it — what happens?</Typography>
                </IconListItem>
                <IconListItem iconType="number" number={4} iconColor={iconColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        System / UI Layer
                    </Typography>
                    <Typography>
                        System behaviour, interface patterns, or product limitations that
                        contribute to the issue.
                    </Typography>
                </IconListItem>
            </IconListItemGrid>
            <IconListItem iconType="arrow" iconColor={iconColor}>
                This framework allowed us to distinguish whether an issue was caused by
                unclear instructions, poor discoverability, task execution, or the system
                itself. Rather than treating every issue on a screen as the same problem,
                we could identify the true root cause and prioritise the most effective
                product improvements.
            </IconListItem>
            <PortfolioImage
                imageSrc={AirNZNextGenKioskAirportValidationInsightsFramework}
            />
        </PortfolioSectionContainer>
    );
};

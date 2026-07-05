import { Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZNextGenKioskAirportValidationBoardingPass,
    AirNZNextGenKioskAirportValidationPassportScan,
} from '@/images/AirNZNextGenKiosk';

export const ObservationDrivenIterationContent = () => {
    const exampleColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Observation-driven Iteration
            </Typography>
            <Typography>
                Rather than waiting until the end of the trial to review findings, we used
                airport validation as a continuous feedback loop. Whenever we observed
                clear, low-risk usability issues, we collaborated directly with developers
                to implement improvements between observation sessions and immediately
                revalidated them with the next wave of passengers. This allowed us to
                quickly confirm whether each change reduced confusion, improved task
                completion, and decreased the need for staff assistance.
            </Typography>
            <PortfolioChipSection
                title="Example 1"
                subtitle="Boarding Pass Printing"
                color={exampleColor}
            >
                <Typography>
                    One of the clearest behavioural patterns observed during airport
                    validation was passengers missing the Print Boarding Pass prompt. The
                    original flow displayed the boarding pass modal after bag tag
                    printing. In practice, passengers naturally shifted their attention to
                    collecting and attaching their bag tags, causing many to overlook the
                    modal until it timed out. This often resulted in passengers asking
                    airport staff to print their boarding pass afterwards.
                </Typography>
                <IconListItem iconType="arrow" iconColor={exampleColor}>
                    To address this, we reordered the flow so that the boarding pass
                    prompt appeared before bag tag printing. Once passengers responded,
                    bag tags printed immediately in the background.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={exampleColor}>
                    Subsequent observations showed a noticeable reduction in missed
                    boarding pass prompts, confirming that a small change in interaction
                    timing significantly improved completion.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskAirportValidationBoardingPass}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Example 2"
                subtitle="Multi-passenger Passport Scanning"
                color={exampleColor}
            >
                <Typography>
                    Another recurring behaviour emerged during the multi-passenger
                    passport scanning flow. Our initial assumption was that passengers
                    would remember how to scan their passport after completing the first
                    passport scan, so guidance was provided only through an optional
                    &quot;How to Scan&quot; tooltip. However, observations consistently
                    showed that many passengers hesitated, attempted incorrect scanning
                    methods, or asked staff for assistance before noticing the tooltip.
                </Typography>
                <IconListItem iconType="arrow" iconColor={exampleColor}>
                    To test a different approach, we moved the guidance to appear
                    proactively before passengers entered the multi-passenger scanning
                    flow, rather than relying on them to discover it.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={exampleColor}>
                    Follow-up observations showed a clear reduction in scanning failures
                    and staff intervention, demonstrating that proactive guidance was more
                    effective than optional, on-demand help.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskAirportValidationPassportScan}
                />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

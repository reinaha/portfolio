import { Stack, Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZNextGenKioskSolutionPhysicalDigitalStepOne,
    AirNZNextGenKioskSolutionPhysicalDigitalStepTwo,
} from '@/images/AirNZNextGenKiosk';

export const PhysicalDigitalExperienceContent = () => {
    const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const detailColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Physical + Digital Experience
            </Typography>
            <Typography>
                Unlike web or mobile products, the kiosk experience extends beyond the
                screen. Passengers constantly shift their attention between the interface,
                hardware, physical documents, baggage, and the surrounding airport
                environment. Designing the experience required understanding these
                real-world behaviours and ensuring the digital interface worked seamlessly
                with the physical environment.
            </Typography>
            <PortfolioChipSection
                title="Step 1"
                subtitle="Designing for divided attention"
                color={stepOneColor}
            >
                <Stack spacing={2.5}>
                    <IconListItem iconType="number" number={1} iconColor={detailColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Challenge
                        </Typography>
                        <Typography>
                            Passengers frequently looked away from the screen while
                            collecting passports, lifting baggage, or preparing travel
                            documents. As a result, many failed to notice that the kiosk
                            had already progressed to the next step, leading to hesitation
                            and unnecessary delays.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={2} iconColor={detailColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Solution
                        </Typography>
                        <Typography>
                            We introduced subtle confirmation sounds and screen transition
                            feedback to reinforce that an action had been completed and
                            the journey had progressed.
                        </Typography>
                    </IconListItem>
                </Stack>
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    Airport validation showed that passengers recognised screen
                    transitions more naturally and hesitation between steps was noticeably
                    reduced.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionPhysicalDigitalStepOne}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Step 2"
                subtitle="Supporting hardware limitations through UX"
                color={stepTwoColor}
            >
                <Stack spacing={2.5}>
                    <IconListItem iconType="number" number={1} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Challenge
                        </Typography>
                        <Typography>
                            Passport scanning success depended not only on the interface
                            but also on the physical scanner and how passengers positioned
                            their documents. Many first-time users struggled with
                            positioning, leading to repeated scan attempts and staff
                            intervention.
                        </Typography>
                    </IconListItem>
                    <IconListItem iconType="number" number={2} iconColor={stepTwoColor}>
                        <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                            Solution
                        </Typography>
                        <Typography>
                            Instead of relying solely on error messages, we introduced
                            proactive visual guidance demonstrating the correct scanning
                            position before passengers attempted the task.
                        </Typography>
                    </IconListItem>
                </Stack>
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Validation showed a clear improvement in first-attempt scan success
                    and fewer repeated scanning attempts.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionPhysicalDigitalStepTwo}
                />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

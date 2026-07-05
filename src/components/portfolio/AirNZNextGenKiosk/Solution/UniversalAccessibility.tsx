import { Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZNextGenKioskSolutionAccessibilityCustomerInterview,
    AirNZNextGenKioskSolutionAccessibilityFinal,
    AirNZNextGenKioskSolutionAccessibilityPersonaSynthesis,
    AirNZNextGenKioskSolutionAccessibilityPhysical,
} from '@/images/AirNZNextGenKiosk';

export const UniversalAccessibilityContent = () => {
    const exampleColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const insightColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Designing for Universal Accessibility
            </Typography>
            <Typography>
                Unlike web or mobile products, the kiosk is a shared touchpoint used by
                passengers with a wide range of physical abilities, vision levels, and
                digital confidence. Accessibility was treated as a core product
                requirement throughout the project rather than a final compliance check.
            </Typography>
            <Typography>
                Across the project, we conducted multiple accessibility validation
                sessions, including physical accessibility testing with wheelchair users
                and two dedicated low vision research and usability studies.
            </Typography>
            <PortfolioChipSection
                title="Example 1"
                subtitle="Physical accessibility"
                color={exampleColor}
            >
                <Typography>
                    Physical accessibility focused on validating comfortable reach zones
                    and interaction areas. The kiosk hardware had already been designed at
                    an accessible height, while the digital interface ensured that primary
                    actions remained within comfortable reach regardless of passenger
                    height. Touch targets, scrolling areas, spacing, and margins were
                    continuously refined through user testing to reduce accidental touches
                    and make interactions more forgiving.
                </Typography>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionAccessibilityPhysical}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Example 2"
                subtitle="Low Vision Accessibility"
                color={exampleColor}
            >
                <Typography>
                    To better understand how passengers with visual impairments interact
                    with a self-service kiosk, we conducted interviews and usability
                    testing with six low vision participants before designing
                    accessibility solutions.
                </Typography>
                <Typography>
                    One of the biggest learnings was that low vision wasn&apos;t a single
                    user group. Participants represented a broad spectrum of visual
                    conditions—including legally blind users with residual vision, tunnel
                    vision, partial field loss, complete blindness, and colour-related
                    impairments. Rather than designing for one accessibility persona, the
                    challenge became supporting users who still relied on remaining vision
                    as well as those who navigated almost entirely through audio.
                </Typography>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionAccessibilityCustomerInterview}
                />
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionAccessibilityPersonaSynthesis}
                />
                <Typography sx={{ fontWeight: '500' }}>Key Insights</Typography>
                <IconListItem iconType="number" number={1} iconColor={insightColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Clear visual hierarchy
                    </Typography>
                    <Typography>
                        Information needed to remain understandable whether viewed through
                        magnification, blurred vision, or residual vision.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={insightColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Consistent interaction patterns
                    </Typography>
                    <Typography>
                        Predictable button placement reduced cognitive effort and made
                        repeated navigation significantly easier.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={insightColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        VoiceOver-first thinking
                    </Typography>
                    <Typography>
                        VoiceOver users relied on audio rather than visuals, requiring
                        meaningful accessibility labels, clear UX writing, loading
                        announcements, and screen transition feedback instead of simply
                        reading visible text.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={4} iconColor={insightColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Flexible accessibility modes
                    </Typography>
                    <Typography>
                        Planned Accessibility Mode included Dynamic Type support, higher
                        contrast, and larger touch targets to better support passengers
                        with remaining vision.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={AirNZNextGenKioskSolutionAccessibilityFinal} />
                <Typography>
                    Based on the research, we designed an accessibility framework that
                    supports both passengers with remaining vision and those who primarily
                    rely on audio. The proposed experience includes High Contrast Mode,
                    Dynamic Text, and accessibility-aware UI patterns to improve
                    readability and navigation for low vision users.
                </Typography>
                <Typography>
                    VoiceOver was also considered throughout the journey by refining UX
                    writing, accessibility labels, and screen semantics so each screen
                    could be understood through audio rather than visuals alone. These
                    accessibility features were designed and prepared for implementation
                    as part of a future development phase.
                </Typography>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

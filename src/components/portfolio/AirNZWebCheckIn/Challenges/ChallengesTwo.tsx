import { Stack, Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioSectionContainer,
} from '@/components';

export const ChallengeTwoContent = () => {
    const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const stepThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={2.5}>
                <Typography sx={{ fontWeight: '600' }}>
                    Define Information Architecture
                </Typography>
                <Typography>
                    The legacy experience was organised around individual screens rather
                    than user goals. Transitioning to a modular architecture required
                    redefining how information should be grouped, so each module
                    represented a meaningful task that could adapt across different
                    passenger types and journey scenarios. This involved exploring
                    multiple information structures to find the most intuitive, scalable,
                    and reusable approach.
                </Typography>
            </Stack>
            <PortfolioChipSection
                title="Case 1"
                subtitle="Where should Frequent Flyer details belong?"
                color={stepOneColor}
            >
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    Frequent Flyer details proved to be one of the most difficult pieces
                    of information to place within the modular architecture. While the
                    airline considered it a mandatory business requirement, from the
                    user&apos;s perspective it remained an optional, low-priority task.
                    This created a conflict between business needs and information
                    hierarchy.
                </IconListItem>
                <IconListItem iconType="noIcon">
                    Grouping it with Passenger Selection overloaded a highly
                    action-focused step, while combining it with Passport Details
                    introduced unnecessary friction for domestic journeys where passport
                    information was not required. Placing it within Travel Details was
                    also illogical, as travel information changes between flights whereas
                    Frequent Flyer details remain constant.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    To resolve this, I explored multiple information architectures to
                    identify the placement that best balanced business requirements with
                    user priorities while introducing the least disruption to the primary
                    check-in journey. Rather than treating Frequent Flyer details as a
                    standalone passenger step, I integrated it as a lightweight card
                    within the initial screen. Selecting the card opened a dedicated
                    modal, allowing the feature to remain easily accessible without adding
                    unnecessary weight or complexity to the core check-in flow.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Case 2"
                subtitle="Evaluating Information Architecture"
                color={stepTwoColor}
            >
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Early in the project, the team believed reducing the number of screens
                    would naturally create a faster check-in experience. Several concepts
                    merged multiple review and edit pages into one or two screens to
                    minimise the number of steps.
                </IconListItem>
                <IconListItem iconType="noIcon">
                    However, usability testing showed the opposite. As more information
                    and interactions were consolidated onto a single screen, cognitive
                    load increased, making it harder for users to quickly understand what
                    to review, edit, or complete.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    To evaluate each concept objectively, I analysed the information
                    architecture behind every option by breaking each screen down into
                    actions and content types. This provided a consistent framework for
                    comparing how different grouping strategies affected interaction
                    complexity, information hierarchy, and task completion.
                </IconListItem>
                <IconListItem iconType="noIcon">
                    The analysis shifted the discussion from &ldquo;How can we reduce the
                    number of steps?&rdquo; to &ldquo;How should information and
                    interactions be distributed?&rdquo; Ultimately, we found that an
                    effective modular IA was not about having fewer screens, but about
                    creating screens with a clear purpose, balanced information density,
                    and a single primary user task.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Case 3"
                subtitle="Structuring Boarding Pass Information"
                color={stepThreeColor}
            >
                <IconListItem iconType="arrow" iconColor={stepThreeColor}>
                    Designing the Boarding Pass experience became increasingly complex as
                    passengers could end up in multiple check-in states. Some successfully
                    completed check-in and could immediately access their boarding pass,
                    others completed check-in but were required to collect their boarding
                    pass at the airport, while some were unable to complete check-in
                    altogether. In multi-passenger bookings, these different states could
                    appear simultaneously, requiring a structure that remained clear
                    across every combination.
                </IconListItem>
                <IconListItem iconType="noIcon">
                    To identify the most resilient information architecture, I explored
                    multiple organisational models—including Task-oriented,
                    Object-oriented, Status-oriented, and Action-oriented IA—and evaluated
                    how each handled increasingly complex scenarios.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={stepThreeColor}>
                    While early concepts focused on grouping information by passenger or
                    check-in outcome, the analysis showed that users primarily needed to
                    understand whether an action was required or whether information was
                    simply being communicated. Organising the experience around user
                    actions created the clearest hierarchy, reduced cognitive effort, and
                    scaled more effectively across complex passenger combinations.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import {
    TradifyContentAreaBannerRules,
    TradifyFilterSwitchTagsMapping,
    TradifyJobListToJobDetailMapping,
    TradifyLowConnectivityConceptScenarios,
    TradifyLowConnectivityInteractionPrototypes,
} from '@/images';

import { StepBadge } from '../StepBadge';

const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
const stepOneConsiderationColor = { primary: '#08F', secondary: '#F2F7FF' };
const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
const stepThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };
const stepFourColor = { primary: '#FF7A00', secondary: '#FFF9E6' };
const stepFiveColor = { primary: '#DC006B', secondary: '#FCEDF4' };

export const WorkstreamTwoContent = () => {
    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={3.75}>
                <Typography sx={{ fontWeight: '600' }}>
                    Low Connectivity Journey Design
                </Typography>
                <Typography>
                    With the interaction principles established, I applied them to key
                    user journeys. Rather than designing isolated screens, I mapped
                    end-to-end flows across different connectivity conditions to define
                    how cached content, loading, retries, failures, and recovery should
                    behave consistently throughout the experience.
                </Typography>
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 1" color={stepOneColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Navigating Cached Content
                    </Typography>
                </Stack>
                <Typography>
                    Filtering and switching tabs both trigger server requests, making them
                    representative interactions for exploring cached information under low
                    connectivity. The objective wasn&apos;t simply handling loading
                    states, but defining how users could continue browsing while the
                    system attempted to retrieve fresh data in the background.
                </Typography>
                <Typography sx={{ fontWeight: '600' }}>
                    Key Design Considerations
                </Typography>
                <IconListItem
                    iconType="number"
                    number={1}
                    iconColor={stepOneConsiderationColor}
                >
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        No cached content available
                    </Typography>
                    <Typography>
                        Define how the experience should respond when no cached data
                        exists and the server request cannot be completed.
                    </Typography>
                </IconListItem>
                <IconListItem
                    iconType="number"
                    number={2}
                    iconColor={stepOneConsiderationColor}
                >
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Cached content with failed refresh
                    </Typography>
                    <Typography>
                        Determine how cached content should remain accessible while
                        clearly communicating that it may no longer reflect the latest
                        server data.
                    </Typography>
                </IconListItem>
                <IconListItem
                    iconType="number"
                    number={3}
                    iconColor={stepOneConsiderationColor}
                >
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Successful server response
                    </Typography>
                    <Typography>
                        Define how fresh server data replaces cached content without
                        disrupting the browsing experience.
                    </Typography>
                </IconListItem>
                <IconListItem
                    iconType="number"
                    number={4}
                    iconColor={stepOneConsiderationColor}
                >
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Content freshness rules
                    </Typography>
                    <Typography>
                        Establish when freshness indicators should appear, update, and
                        disappear so users understand the reliability of the information
                        without creating unnecessary visual noise.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyFilterSwitchTagsMapping} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 2" color={stepTwoColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Designing the Job Detail Journey
                    </Typography>
                </Stack>
                <Typography>
                    Unlike browsing flows, the Job Detail journey contains a mix of
                    read-only and editable interactions. I mapped the complete journey
                    from the Job List into Job Detail and its nested tabs to define how
                    each interaction should behave under low connectivity. As users moved
                    deeper into the experience—from viewing information to editing notes
                    or saving changes—the interaction model shifted from simply displaying
                    cached content to handling retries, failures, and save states
                    appropriately.
                </Typography>
                <Typography sx={{ fontWeight: '600' }}>
                    Key Design Considerations
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Viewing cached content
                    </Typography>
                    <Typography>
                        Define how Job Detail should behave when fresh data cannot be
                        retrieved, while allowing users to continue accessing previously
                        cached information.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Transitioning from read to edit
                    </Typography>
                    <Typography>
                        Identify where the experience changes from content consumption to
                        content modification, requiring different interaction and feedback
                        patterns.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Handling editable interactions
                    </Typography>
                    <Typography>
                        Define how editing, retries, save failures, and successful updates
                        should behave as users interact with deeper features such as Notes
                        and other tabs.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyJobListToJobDetailMapping} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 3" color={stepThreeColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Establishing Banner Rules
                    </Typography>
                </Stack>
                <Typography>
                    The content area banner needed clear behavioural rules because it was
                    influenced by multiple states—including cached data, fresh data, no
                    cached data, loading, empty states, manual refresh, and background
                    auto-refresh. To define exactly when the banner should appear,
                    disappear, or remain hidden, I mapped representative user scenarios
                    and established consistent rules for every state transition.
                </Typography>
                <PortfolioImage imageSrc={TradifyContentAreaBannerRules} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 4" color={stepFourColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Validating End-to-End Journey Flows
                    </Typography>
                </Stack>
                <Typography>
                    With the interaction principles and communication rules established, I
                    mapped complete end-to-end journeys covering the major connectivity
                    scenarios. Rather than validating screens in isolation, the flows
                    captured how the experience transitioned between fresh data, cached
                    content, offline states, retries, recovery, and empty states. This
                    created a shared reference that helped the team align on expected
                    behaviours while ensuring no critical scenarios were overlooked.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepFourColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Validate complete state transitions
                    </Typography>
                    <Typography>
                        Map how the UI should evolve as connectivity and data states
                        change throughout a user&apos;s journey.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepFourColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Align the team around a single source of truth
                    </Typography>
                    <Typography>
                        Provide one reference that designers, engineers, and product
                        managers could use to understand the expected behaviour for every
                        major scenario.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepFourColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Prevent missing edge cases
                    </Typography>
                    <Typography>
                        Capture complex journeys—including recovery, retries, offline
                        entry, cached data, and empty states—to ensure every supported
                        scenario was intentionally designed before implementation.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyLowConnectivityConceptScenarios} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 5" color={stepFiveColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Interaction Prototype
                    </Typography>
                </Stack>
                <Typography>
                    Many of the design decisions in this project were not reflected
                    through dramatic screen changes, but through subtle state transitions
                    over time. To validate these behaviours, I translated the journey maps
                    into interactive prototypes that simulated how the experience evolved
                    under different connectivity conditions. This allowed the team to
                    review timing, loading, retries, cached content, and recovery as they
                    would occur in a real-world environment.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepFiveColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Simulate time-based state transitions
                    </Typography>
                    <Typography>
                        Prototype how the experience evolves from initial loading to
                        cached content, server retries, and eventual success or timeout.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepFiveColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Visualise invisible behaviours
                    </Typography>
                    <Typography>
                        Many interactions happen between screens rather than through new
                        screens. The prototype made loading, recovery, and state
                        transitions visible for review.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepFiveColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Validate real-world scenarios
                    </Typography>
                    <Typography>
                        Each prototype was built directly from the mapped connectivity
                        scenarios, allowing the team to experience how every flow behaved
                        before implementation.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={4} iconColor={stepFiveColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Prototype Timer
                    </Typography>
                    <Typography>
                        To accurately represent time-based behaviour, I introduced a timer
                        into the prototype. The timeline visualised the transition between
                        the initial loading period (0–2s), low connectivity, and the
                        30-second timeout, making it easier to understand when cached
                        content appeared, when server requests were still in progress, and
                        when the experience transitioned to either fresh data or a timeout
                        state.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyLowConnectivityInteractionPrototypes} />
            </Stack>
        </PortfolioSectionContainer>
    );
};

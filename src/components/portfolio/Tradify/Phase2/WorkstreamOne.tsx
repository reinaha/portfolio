import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import {
    TradifyCommunicationStrategy,
    TradifyConnectivityDecisionFramework,
    TradifyKeyDesignQuestions,
} from '@/images';

import { StepBadge } from '../StepBadge';

const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
const stepThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };

export const WorkstreamOneContent = () => {
    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={3.75}>
                <Typography sx={{ fontWeight: '600' }}>
                    Defining Low Connectivity Behaviour
                </Typography>
                <Typography>
                    Before designing any interactions, I challenged the assumption that
                    low connectivity and offline should behave the same. Although both
                    represented unreliable network conditions, their system behaviours and
                    user outcomes were fundamentally different. Establishing this
                    distinction became the foundation for every subsequent design
                    decision.
                </Typography>
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 1" color={stepOneColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Separate low connectivity from offline
                    </Typography>
                </Stack>
                <Typography>
                    One of the first decisions was defining whether low connectivity
                    belonged to the offline experience or should be treated as a separate
                    state. By analysing both system behaviour and user journeys, I
                    concluded they required different interaction models. Offline is a
                    known state where actions can be blocked immediately. Low connectivity
                    is probabilistic—requests may still succeed, retry, or fail over time.
                    Because of this, applying offline rules to low connectivity would
                    introduce unnecessary blocking and reduce successful task completion.
                </Typography>
                <PortfolioImage imageSrc={TradifyConnectivityDecisionFramework} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 2" color={stepTwoColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Establishing Low Connectivity Principles
                    </Typography>
                </Stack>
                <Typography>
                    Once low connectivity was established as a separate state, the next
                    step was defining how that experience should behave. This raised three
                    key design questions:
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        How long should users wait?
                    </Typography>
                    <Typography>
                        Define an acceptable loading duration and when a request should
                        transition to a timeout.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        What must users see while waiting
                    </Typography>
                    <Typography>
                        Loading feedback was considered essential, but the remaining
                        communication required further definition.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepTwoColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Should users be told they have low connectivity?
                    </Typography>
                    <Typography>
                        Determine whether exposing the connectivity state itself provides
                        value, or whether only its impact should be communicated.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyKeyDesignQuestions} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 3" color={stepThreeColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Defining User Communication
                    </Typography>
                </Stack>
                <Typography>
                    The final step was determining what information users actually needed
                    throughout low connectivity. Rather than exposing the connectivity
                    state itself, I focused on communicating only information that helped
                    users make decisions and understand the outcome of their actions.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Should users know they have low connectivity?
                    </Typography>
                    <Typography>
                        Simply informing users that the connection was weak offered little
                        value. Unlike offline mode, users couldn&apos;t take meaningful
                        action, and requests could still succeed. Instead of surfacing the
                        network state itself, I focused on communicating its impact.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        What information actually matters?
                    </Typography>
                    <Typography>
                        The communication was reduced to two key messages: the content on
                        screen may not be up to date, and some actions may fail due to the
                        current connection. These messages gave users actionable
                        information without introducing unnecessary anxiety.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        When should we communicate it?
                    </Typography>
                    <Typography>
                        Users should only receive feedback when it affects their
                        experience. If a request succeeds, there is no need to mention
                        connectivity. Communication should only appear when cached content
                        is being shown or when an action cannot be completed successfully.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyCommunicationStrategy} />
            </Stack>
        </PortfolioSectionContainer>
    );
};

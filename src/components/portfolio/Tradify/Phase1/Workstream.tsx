import { Stack, Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import {
    TradifyColdStartOfflineJourney,
    TradifyCurrentOfflineFeedbackAudit,
    TradifyFoundationalOfflineComponents,
    TradifyMisleadingUserExperiencesMapping,
    TradifyOfflineDecisionFramework,
    TradifyOfflineFeedbackPatterns,
} from '@/images';

import { StepBadge } from '../StepBadge';

const stepOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
const stepTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
const stepThreeColor = { primary: '#3A31B2', secondary: '#F2F7FF' };

export const Phase1WorkstreamContent = () => {
    return (
        <PortfolioSectionContainer spacing={12.5}>
            <Stack spacing={3.75}>
                <Typography sx={{ fontWeight: '600' }}>
                    Offline Decision Framework
                </Typography>
                <Typography>
                    To remove ambiguity from the offline experience, I established a
                    decision framework that defined capability boundaries first, validated
                    existing behaviours against those rules, identified the information
                    users needed, and finally mapped that information to consistent UI
                    patterns.
                </Typography>
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 1" color={stepOneColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Eliminating misleading behaviours
                    </Typography>
                </Stack>
                <Typography>
                    The biggest challenge was determining whether an interaction was
                    actually misleading. To answer that, I first needed a clear definition
                    of what should and shouldn&apos;t be supported offline.
                </Typography>
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    I proposed an offline capability framework that categorised every
                    action into Must Have, Nice to Have, and Should Not Be Allowed. This
                    aligned the initial release scope while providing a roadmap for
                    expanding offline support in future iterations.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={stepOneColor}>
                    Once the capability boundaries were established, I mapped what needed
                    to be communicated for every supported action—including offline
                    status, cached content, unavailable content, and blocked
                    actions—before deciding how those messages should be delivered through
                    the interface.
                </IconListItem>
                <PortfolioImage imageSrc={TradifyOfflineDecisionFramework} />
                <PortfolioImage imageSrc={TradifyMisleadingUserExperiencesMapping} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 2" color={stepTwoColor} />
                    <Typography sx={{ fontWeight: '500' }}>
                        Standardising feedback patterns
                    </Typography>
                </Stack>
                <Typography>
                    The audit also revealed many inconsistent and misleading feedback
                    patterns across the existing product.
                </Typography>
                <IconListItem iconType="arrow" iconColor={stepTwoColor}>
                    Using the audit findings, I grouped similar behaviours into common
                    feedback scenarios and redefined how each should be communicated.
                    Rather than designing feedback screen by screen, I established
                    reusable communication patterns that could be applied consistently
                    across the product.
                </IconListItem>
                <PortfolioImage imageSrc={TradifyCurrentOfflineFeedbackAudit} />
                <PortfolioImage imageSrc={TradifyOfflineFeedbackPatterns} />
            </Stack>

            <Stack spacing={5}>
                <Stack direction="row" spacing={5} alignItems="center">
                    <StepBadge label="Step 3" color={stepThreeColor} />
                    <Typography sx={{ fontWeight: '500' }}>First Delivery</Typography>
                </Stack>
                <Typography>
                    Based on the offline framework, I prioritised improvements that
                    addressed the most critical usability issues while establishing a
                    scalable foundation for future iterations.
                </Typography>
                <IconListItem iconType="number" number={1} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Connectivity Banner
                    </Typography>
                    <Typography>
                        Expanded the connectivity banner from core screens to relevant
                        branch screens, ensuring users remained aware of their network
                        status throughout the journey. The banner colour was also updated
                        from blue to red to increase visibility and better communicate
                        that certain functionality was unavailable while offline.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Offline Blocking Dialog
                    </Typography>
                    <Typography>
                        Redesigned the existing offline dialog by replacing
                        screen-specific copy with a single, reusable message that could be
                        applied consistently across different blocking scenarios. Instead
                        of appearing throughout the product, the dialog was limited to
                        screens where offline restrictions genuinely prevented users from
                        completing their intended task.
                    </Typography>
                </IconListItem>
                <IconListItem iconType="number" number={3} iconColor={stepThreeColor}>
                    <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                        Action Failure Toast
                    </Typography>
                    <Typography>
                        Redefined the action failure toast and standardised both its
                        messaging and trigger conditions. Rather than appearing
                        inconsistently, the toast was shown only when a user attempted an
                        action that failed because of offline limitations, providing
                        immediate and predictable feedback across the product.
                    </Typography>
                </IconListItem>
                <PortfolioImage imageSrc={TradifyColdStartOfflineJourney} />
                <PortfolioImage imageSrc={TradifyFoundationalOfflineComponents} />
            </Stack>
        </PortfolioSectionContainer>
    );
};

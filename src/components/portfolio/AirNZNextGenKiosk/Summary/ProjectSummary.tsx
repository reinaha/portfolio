import { Typography } from '@mui/material';

import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';
import { AirNZNextGenKioskSummaryLaunchImpact } from '@/images/AirNZNextGenKiosk';

const LaunchImpactContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                The examples shown here represent only a small part of a much larger
                rule-driven kiosk platform designed for Air New Zealand&apos;s
                next-generation self-service experience. Beyond these examples, the
                project involved many more passenger scenarios, operational workflows,
                hardware interactions, accessibility requirements, and
                destination-specific regulations that couldn&apos;t all be included here.
                I&apos;d be happy to walk through these in more detail in person.
            </Typography>
            <Typography>
                Following internal validation, the platform was first trialled at Auckland
                Domestic, before expanding to Auckland International. After successful
                trials, the new kiosk platform was progressively rolled out across Air New
                Zealand airports throughout New Zealand, with Sydney planned as the first
                international deployment as the rollout continues.
            </Typography>
            <Typography>
                Replacing the legacy vendor solution was only the beginning. The platform
                was designed as a scalable in-house foundation that can continuously
                evolve to support new passenger needs, operational improvements, and
                future expansion. By establishing a flexible architecture rather than a
                one-off product, the team created a platform capable of growing alongside
                Air New Zealand&apos;s long-term self-service strategy.
            </Typography>
            <Typography>
                Hopefully, if you check in at an Air New Zealand kiosk, the complexity
                solved behind the scenes helps make your airport journey feel effortless.
            </Typography>
        </PortfolioSectionContainer>
    );
};

export const ProjectSummaryContentData = [
    {
        title: 'Launch & Impact',
        content: <LaunchImpactContent />,
    },
];

export const ProjectSummaryContent = () => (
    <PortfolioSubSection subsections={ProjectSummaryContentData} />
);

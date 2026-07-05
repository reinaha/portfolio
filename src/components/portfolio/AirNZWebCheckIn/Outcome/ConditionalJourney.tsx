import { IconListItem } from '@/components';
import {
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    AirNZWebCheckInConditionalJourneyScenario1,
    AirNZWebCheckInConditionalJourneyScenario2,
    AirNZWebCheckInConditionalJourneyScenario3,
    AirNZWebCheckInConditionalJourneyScenario4,
    AirNZWebCheckInConditionalJourneyScenario5,
} from '@/images/AirNZWebCheckIn';

const ConditionalJourneyExperienceContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };

    return (
        <PortfolioSectionContainer>
            <IconListItem>
                While Domestic Express (4 steps) and International Express (5 steps)
                define the core check-in journeys, not every traveller follows the same
                path. The experience dynamically adapts based on journey type, booking
                conditions, passenger eligibility, regulatory requirements, and the
                traveller&apos;s check-in status.
            </IconListItem>
            <IconListItem>
                When regulatory or operational requirements must be met, additional steps
                are inserted directly into the journey. Less critical interactions are
                handled through contextual actions, hidden modals, or dynamically revealed
                content within existing steps, avoiding unnecessary screens. Rather than
                creating separate journeys for every scenario, the experience expands only
                when needed, keeping the core journey consistent while supporting complex
                business and regulatory requirements.
            </IconListItem>
            <PortfolioChipSection
                title="Scenario 1"
                subtitle="Onward Travel Requirement"
                color={goalColor}
            >
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    Destination requires proof of onward travel under Timatic rules (e.g.
                    Indonesia, Thailand, Singapore), triggering an additional mandatory
                    Onward Travel step.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInConditionalJourneyScenario1} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Scenario 2"
                subtitle="ESTA Information Required"
                color={goalColor}
            >
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    Destination is the United States, embedding ESTA Details within the
                    Personal Details step.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInConditionalJourneyScenario2} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Scenario 3"
                subtitle="Exit Row Confirmation"
                color={goalColor}
            >
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    Passenger selects an exit row seat, triggering an additional Exit Row
                    Confirmation step before boarding pass issuance.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInConditionalJourneyScenario3} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Scenario 4"
                subtitle="Partially Completed Check-in"
                color={goalColor}
            >
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    One or more passengers have already completed check-in, updating the
                    Select Passenger step to display completed passengers.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInConditionalJourneyScenario4} />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Scenario 5"
                subtitle="Multi-city Itinerary"
                color={goalColor}
            >
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    Booking contains multiple flight groups, introducing a Flight Group
                    Hub before the core journey.
                </IconListItem>
                <PortfolioImage imageSrc={AirNZWebCheckInConditionalJourneyScenario5} />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

export const ConditionalJourneyContentData = [
    {
        title: 'Conditional Journey Experiences',
        content: <ConditionalJourneyExperienceContent />,
    },
];

export const ConditionalJourneyContent = () => (
    <PortfolioSubSection subsections={ConditionalJourneyContentData} />
);

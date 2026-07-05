import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    AirNZWebCheckInPassengerJourneyVariationsFutureOpportunity,
    AirNZWebCheckInPassengerJourneyVariationsMultiJourney,
    AirNZWebCheckInPassengerJourneyVariationsReducingFriction,
} from '@/images/AirNZWebCheckIn';

const InternationalMultipassengerMultiflightJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Multi-passenger & Multi-flight Journey demonstrates how the check-in
                experience scales beyond the Express journeys. Air New Zealand supports
                check-in for up to 9 passengers across 4 flight segments within a single
                booking. As the number of passengers and flight segments increases, so
                does the complexity—each passenger may have different eligibility, travel
                documents, seats, baggage, and services, while every flight segment can
                introduce its own requirements.
            </IconListItem>
            <IconListItem>
                The legacy experience handled this complexity through repetition. Each
                additional flight segment required travellers to repeat the same
                seven-step journey, resulting in up to 28 journey steps for a four-segment
                itinerary before accounting for passenger-specific interactions. For
                larger group bookings, this repetitive process became increasingly
                time-consuming and difficult to complete.
            </IconListItem>
            <IconListItem>
                Our goal was to keep the journey from growing alongside the complexity.
                Instead of repeating the entire flow, the redesigned experience preserves
                the same four-step Domestic Express and five-step International Express
                structure, expanding only where passenger- or flight-specific information
                is required. This allows even large group bookings and complex itineraries
                to remain predictable, efficient, and significantly easier to complete.
            </IconListItem>
            <PortfolioImage
                imageSrc={AirNZWebCheckInPassengerJourneyVariationsMultiJourney}
            />
        </PortfolioSectionContainer>
    );
};

const ReducingFrictionContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Travel Details was one of the most challenging screens to redesign,
                balancing customer efficiency with ancillary revenue opportunities.
            </IconListItem>
            <IconListItem>
                The legacy flow embedded seat selection, upgrades, fare options, and
                baggage directly into check-in. While these created upsell opportunities,
                they also made the journey significantly longer. For many travellers,
                these screens became steps to skip rather than meaningful decisions.
            </IconListItem>
            <IconListItem>
                Research showed that seat changes, upgrades, and fare changes were rarely
                made during check-in, and many travellers questioned why they were asked
                to review a seat they had already selected during booking. Since these
                actions were already available in Manage Booking, we removed them from the
                core journey and replaced them with a Make changes action for customers
                who needed them.
            </IconListItem>
            <IconListItem>
                To preserve flexibility, we also introduced Undo Check-in, allowing
                travellers to complete check-in first and return later to update their
                booking or purchase additional services.
            </IconListItem>
            <PortfolioImage
                imageSrc={AirNZWebCheckInPassengerJourneyVariationsReducingFriction}
            />
        </PortfolioSectionContainer>
    );
};

const FutureOpportunityContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                While most ancillary services were removed from the core check-in journey,
                checked baggage emerged as an exception.
            </IconListItem>
            <IconListItem>
                Research showed that baggage serves a purpose beyond ancillary revenue.
                Ground staff explained that verifying passengers&apos; actual baggage is
                one of the most time-consuming parts of airport operations. Although a
                booking may include multiple checked bags, passengers often travel with
                fewer than their allowance, making it difficult to understand the
                aircraft&apos;s true baggage load and available capacity.
            </IconListItem>
            <IconListItem>
                This presented an opportunity to move baggage confirmation into
                check-in—not simply as an upsell opportunity, but as a way to capture more
                accurate operational data at the moment passengers are most likely to know
                exactly what they are bringing.
            </IconListItem>
            <IconListItem>
                The concept introduces a lightweight baggage confirmation step where
                travellers simply confirm the number of checked bags they are travelling
                with and indicate whether they are carrying oversized items such as
                bicycles or sports equipment. Capturing this information before arriving
                at the airport reduces manual verification for ground staff while
                improving baggage planning and creating a more relevant opportunity to
                purchase additional baggage when required.
            </IconListItem>
            <PortfolioImage
                imageSrc={AirNZWebCheckInPassengerJourneyVariationsFutureOpportunity}
            />
        </PortfolioSectionContainer>
    );
};

export const PassengerJourneyVariationsData = [
    {
        title: 'International Multi-passenger & Multi-flight Journey',
        content: <InternationalMultipassengerMultiflightJourneyContent />,
    },
    {
        title: 'Reducing friction without sacrificing flexibility',
        content: <ReducingFrictionContent />,
    },
    {
        title: 'Future Opportunity — Rethinking Checked Baggage',
        content: <FutureOpportunityContent />,
    },
];

export const PassengerJourneyVariationsContent = () => (
    <PortfolioSubSection subsections={PassengerJourneyVariationsData} />
);

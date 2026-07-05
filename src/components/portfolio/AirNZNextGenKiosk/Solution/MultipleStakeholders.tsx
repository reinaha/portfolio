import { Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    AirNZNextGenKioskSolutionStakeholdersOperationalVisibility,
    AirNZNextGenKioskSolutionStakeholdersRestrictedItems,
    AirNZNextGenKioskSolutionStakeholdersStaffOverride,
} from '@/images/AirNZNextGenKiosk';

export const MultipleStakeholdersContent = () => {
    const exampleOneColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const exampleTwoColor = { primary: '#008557', secondary: '#E8FAF0' };
    const exampleThreeColor = { primary: '#3A31B2', secondary: '#ECEAF8' };

    return (
        <PortfolioSectionContainer>
            <Typography sx={{ fontWeight: '600' }}>
                Designing for Multiple Stakeholders
            </Typography>
            <Typography>
                While the passenger experience remained the priority, every design
                decision also considered airport operations and business objectives. The
                experience was designed to reduce staff intervention, support operational
                efficiency, and create a scalable platform without compromising usability.
            </Typography>
            <PortfolioChipSection
                title="Example 1"
                subtitle="Designing for Operational Visibility"
                color={exampleOneColor}
            >
                <Typography>
                    Ground staff needed to identify kiosks requiring assistance from a
                    distance. Existing screens looked visually similar, making it
                    difficult to distinguish between a passenger needing help, a kiosk
                    that was temporarily unavailable, or one operating normally.
                </Typography>
                <IconListItem iconType="arrow" iconColor={exampleOneColor}>
                    We designed a visual state system with distinct colours and layouts
                    for each operational status. Normal operation retained the brand
                    purple experience, passenger errors used a high-contrast white
                    background with an orange alert state, and unavailable kiosks switched
                    to a full black screen. Each state could be recognised from across the
                    terminal without reading the content.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={exampleOneColor}>
                    Ground staff could identify kiosk status immediately, respond to
                    passengers more quickly, and distinguish operational issues without
                    approaching every kiosk individually.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionStakeholdersOperationalVisibility}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Example 2"
                subtitle="Staff Override Flow"
                color={exampleTwoColor}
            >
                <Typography>
                    Not every passenger could complete self-service independently.
                    Passengers carrying oversized, overweight, or restricted baggage often
                    required manual approval from ground staff before check-in could
                    continue. The experience needed to support a seamless handoff between
                    passenger self-service and staff intervention without interrupting the
                    overall journey.
                </Typography>
                <IconListItem iconType="arrow" iconColor={exampleTwoColor}>
                    I designed a dedicated Staff Override flow integrated directly into
                    the baggage journey. Staff could authenticate, select the appropriate
                    override reason, and immediately return passengers to the self-service
                    flow without restarting the check-in process.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={exampleTwoColor}>
                    The design reduced unnecessary disruption during assisted check-in,
                    supported faster staff intervention, and maintained a continuous
                    self-service experience for passengers.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionStakeholdersStaffOverride}
                />
            </PortfolioChipSection>
            <PortfolioChipSection
                title="Example 3"
                subtitle="Restricted Items Awareness"
                color={exampleThreeColor}
            >
                <Typography>
                    Many passengers overlooked the restricted items screen because it
                    relied on simple illustrations that were easy to skim past. As a
                    result, passengers frequently asked ground staff the same questions
                    again at Bag Drop, slowing down the process.
                </Typography>
                <IconListItem iconType="arrow" iconColor={exampleThreeColor}>
                    Instead of generic illustrations, I introduced realistic product
                    imagery that more closely matched the items passengers carried in real
                    life. The content was redesigned to make restricted items easier to
                    recognise at a glance.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={exampleThreeColor}>
                    Passengers spent more time engaging with the screen and required less
                    clarification from ground staff, improving both passenger
                    understanding and operational efficiency.
                </IconListItem>
                <PortfolioImage
                    imageSrc={AirNZNextGenKioskSolutionStakeholdersRestrictedItems}
                />
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

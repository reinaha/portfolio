import { PortfolioMajorSection } from '@/components';
import {
    AirNZNextGenKioskOutcomeCheckedBagsCover,
    AirNZNextGenKioskOutcomeDestinationRequirementsCover,
    AirNZNextGenKioskOutcomeEntryScreenCover,
    AirNZNextGenKioskOutcomeEntryScreenVideo,
    AirNZNextGenKioskOutcomeEstaCover,
    AirNZNextGenKioskOutcomeJourneyCompletionCover,
    AirNZNextGenKioskOutcomePassportScanningCover,
    AirNZNextGenKioskOutcomeRestrictedItemsCover,
    AirNZNextGenKioskOutcomeSeatReviewCover,
    AirNZNextGenKioskOutcomeStaffOverrideCover,
    AirNZNextGenKioskOutcomeWelcomeCover,
} from '@/images/AirNZNextGenKiosk';

import {
    CheckedBagsContent,
    DestinationRequirementsContent,
    EntryScreenContent,
    EstaContent,
    JourneyCompletionContent,
    PassportScanningContent,
    RestrictedItemsContent,
    SeatReviewContent,
    StaffOverrideContent,
    WelcomeContent,
} from './Outcome';

const outcomeSections = [
    {
        title: 'Entry Screen',
        content: <EntryScreenContent />,
        coverImg: AirNZNextGenKioskOutcomeEntryScreenCover,
        coverVideo: AirNZNextGenKioskOutcomeEntryScreenVideo,
        coverImgFullWidth: true,
    },
    {
        title: 'Welcome Screen',
        content: <WelcomeContent />,
        coverImg: AirNZNextGenKioskOutcomeWelcomeCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Passport Scanning',
        content: <PassportScanningContent />,
        coverImg: AirNZNextGenKioskOutcomePassportScanningCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Checked Bags',
        content: <CheckedBagsContent />,
        coverImg: AirNZNextGenKioskOutcomeCheckedBagsCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Staff Override',
        content: <StaffOverrideContent />,
        coverImg: AirNZNextGenKioskOutcomeStaffOverrideCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Seat Review',
        content: <SeatReviewContent />,
        coverImg: AirNZNextGenKioskOutcomeSeatReviewCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Restricted Items',
        content: <RestrictedItemsContent />,
        coverImg: AirNZNextGenKioskOutcomeRestrictedItemsCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Journey Completion',
        content: <JourneyCompletionContent />,
        coverImg: AirNZNextGenKioskOutcomeJourneyCompletionCover,
        coverImgFullWidth: true,
    },
    {
        title: 'ESTA',
        content: <EstaContent />,
        coverImg: AirNZNextGenKioskOutcomeEstaCover,
        coverImgFullWidth: true,
    },
    {
        title: 'Destination Requirements',
        content: <DestinationRequirementsContent />,
        coverImg: AirNZNextGenKioskOutcomeDestinationRequirementsCover,
        coverImgFullWidth: true,
    },
];

export const OutcomeMajorSection = () => {
    return (
        <PortfolioMajorSection
            sectionTitle={{
                title: 'Outcome',
                subTitles: outcomeSections.map((s) => s.title),
            }}
            portfolioSections={outcomeSections}
        />
    );
};

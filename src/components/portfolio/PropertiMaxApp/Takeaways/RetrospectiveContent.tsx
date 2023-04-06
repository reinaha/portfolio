import {
    IconListItem,
    PortfolioChevronSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import { RetrospectiveCategoryMenu, RetrospectiveProgressBar } from '@/images';

const iconColor = { primary: '#1C1B1F', secondary: '#1C1B1F' };

export const RetrospectiveContent = () => {
    return (
        <PortfolioSectionContainer spacing={20}>
            <PortfolioChevronSection
                title="Sign-up progress bar with poor intuitiveness"
                color={iconColor}
            >
                <IconListItem iconType="noIcon" iconColor={iconColor}>
                    I regret not designing a progress bar with three dots instead of a
                    line, since the sign-up process consisted of only three steps. This
                    would have made it more intuitive for users to understand the progress
                    of the sign-up process.
                </IconListItem>
                <PortfolioImage imageSrc={RetrospectiveProgressBar} />
            </PortfolioChevronSection>
            <PortfolioChevronSection
                title="The Category menu design can be confusing with the filter"
                color={iconColor}
            >
                <IconListItem iconType="noIcon" iconColor={iconColor}>
                    A user provided feedback that they were confused whether the Category
                    page was a menu page or a filter page. It would have been better to
                    clearly distinguish between menu and filter and design accordingly.
                </IconListItem>
                <PortfolioImage imageSrc={RetrospectiveCategoryMenu} />
            </PortfolioChevronSection>
        </PortfolioSectionContainer>
    );
};

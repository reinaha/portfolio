import {
    IconListItem,
    PortfolioChevronSection,
    PortfolioImage,
    PortfolioSectionContainer,
} from '@/components';
import {
    RetrospectiveCategoryMenu,
    RetrospectiveProgressBar,
} from '@/images/OsstemDentalEShop';

const iconColor = { primary: '#1C1B1F', secondary: '#1C1B1F' };

export const RetrospectiveContent = () => {
    return (
        <PortfolioSectionContainer spacing={20}>
            <PortfolioChevronSection
                title="Unintuitive sign-up progress bar"
                color={iconColor}
            >
                <IconListItem iconType="noIcon" iconColor={iconColor}>
                    I regret not designing a progress bar with three dots instead of a
                    line, since the sign-up process consisted of only three specific
                    steps. This would have made it more intuitive for users to understand
                    the actual progress of the sign-up process.
                </IconListItem>
                <PortfolioImage imageSrc={RetrospectiveProgressBar} />
            </PortfolioChevronSection>
            <PortfolioChevronSection
                title="The category menu design can be confusing with the filter"
                color={iconColor}
            >
                <IconListItem iconType="noIcon" iconColor={iconColor}>
                    A user provided feedback on the category menu that it was hard to tell
                    whether the category page was a navigation menu or a filter. It would
                    have been better to clearly distinguish between menu and filter and
                    design.
                </IconListItem>
                <PortfolioImage imageSrc={RetrospectiveCategoryMenu} />
            </PortfolioChevronSection>
        </PortfolioSectionContainer>
    );
};

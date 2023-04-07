import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Due to the wide range of options available in real estate listings, we
                believed that dividing them solely with search filters would not be
                sufficient.
            </IconListItem>
            <IconListItem>
                Therefore, we placed the most essential parent categories of real estate
                options, including Residential, Rural, Commercial, Business, and Agent, in
                the middle of the navigation bar.
            </IconListItem>
            <IconListItem>
                The remaining basic functions such as &ldquo;List a Property,&rdquo;
                &ldquo;Sign in,&rdquo; and &ldquo;Profile&rdquo; were designed and placed
                on the right side of the navigation bar. &ldquo;List a Property&rdquo; is
                connected to the PropertiMax Agent Dashboard, allowing users to move
                directly to the Agent Dashboard by clicking on it.
            </IconListItem>
        </PortfolioSectionContainer>
    );
};

export const NavigationContentData = [
    {
        title: 'Navigation bar design concept',
        content: <NavigationJourneyContent />,
    },
];

export const NavigationContent = () => (
    <PortfolioSubSection subsections={NavigationContentData} />
);

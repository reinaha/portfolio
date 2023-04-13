import { IconListItem } from '@/components';
import { PortfolioSectionContainer, PortfolioSubSection } from '@/components/portfolio';

const NavigationJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Considering the wide range of options in real estate listings, we
                recognised that relying solely on search filters would not suffice.
            </IconListItem>
            <IconListItem>
                In response, we prioritised the most crucial parent categories of real
                estate options, such as Residential, Rural, Commercial, Business, and
                Agent, and positioned them at the centre of the navigation bar.
            </IconListItem>
            <IconListItem>
                To the right of the navigation bar, we added the remaining essential
                functions, including &ldquo;List a Property,&rdquo; &ldquo;Sign in,&rdquo;
                and &ldquo;Profile.&rdquo; The &ldquo;List a Property&rdquo; feature is
                connected to the PropertiMax Agent Dashboard, enabling users to access the
                dashboard directly with just a click.
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

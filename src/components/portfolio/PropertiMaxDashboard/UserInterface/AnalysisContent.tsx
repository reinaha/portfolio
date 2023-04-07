import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardAnalysisImg1,
    PropertiMaxDashboardAnalysisImg2,
    PropertiMaxDashboardAnalysisImg3,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The Listing Analysis Page is a page where agents can check the view and
                like counts of their posted real estate listings. Through this page,
                agents can assess the level of interest from potential buyers and plan
                their next steps accordingly. The popularity of the listings is ranked,
                and the rankings are presented using graphs for users to easily
                understand.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardAnalysisImg1} />
        </PortfolioSectionContainer>
    );
};

const ViewsLikesContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Designing &lsquo;Views&rsquo; and &lsquo;Likes&rsquo; sections to provide
                options for both most and least popular real estate listings, Agent can
                not only track the popularity of their posts but also identify less
                popular ones to plan their next move accordingly.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardAnalysisImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We believed that the list based on the views and popularity of real estate
                property posts could be a great help for agents to understand the needs of
                buyers. Therefore, we focused on making this page more efficient for
                agents and ultimately increasing their time spent on the dashboard, which
                is our target.
            </IconListItem>
            <IconListItem>
                In addition to the &lsquo;Views&rsquo; and &lsquo;Likes&rsquo; sections,
                we thought that providing other analysis filters would give agents more
                useful information. For this reason, we designed the &lsquo;Category
                Analysis&rsquo; section to show real estate property posts in order of
                high views based on various criteria such as age, gender, and location.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardAnalysisImg3} />
        </PortfolioSectionContainer>
    );
};

export const AnalysisContentData = [
    {
        title: 'Listing analysis journey',
        content: <JourneyContent />,
    },
    {
        title: "Design of 'Views' and 'Likes' sections for checking real estate property views and popularity.",
        content: <ViewsLikesContent />,
    },
    {
        title: 'Maximizing Agent Dashboard Utilization through Addition of Category Analysis Functionality based on Real Estate Property Views',
        content: <CategoryContent />,
    },
];

export const AnalysisContent = () => (
    <PortfolioSubSection subsections={AnalysisContentData} />
);

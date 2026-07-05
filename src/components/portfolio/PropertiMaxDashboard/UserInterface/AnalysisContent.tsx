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
                The Property Analysis Page allows agents to review the view and like
                counts of their real estate listings. By utilising this page, agents can
                evaluate the level of interest from potential buyers and devise their next
                steps accordingly. The listings&apos; popularity is ranked, and the
                rankings are depicted using graphs for users to easily comprehend.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardAnalysisImg1} />
        </PortfolioSectionContainer>
    );
};

const ViewsLikesContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                &ldquo;Views&rdquo; and &ldquo;Likes&rdquo; sections, allow agents to
                track the popularity of their posts and plan their next move. This helps
                them to identify the most and least popular properties and adapt their
                strategy accordingly.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardAnalysisImg2} />
        </PortfolioSectionContainer>
    );
};

const CategoryContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                Our goal is to help real estate agents maximise the use of their
                dashboard, so we&apos;ve added a new feature based on real estate property
                views. By presenting a list of the most popular property posts, we hope to
                help agents better understand their clients&apos; needs.
            </IconListItem>
            <IconListItem>
                Additionally, we&apos;ve designed the &lsquo;Category Analysis&rsquo;
                section to give agents even more insight into their clients. This feature
                allows agents to view high view counts based on different criteria such as
                age, gender, and location. Our ultimate aim is to make the dashboard more
                efficient for agents, leading to increased engagement and productivity.
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
        title: 'Enhancing agent dashboard with real estate property analysis and optimised design',
        content: <ViewsLikesContent />,
    },
    {
        title: 'Maximising agent dashboard engagement',
        content: <CategoryContent />,
    },
];

export const AnalysisContent = () => (
    <PortfolioSubSection subsections={AnalysisContentData} />
);

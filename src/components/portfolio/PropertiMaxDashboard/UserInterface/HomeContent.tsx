import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardHomeImg1,
    PropertiMaxDashboardHomeImg2,
    PropertiMaxDashboardHomeImg3,
    PropertiMaxDashboardHomeImg4,
} from '@/images/PropertiMaxDashboard';

const HomeJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We understood that the dashboard&apos;s main page serves as the
                &lsquo;landing page&rsquo; for users. Therefore, we aimed to create a page
                that fulfilled our primary and secondary objectives. Our primary objective
                was to develop a user-friendly platform for real estate listing
                management, while our secondary objective was to incorporate features to
                aid agents in their work.
            </IconListItem>
            <IconListItem>
                To achieve both objectives, we split the dashboard page into two principal
                sections. The left side features real estate listing management-related
                information such as the Listing Board and Views. The right side comprises
                scheduling and upcoming event-related information like Appointments and
                Upcoming Events, assisting agents in their work.
            </IconListItem>
            <IconListItem>
                By adopting this approach, we enabled users to quickly evaluate their
                current situation and move forward without the need to navigate different
                pages. This made the dashboard more comprehensible and user-friendly.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg1} />
        </PortfolioSectionContainer>
    );
};

const GuidingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We placed information on the &ldquo;number of real estate properties
                currently owned by the user&rdquo; and &ldquo;customer ratings&rdquo; at
                the top of the dashboard main page. This placement provides a
                comprehensive overview of the current situation of the agent, our main
                target audience. Moreover, it serves as a helpful guide to agents to point
                them towards what they may need to do.
            </IconListItem>
            <IconListItem>
                Agents can quickly assess their current situation and plan their next
                steps accordingly using this section. For instance, if an agent notices a
                decrease in the number of properties they currently own, they can plan
                their next actions such as adding new properties or adjusting prices of
                existing ones.
            </IconListItem>
            <IconListItem>
                Moreover, the customer ratings information provided allows agents to
                evaluate their service quality and identify areas for improvement. This
                information helps them plan their next actions accordingly and improve
                their overall performance.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg2} />
        </PortfolioSectionContainer>
    );
};

const ScheduleManagementContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To assist with agent schedule management, we have added Appointment and
                Upcoming Event sections to the main dashboard page.
            </IconListItem>
            <IconListItem>
                The Appointment section displays a list of scheduled tasks for the day,
                sorted by time. The Upcoming Event section shows the next closest event,
                excluding the current day. By placing the Appointment and Upcoming Event
                sections on the main dashboard page, agents can easily check their daily
                and upcoming schedules without the need to search for them individually.
                This design encourages agents to log in to the dashboard more frequently
                and improve their productivity.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg3} />
        </PortfolioSectionContainer>
    );
};

const ViewCountsContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                We have added a Views section to the agent&apos;s dashboard to display the
                number of views on their real estate listings. This section allows agents
                to obtain approximate information on which properties are generating more
                interest from buyers and which ones are not. Based on this data, agents
                can plan their next actions, such as adjusting the listing price or
                promoting the property differently.
            </IconListItem>
            <IconListItem>
                By providing this information through the Views section, we empower agents
                to go beyond updating their property listings. They can leverage this data
                to improve their marketing strategies and sell more properties, ultimately
                increasing their sales and revenue.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg4} />
        </PortfolioSectionContainer>
    );
};

export const HomeContentData = [
    {
        title: 'Home journey',
        content: <HomeJourneyContent />,
    },
    {
        title: 'Empowering Agents by Providing Comprehensive Overview',
        content: <GuidingContent />,
    },
    {
        title: 'Streamlining Agent Schedule Management with the Dashboard',
        content: <ScheduleManagementContent />,
    },
    {
        title: "Boosting Property Listings' Visibility and Sales with Views Section",
        content: <ViewCountsContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

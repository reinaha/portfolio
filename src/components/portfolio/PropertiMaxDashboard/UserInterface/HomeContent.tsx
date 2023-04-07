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
                As the main page that users first see when entering the dashboard, we
                believed it was important to design a page that would meet both our main
                goal and sub-goals. Our main goal was to create a convenient real estate
                listing management system, while our sub-goal was to provide features that
                would assist agents in their work.
            </IconListItem>
            <IconListItem>
                To achieve both goals, we divided the dashboard page into two main
                sections. On the left, we placed information related to real estate
                listing management (Listing Board and Views), while on the right, we
                placed information related to scheduling and upcoming events to assist
                agents in their work (Appointments and Upcoming Events).
            </IconListItem>
            <IconListItem>
                By doing this, we made it possible for users to quickly assess their
                situation and move on to the next step without having to navigate to
                different pages. This made it easier for users to understand and use the
                dashboard.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg1} />
        </PortfolioSectionContainer>
    );
};

const GuidingContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The main reason for placing the information on the &ldquo;number of real
                estate properties currently owned by the user&rdquo; and &ldquo;customer
                ratings&rdquo; at the top of the dashboard main page is that it is the
                most prominent location, and it can show the most comprehensive view of
                the current situation of the main target, which is the agent.
                Additionally, it can provide helpful first-step information to the agent
                before moving on to the next action.
            </IconListItem>
            <IconListItem>
                Through this section, users can quickly assess their current situation and
                be prompted to plan their next steps. For example, if an agent comes to
                the dashboard and sees that the number of properties they currently own
                has decreased from the previous month, they can plan their next steps,
                such as adding new properties or adjusting the prices of existing
                properties.
            </IconListItem>
            <IconListItem>
                Furthermore, by providing customer ratings information, the agent can
                confirm how satisfactory their service has been so far and find areas to
                improve to plan their next action accordingly.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardHomeImg2} />
        </PortfolioSectionContainer>
    );
};

const ScheduleManagementContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To assist with agent schedule management, we added Appointment and
                Upcoming Event sections to the main dashboard page.
            </IconListItem>
            <IconListItem>
                The Appointment section displays a list of scheduled tasks for the day,
                sorted by time. The Upcoming Event section shows the next closest event,
                excluding the current day.
            </IconListItem>
            <IconListItem>
                By placing the Appointment and Upcoming Event sections on the main
                dashboard page, agents can easily check their daily and upcoming schedules
                without the need to search for them individually. This design encourages
                agents to log in to the dashboard more frequently.
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
                By providing this information through the Views section, we encourage
                agents to utilize their dashboard beyond just updating their property
                listings. We aim to prompt agents to leverage this information to better
                promote and sell their properties, ultimately driving more traffic to
                their listings and increasing sales.
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
        title: "Guiding Next Actions through Providing Agent's General Current Situation",
        content: <GuidingContent />,
    },
    {
        title: 'Schedule Management Feature for Encouraging Agent Dashboard Access',
        content: <ScheduleManagementContent />,
    },
    {
        title: 'View counts information on real estate listings',
        content: <ViewCountsContent />,
    },
];

export const HomeContent = () => <PortfolioSubSection subsections={HomeContentData} />;

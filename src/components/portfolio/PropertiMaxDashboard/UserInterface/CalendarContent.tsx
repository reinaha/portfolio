import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components/portfolio';
import {
    PropertiMaxDashboardCalendarImg1,
    PropertiMaxDashboardCalendarImg2,
} from '@/images/PropertiMaxDashboard';

const JourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                As a sub-goal of the Dashboard, this page is designed to help agents
                manage their schedules efficiently. The Calendar page allows users to view
                their added events at a glance by year, week, month, or day, and provides
                the ability to add, modify, or delete events. With this feature, agents
                can better manage their time and work more productively.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardCalendarImg1} />
        </PortfolioSectionContainer>
    );
};

const DesignContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                The main focus of designing the calendar was to enable agents to use this
                feature practically. To achieve this, we included essential information
                such as date, start and end time, title, location, and attendees when
                adding an event to the calendar. Additionally, agents can set up
                notifications for each event to manage their time more efficiently and
                avoid missing important appointments.
            </IconListItem>
            <IconListItem>
                Furthermore, at the bottom of each event, we added information related to
                real estate listings associated with the event, allowing users to
                intuitively understand relevant information about the listings. Our aim is
                to enhance agent dashboard usage and extend login time by providing a more
                efficient and practical calendar feature.
            </IconListItem>
            <PortfolioImage imageSrc={PropertiMaxDashboardCalendarImg2} />
        </PortfolioSectionContainer>
    );
};

export const CalendarContentData = [
    {
        title: 'Calendar journey',
        content: <JourneyContent />,
    },
    {
        title: 'Calendar function design to enhance agent dashboard usage and extend login time',
        content: <DesignContent />,
    },
];

export const CalendarContent = () => (
    <PortfolioSubSection subsections={CalendarContentData} />
);

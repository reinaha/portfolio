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
                As a sub goal of the Dashboard, this page is designed for agents to
                actively utilize the Dashboard by managing their schedules. The Calendar
                page allows users to view the events they have added at a glance by year,
                week, month, or day and provides the ability to add, modify, or delete
                events. Through this feature, agents can manage their schedules more
                efficiently.
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
                feature practically. To achieve this, we included basic information such
                as the date, start and end time, title, location, and attendees when
                adding an event to the calendar. In addition, agents can set up
                notifications for each event, helping them manage their time more
                efficiently and avoid missing important appointments.
            </IconListItem>
            <IconListItem>
                Furthermore, at the bottom of each event, we added information related to
                real estate listings associated with the event, allowing users to
                intuitively understand information about real estate listings relevant to
                the event.
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
        title: 'Calendar Function Design to Enhance Agent Dashboard Usage and Extend Login Time',
        content: <DesignContent />,
    },
];

export const CalendarContent = () => (
    <PortfolioSubSection subsections={CalendarContentData} />
);

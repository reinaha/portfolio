import { IconListItem } from '@/components';
import {
    PortfolioImage,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';
import { MessageJourney, MessageSupport } from '@/images';

const MessageJourneyContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To encourage customers to inquire through the app rather than phone calls,
                we adopted a conversational design that makes users feel like they are
                chatting in real-time.
            </IconListItem>
            <IconListItem>
                In order to prevent redundant questions, we placed the message history
                list at the beginning of the message page.
            </IconListItem>
            <PortfolioImage imageSrc={MessageJourney} />
        </PortfolioSectionContainer>
    );
};

const MessageSupportContent = () => {
    return (
        <PortfolioSectionContainer>
            <IconListItem>
                To respond to user inquiries more quickly from the company&apos;s
                perspective, it was important to categorize similar questions. To achieve
                this, we designed a dropdown menu for selecting the category of the
                inquiry when creating a new message.
            </IconListItem>
            <PortfolioImage imageSrc={MessageSupport} />
        </PortfolioSectionContainer>
    );
};

export const MessageContentData = [
    {
        title: 'Message journey',
        content: <MessageJourneyContent />,
    },
    {
        title: "Categorizing inquiries to improve company's response time to customers",
        content: <MessageSupportContent />,
    },
];

export const MessageContent = () => (
    <PortfolioSubSection subsections={MessageContentData} />
);

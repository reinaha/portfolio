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
                a conversational design that makes users feel like they are chatting in
                real-time was adopted.
            </IconListItem>
            <IconListItem>
                The message history list was placed at the beginning of the message page
                in order to reduce duplicate questions
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
                perspective, it was important to categorise similar questions. To achieve
                this, a dropdown menu was designed for selecting the category of the
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
        title: 'Categorising inquiries to improve time taken to respond',
        content: <MessageSupportContent />,
    },
];

export const MessageContent = () => (
    <PortfolioSubSection subsections={MessageContentData} />
);

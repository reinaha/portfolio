import { Typography } from '@mui/material';
import MessageJourney from '@resources/OsstemDentalEshop/MessageJourney.jpg';
import MessageSupport from '@resources/OsstemDentalEshop/MessageSupport.jpg';

import { PortfolioContainer, PortfolioImage, PortfolioSubSection } from '@/components';

const MessageJourneyContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To encourage customers to inquire through the app rather than phone calls,
                we adopted a conversational design that makes users feel like they are
                chatting in real-time.
            </Typography>
            <Typography>
                In order to prevent redundant questions, we placed the message history
                list at the beginning of the message page.
            </Typography>
            <PortfolioImage imageSrc={MessageJourney} />
        </PortfolioContainer>
    );
};

const MessageSupportContent = () => {
    return (
        <PortfolioContainer>
            <Typography>
                To respond to user inquiries more quickly from the company&apos;s
                perspective, it was important to categorize similar questions. To achieve
                this, we designed a dropdown menu for selecting the category of the
                inquiry when creating a new message.
            </Typography>
            <PortfolioImage imageSrc={MessageSupport} />
        </PortfolioContainer>
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

import { Box, Stack, Typography } from '@mui/material';
import MessageJourney from '@resources/OsstemDentalEshop/MessageJourney.jpg';
import MessageMain from '@resources/OsstemDentalEshop/MessageMain.jpg';
import MessageSupport from '@resources/OsstemDentalEshop/MessageSupport.jpg';

import { JourneyContainer, PortfolioContainer } from '@/components';

import { PortfolioFullWidthImage } from '../../PortfolioFullWidthImage';
import { PortfolioSection } from '../../PortfolioSection';

export const MessageContent = () => {
    return (
        <Stack spacing={4}>
            <PortfolioFullWidthImage image={MessageMain} marginBottom={1.5} />
            <PortfolioSection
                title="Message journey"
                content={<MessageJourneyContent />}
                headerVariant="h4"
            />
            <PortfolioSection
                title="Categorizing inquiries to improve company's response time to customers"
                content={<MessageSupportContent />}
                headerVariant="h4"
            />
        </Stack>
    );
};

const MessageJourneyContent = () => {
    return (
        <JourneyContainer image={MessageJourney}>
            <Typography>
                To encourage customers to inquire through the app rather than phone calls,
                we adopted a conversational design that makes users feel like they are
                chatting in real-time.
            </Typography>
            <Typography>
                In order to prevent redundant questions, we placed the message history
                list at the beginning of the message page.
            </Typography>
        </JourneyContainer>
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
            <Box component="img" alt="Cover" src={MessageSupport} />
        </PortfolioContainer>
    );
};

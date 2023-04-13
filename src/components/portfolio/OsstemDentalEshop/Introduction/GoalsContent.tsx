import { Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioSectionContainer,
} from '@/components';

export const GoalsContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <PortfolioChipSection title="Main Goal" color={goalColor}>
                <Typography>
                    Allow dentists to purchase products easily through the app, rather
                    than having to contact sales representatives to buy products.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    The app can help in establishing a stable source of income that would
                    not be affected as much by operational or personnel changes.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    The app can help with the common complaint of not having a person
                    available on the phone to take an order.
                </IconListItem>
            </PortfolioChipSection>
            <PortfolioChipSection title="Sub Goal" color={subGoalColor}>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    Provide an alternative method for customer assistance through the chat
                    feature for inquiries instead of having to make a phone call.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    Encouraging customers to contact the company through chat on the app
                    instead of making phone inquiries can prevent work paralysis caused by
                    phone calls, and leaving requests in written form can make it easier
                    to respond accurately to requests and unexpected complaints in the
                    future.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    Provide clear visibility of the product delivery status and order
                    details through the app.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    The most frequently asked question by existing clients was the
                    estimated arrival time of their product. The app will address this by
                    providing comprehensive information about the delivery status,
                    including estimated delivery date.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    Also there was a common complaint regarding wrong orders placed by
                    customers due to their own mistakes and demanding the company to
                    resolve the issue. By being able to view the order on the screen, it
                    will make it easier for the clients to review and confirm orders and
                    reduce the frequency of such complaints.
                </IconListItem>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

import { Chip, Typography } from '@mui/material';

import { PortfolioSectionContainer, PortfolioSectionContainerProps } from '@/components';
import { IconListItem } from '@/components/listText/IconListItem';

export const GoalsContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer spacing={12.5}>
            <GoalSection title="Main Goal" color={goalColor}>
                <Typography>
                    The primary objective of the application for the company was to allow
                    dentists to easily purchase our products through the app, rather than
                    having to rely on contacting our sales personnel to buy products.
                </Typography>
                <IconListItem iconType="arrow" iconColor={goalColor}>
                    By achieving this, the company aimed to establish a stable and
                    reliable source of income that would not be affected by environmental
                    changes.
                </IconListItem>
            </GoalSection>
            <GoalSection title="Sub Goal" color={subGoalColor}>
                <IconListItem iconType="number" number={1} iconColor={subGoalColor}>
                    Encourage customers to utilise the chat feature on the app for
                    inquiries instead of contacting the company via phone.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    Encouraging customers to contact the company through chat on the app
                    instead of making unnecessary phone inquiries can prevent work
                    paralysis caused by phone calls, and leaving requests in written form
                    can make it easier to respond to accurate requests and unexpected
                    complaints in the future.
                </IconListItem>
                <IconListItem iconType="number" number={2} iconColor={subGoalColor}>
                    Provide customers with clear visibility of the product delivery
                    process and order details through our shopping app.
                </IconListItem>
                <IconListItem iconType="arrow" iconColor={subGoalColor}>
                    The most frequently asked question by existing customers was about the
                    estimated arrival time of their product, while the most common
                    complaint was regarding wrong orders placed by customers due to their
                    own mistakes and then demanding the company to resolve the issue.
                </IconListItem>
                <IconListItem iconType="noIcon">
                    In order to address these issues, our objective is to enhance the
                    existing system by offering comprehensive information about the
                    product delivery process, including estimated delivery time, through
                    our shopping app. Furthermore, we strive to promote the practice of
                    reviewing and confirming orders before making payments to reduce the
                    frequency of incorrect orders.
                </IconListItem>
            </GoalSection>
        </PortfolioSectionContainer>
    );
};

interface GoalSectionProps extends PortfolioSectionContainerProps {
    title: string;
    color: {
        primary: string;
        secondary: string;
    };
}

const GoalSection = ({
    title,
    color: { primary, secondary },
    children,
}: GoalSectionProps) => {
    return (
        <PortfolioSectionContainer spacing={7.5}>
            <Chip
                label={title}
                sx={{
                    bgcolor: secondary,
                    color: primary,
                    fontSize: '14px',
                    fontWeight: 500,
                    padding: '8px 4px',
                    borderRadius: '32px',
                    width: '100px',
                }}
            />
            {children}
        </PortfolioSectionContainer>
    );
};

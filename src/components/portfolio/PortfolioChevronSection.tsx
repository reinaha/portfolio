import { Typography } from '@mui/material';

import { IconListItem } from '../listText';
import { PortfolioContainer, PortfolioContainerProps } from './PortfolioContainer';

interface PortfolioChevronSectionProps extends PortfolioContainerProps {
    title: string;
    color?: {
        primary: string;
        secondary: string;
    };
}
const iconColor = { primary: '#1C1B1F', secondary: '#1C1B1F' };

export const PortfolioChevronSection = ({
    title,
    color = iconColor,
    children,
}: PortfolioChevronSectionProps) => {
    return (
        <PortfolioContainer spacing={7.5}>
            <IconListItem iconType="chevron" iconColor={color}>
                <Typography variant="h5">{title}</Typography>
            </IconListItem>
            {children}
        </PortfolioContainer>
    );
};

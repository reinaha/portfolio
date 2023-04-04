import { Typography } from '@mui/material';

import { IconListItem } from '../listText';
import { PortfolioContainer } from './PortfolioContainer';
import { PortfolioSubSection } from './PortfolioSubSection';

interface PortfolioChevronSectionProps extends PortfolioSubSection {
    title: string;
    iconColor?: {
        primary: string;
        secondary: string;
    };
}
const defaultIconColor = { primary: '#1C1B1F', secondary: '#1C1B1F' };

export const PortfolioChevronSection = ({
    title,
    iconColor = defaultIconColor,
    children,
}: PortfolioChevronSectionProps) => {
    return (
        <PortfolioContainer spacing={7.5}>
            <IconListItem iconType="chevron" iconColor={iconColor}>
                <Typography variant="h5">{title}</Typography>
            </IconListItem>
            {children}
        </PortfolioContainer>
    );
};

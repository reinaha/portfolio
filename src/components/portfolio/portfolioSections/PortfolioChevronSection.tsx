import { Typography, useTheme } from '@mui/material';

import {
    IconListItem,
    PortfolioSectionContainer,
    PortfolioSubSection,
} from '@/components';

interface PortfolioChevronSectionProps extends PortfolioSubSection {
    title: string;
    iconColor?: {
        primary: string;
        secondary: string;
    };
}

export const PortfolioChevronSection = ({
    title,
    iconColor,
    children,
}: PortfolioChevronSectionProps) => {
    const theme = useTheme();
    const resolvedIconColor = iconColor ?? {
        primary: theme.palette.primary.main,
        secondary: theme.palette.primary.main,
    };

    return (
        <PortfolioSectionContainer spacing={7.5}>
            <IconListItem iconType="chevron" iconColor={resolvedIconColor}>
                <Typography variant="h5">{title}</Typography>
            </IconListItem>
            {children}
        </PortfolioSectionContainer>
    );
};

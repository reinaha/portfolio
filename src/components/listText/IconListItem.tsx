import { ListItem, ListItemIcon, ListItemProps, ListItemText } from '@mui/material';

import { ArrowIcon, ChevronRightIcon, NumberIcon } from '@/icons';

interface IconListItemProps extends ListItemProps {
    iconType?: ListIconType;
    number?: number;
    iconColor?: {
        primary?: string;
        secondary?: string;
    };
    text?: string;
}

type ListIconType = 'arrow' | 'chevron' | 'number' | 'noIcon' | undefined;

export const IconListItem = ({
    iconType,
    number = 0,
    iconColor = { primary: '#FFFFFF', secondary: '#000000' },
    children,
    ...props
}: IconListItemProps) => {
    const ListIcon = (iconType: ListIconType) => {
        switch (iconType) {
            case 'arrow':
                return (
                    <ListItemIcon sx={{ paddingLeft: 2.5, minWidth: '46px' }}>
                        <ArrowIcon color={iconColor.primary || '#FFFFFF'} />
                    </ListItemIcon>
                );
            case 'chevron':
                return (
                    <ListItemIcon
                        sx={{ marginTop: 0.75, paddingLeft: 2, minWidth: '46px' }}
                    >
                        <ChevronRightIcon color={iconColor.primary || '#FFFFFF'} />
                    </ListItemIcon>
                );
            case 'number':
                return (
                    <ListItemIcon sx={{ marginTop: 0, minWidth: '46px' }}>
                        <NumberIcon iconColor={iconColor} number={number} />
                    </ListItemIcon>
                );
            case 'noIcon':
                return <ListItemIcon sx={{ minWidth: '46px' }}></ListItemIcon>;
            default:
                return null;
        }
    };

    return (
        <ListItem disableGutters alignItems="flex-start" disablePadding {...props}>
            {ListIcon(iconType)}
            <ListItemText sx={{ margin: 0 }}>{children}</ListItemText>
        </ListItem>
    );
};

import NorthEastIcon from '@mui/icons-material/NorthEast';
import { IconButton, useTheme } from '@mui/material';

export type CircularArrowButtonVariant = 'solidDark' | 'solidLight' | 'outlined';

type CircularArrowButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    variant?: CircularArrowButtonVariant;
    size?: number;
    disabled?: boolean;
    // Forces the hovered visual state from outside (e.g. when a parent card is
    // hovered, not just this button itself). Native `:hover` still applies too.
    hovered?: boolean;
};

type ButtonStyle = { bgcolor: string; color: string; border?: string };

export const CircularArrowButton = ({
    onClick,
    variant = 'solidDark',
    size = 60,
    disabled = false,
    hovered = false,
}: CircularArrowButtonProps) => {
    const theme = useTheme();
    const isDarkMode = theme.palette.mode === 'dark';

    // solidDark/solidLight are fixed, absolute looks — they're used over image
    // content (Visual Works, image overlays) so they intentionally don't
    // change with the page theme. `outlined` sits directly on the page
    // background (Featured Work, Beyond the Portfolio), so it must adapt.
    const variantStyles: Record<CircularArrowButtonVariant, ButtonStyle> = {
        solidDark: { bgcolor: '#292D32', color: 'white' },
        solidLight: { bgcolor: 'white', color: '#292D32' },
        outlined: {
            bgcolor: 'transparent',
            color: theme.palette.primary.main,
            border: `1px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.3)' : '#C4C4C4'}`,
        },
    };

    const hoverStyles: Record<CircularArrowButtonVariant, ButtonStyle> = {
        solidDark: { bgcolor: '#FFFFFF', color: '#000000' },
        solidLight: { bgcolor: '#292D32', color: '#FFFFFF' },
        outlined: {
            bgcolor: theme.palette.primary.main,
            color: theme.palette.background.default,
            border: `1px solid ${theme.palette.primary.main}`,
        },
    };

    const styles = hovered ? hoverStyles[variant] : variantStyles[variant];
    const hover = hoverStyles[variant];

    return (
        <IconButton
            className="GoToPortfolio"
            disabled={disabled}
            sx={{
                height: size,
                width: size,
                color: styles.color,
                backgroundColor: styles.bgcolor,
                border: styles.border,
                '&:hover': {
                    backgroundColor: hover.bgcolor,
                    color: hover.color,
                    border: hover.border,
                },
                '&.Mui-disabled': {
                    color: styles.color,
                    opacity: 0.4,
                },
            }}
            onClick={onClick}
        >
            <NorthEastIcon fontSize={size <= 50 ? 'small' : 'medium'} color="inherit" />
        </IconButton>
    );
};

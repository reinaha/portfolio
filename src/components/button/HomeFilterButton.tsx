import { ToggleButton, ToggleButtonProps } from '@mui/material';

interface HomeFilterButtonProps extends ToggleButtonProps {
    buttonText: string;
}

export const HomeFilterButton = ({ buttonText, ...props }: HomeFilterButtonProps) => {
    return (
        <ToggleButton
            {...props}
            color="standard"
            sx={{
                bgcolor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 25,
                paddingLeft: 6,
                paddingRight: 6,
                paddingTop: 2,
                paddingBottom: 2,
                textTransform: 'capitalize',
                border: 'none',
                '&.Mui-selected, &.Mui-selected:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    color: 'black',
                },
                '&:hover': {
                    bgcolor: 'rgba(255, 255, 255, 0.8)',
                    color: 'black',
                },
            }}
        >
            {buttonText}
        </ToggleButton>
    );
};

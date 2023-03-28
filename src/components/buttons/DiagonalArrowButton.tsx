import NorthEastIcon from '@mui/icons-material/NorthEast';
import { IconButton } from '@mui/material';

type DiagonalArrowButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const DiagonalArrowButton = ({ onClick }: DiagonalArrowButtonProps) => {
    return (
        <IconButton
            sx={{
                height: '2em',
                padding: '0.5em',
                color: 'white',
                backgroundColor: '#292D32',
                '&:hover': {
                    backgroundColor: '#FFFFFF',
                    color: 'black',
                },
            }}
            onClick={onClick}
        >
            <NorthEastIcon />
        </IconButton>
    );
};

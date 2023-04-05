import NorthEastIcon from '@mui/icons-material/NorthEast';
import { IconButton } from '@mui/material';

type DiagonalArrowButtonProps = {
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const DiagonalArrowButton = ({ onClick }: DiagonalArrowButtonProps) => {
    const size = 70;
    return (
        <IconButton
            className="GoToPortfolio"
            sx={{
                height: size,
                width: size,
                color: 'white',
                backgroundColor: '#292D32',
            }}
            onClick={onClick}
        >
            <NorthEastIcon />
        </IconButton>
    );
};

// --- Material Ui Imports --- //
import { Card, CardActionArea, CardActions, CardContent, CardMedia } from '@mui/material';
import { styled } from '@mui/system';

export const FiCard = styled(Card)({
    position: 'relative',
    borderRadius: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: '35px 35px 35px 35px',
    aspectRatio: '10/11',
});

export const FiCardActionArea = styled(CardActionArea)({
    position: 'relative',
});

export const FiCardActions = styled(CardActions)({
    position: 'relative',
});

export const FiCardContent = styled(CardContent)({
    position: 'relative',
    backgroundColor: 'transparent',
});

export const FiCardMedia = styled(CardMedia)({
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: '100%',
});

// --- Exports --- //
export default {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia,
};

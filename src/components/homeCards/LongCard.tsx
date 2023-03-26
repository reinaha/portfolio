import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

type LongCardProps = {
    title: string;
};

export const LongCard = ({ title }: LongCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                background: '#181A1B',
                borderRadius: '20px',
                height: '100%',
                padding: '35px 32px 35px 35px',
                minHeight: '14em',
            }}
        >
            <CardContent sx={{ padding: '0px' }}>
                <Box sx={{ display: 'inline-flex', width: '100%' }}>
                    <Typography
                        fontSize="30px"
                        fontWeight="600"
                        sx={{ color: '#AFAFAF', flexGrow: 1 }}
                    >
                        {title}
                    </Typography>
                    <IconButton
                        sx={{
                            height: '2em',
                            padding: '0.5em',
                            color: 'white',
                            backgroundColor: '#292D32',
                        }}
                    >
                        <NorthEastIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
};

import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Box, Card, CardContent, IconButton, Typography } from '@mui/material';

type SmallCardProps = {
    title: string;
};

export const SmallCard = ({ title }: SmallCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{
                background: '#181A1B',
                borderRadius: '20px',
                height: '100%',
                padding: '35px 32px 35px 35px',
            }}
        >
            <CardContent
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    padding: '0px',
                    '&:last-child': {
                        paddingBottom: 0,
                    },
                }}
            >
                <Box
                    sx={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                        flexGrow: 1,
                    }}
                >
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
                <Box>
                    <Typography
                        fontSize="30px"
                        fontWeight="600"
                        sx={{ color: '#AFAFAF' }}
                    >
                        {title}
                    </Typography>
                </Box>
            </CardContent>
        </Card>
    );
};

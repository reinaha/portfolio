import { Box, Card, CardContent, Typography } from '@mui/material';

import { DiagonalArrowButton } from '../buttons/DiagonalArrowButton';

type SmallCardProps = {
    title: string;
    buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const SmallCard = ({ title, buttonOnClick }: SmallCardProps) => {
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
                    <DiagonalArrowButton onClick={buttonOnClick} />
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

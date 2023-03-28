import { Box, Card, CardContent, Typography } from '@mui/material';

import { DiagonalArrowButton } from '../buttons/DiagonalArrowButton';

type LongCardProps = {
    title: string;
    buttonOnClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const LongCard = ({ title, buttonOnClick }: LongCardProps) => {
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
                    <DiagonalArrowButton onClick={buttonOnClick} />
                </Box>
            </CardContent>
        </Card>
    );
};

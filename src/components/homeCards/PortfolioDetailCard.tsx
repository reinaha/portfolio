import { Card, CardContent, Icon, Typography } from '@mui/material';

type PortfolioDetailCardProps = {
    title: string;
    description: string;
    icon: string;
};

export const PortfolioDetailCard = ({
    title,
    description,
    icon,
}: PortfolioDetailCardProps) => {
    return (
        <Card>
            <CardContent>
                <Icon
                    sx={{
                        textAlign: 'center',
                        height: '1.4em',
                        width: 'auto',
                        fontSize: '28px',
                        marginBottom: 0.1,
                    }}
                >
                    <img
                        src={icon}
                        style={{
                            height: '1.4em',
                        }}
                        alt="icon"
                    />
                </Icon>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="body1" sx={{ marginTop: '0.6em' }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

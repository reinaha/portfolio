import { Card, CardContent, Icon, Typography } from '@mui/material';
import { ReactNode } from 'react';

type PortfolioDetailCardProps = {
    title: string;
    content: ReactNode;
    icon?: string;
};

export const PortfolioDetailCard = ({
    title,
    content,
    icon,
}: PortfolioDetailCardProps) => {
    return (
        <Card
            elevation={0}
            sx={{ height: '100%', borderRadius: '20px', border: '1px solid #DADADA' }}
        >
            <CardContent
                sx={{
                    padding: '36px',
                    '&:last-child': {
                        paddingBottom: '68px',
                    },
                }}
            >
                {icon ? (
                    <Icon
                        sx={{
                            textAlign: 'center',
                            height: '1.4em',
                            width: 'auto',
                            fontSize: '28px',
                            marginBottom: 1,
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
                ) : null}
                <Typography variant="h5" marginBottom={1}>
                    {title}
                </Typography>
                {content}
            </CardContent>
        </Card>
    );
};

import { Box, Icon, Typography } from '@mui/material';

type PortfolioMetaInfoProps = {
    icon: string;
    label: string;
};

export const PortfolioMetaInfo = ({ icon, label }: PortfolioMetaInfoProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                marginRight: 2,
                alignItems: 'center',
                width: 'auto',
            }}
        >
            <Icon
                sx={{
                    textAlign: 'center',
                    height: '1em',
                    width: 'auto',
                    fontSize: '28px',
                }}
            >
                <img
                    src={icon}
                    style={{
                        height: '1em',
                    }}
                    alt="icon"
                />
            </Icon>
            <Typography
                variant="body1"
                sx={{ paddingTop: '0.4em', paddingLeft: '0.5em' }}
            >
                {label}
            </Typography>
        </Box>
    );
};

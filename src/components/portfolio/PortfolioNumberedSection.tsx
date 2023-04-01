import { Box, Chip, Typography } from '@mui/material';
import { ReactNode } from 'react';

export type PortfolioNumberedSectionProps = {
    title?: string;
    number?: number;
    content?: ReactNode;
    numberColor: string;
    backgroundColor: string;
};

export const PortfolioNumberedSection = ({
    title,
    number,
    content,
    numberColor,
    backgroundColor,
}: PortfolioNumberedSectionProps) => {
    return (
        <Box paddingBottom={2}>
            <Box paddingBottom={1.5} sx={{ display: 'flex' }}>
                <Chip
                    label={number}
                    sx={{
                        bgcolor: `${backgroundColor}`,
                        color: `${numberColor}`,
                        fontSize: '26px',
                        fontWeight: 500,
                        marginRight: 0.8,
                        height: '2em',
                        width: '2em',
                        borderRadius: '50%',
                    }}
                />
                <Typography variant="h2" paddingTop={0.3} paddingBottom={1.5}>
                    {title}
                </Typography>
            </Box>

            {content}
        </Box>
    );
};

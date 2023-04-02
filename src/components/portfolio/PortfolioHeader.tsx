import { Box, Container, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import CalendarIcon from '../../icons/CalendarIcon.svg';
import CommercialTypeIcon from '../../icons/CommercialTypeIcon.svg';
import MobileProjectIcon from '../../icons/MobileProjectIcon.svg';
import { PortfolioMetaInfo } from './ProjectMetaInfo';

type PortfolioMetaData = {
    projectType: string;
    applicationType: string;
    startDate: Date;
    endDate: Date;
};

const portfolioDateFormat = (date: Date): string => {
    return dayjs(date).format('MMM YYYY');
};

export type PortfolioHeaderProps = {
    title: string;
    subTitle?: string;
    portfolioMetaData: PortfolioMetaData;
};

export const PortfolioHeader = ({
    title,
    subTitle,
    portfolioMetaData: { projectType, applicationType, startDate, endDate },
}: PortfolioHeaderProps) => {
    return (
        <Box>
            <Container sx={{ paddingBottom: 1 }}>
                <Stack
                    direction={{ md: 'row', sm: 'column' }}
                    sx={{
                        marginTop: 0.5,
                        marginBottom: 1,
                    }}
                >
                    <PortfolioMetaInfo icon={CommercialTypeIcon} label={projectType} />
                    <PortfolioMetaInfo icon={MobileProjectIcon} label={applicationType} />
                    <PortfolioMetaInfo
                        icon={CalendarIcon}
                        label={`${portfolioDateFormat(startDate)} - ${portfolioDateFormat(
                            endDate
                        )}`}
                    />
                </Stack>
                <Typography variant="h1">{title}</Typography>
                {subTitle ? (
                    <Typography variant="subtitle1" sx={{ marginTop: '20px' }}>
                        {subTitle}
                    </Typography>
                ) : null}
            </Container>
        </Box>
    );
};

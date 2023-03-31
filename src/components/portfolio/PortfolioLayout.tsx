import {
    Box,
    Card,
    CardContent,
    Divider,
    Grid,
    Paper,
    Stack,
    Typography,
} from '@mui/material';
import dayjs from 'dayjs';

import CalendarIcon from '../../icons/CalendarIcon.svg';
import CommercialTypeIcon from '../../icons/CommercialTypeIcon.svg';
import MobileProjectIcon from '../../icons/MobileProjectIcon.svg';
import { PortfolioDetailCard } from '../homeCards/PortfolioDetailCard';
import { PortfolioMetaInfo } from './ProjectMetaInfo';

type PortfolioMetaData = {
    projectType: string;
    applicationType: string;
    startDate: Date;
    endDate: Date;
};

type PortfolioLayoutProps = {
    coverImg: string;
    title: string;
    subTitle?: string;
    portfolioMetaData: PortfolioMetaData;
    children: React.ReactChildren | React.ReactNode;
};

const portfolioDateFormat = (date: Date): string => {
    return dayjs(date).format('MMM YYYY');
};

type PortfolioDetailCardInfo = {
    title: string;
    description: string;
    icon: string;
};

const portfolioDetailCardInfos = [
    {
        title: 'Target Audience',
        description: 'Dentists in their late twenties to early forties',
        icon: CommercialTypeIcon,
    },
    {
        title: 'Target Audience',
        description: 'Dentists in their late twenties to early forties',
        icon: CommercialTypeIcon,
    },
    {
        title: 'Target Audience',
        description: 'Dentists in their late twenties to early forties',
        icon: CommercialTypeIcon,
    },
    {
        title: 'Target Audience',
        description: 'Dentists in their late twenties to early forties',
        icon: CommercialTypeIcon,
    },
];

export const PortfolioLayout = ({
    coverImg,
    title,
    subTitle,
    portfolioMetaData: { projectType, applicationType, startDate, endDate },
    children,
}: PortfolioLayoutProps) => {
    return (
        <Stack spacing={1}>
            <img alt="Cover" src={coverImg} />
            <Box>
                <Box
                    sx={{
                        display: 'flex',
                        marginTop: 0.5,
                        marginBottom: 1,
                        alignItems: 'flex-start',
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
                </Box>
                <Typography variant="h1">{title}</Typography>
                {subTitle ? (
                    <Typography variant="subtitle1" sx={{ marginTop: '20px' }}>
                        {subTitle}
                    </Typography>
                ) : null}
            </Box>
            <Divider variant="middle" />
            <Grid container spacing={0.5}>
                {portfolioDetailCardInfos.map(
                    (pd: PortfolioDetailCardInfo, index: number) => (
                        <Grid key={index} item xs={6} md={3} lg={3}>
                            <PortfolioDetailCard
                                title={pd.title}
                                description={pd.description}
                                icon={pd.icon}
                            />
                        </Grid>
                    )
                )}
            </Grid>
            {children}
        </Stack>
    );
};

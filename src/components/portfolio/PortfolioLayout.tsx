import { Box, Divider, Grid, Stack, Typography } from '@mui/material';
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
    portfolioDetailCardInfos: PortfolioDetailCardInfo[];
    children: React.ReactChildren | React.ReactNode;
};

const portfolioDateFormat = (date: Date): string => {
    return dayjs(date).format('MMM YYYY');
};

type PortfolioDetailCardInfo = {
    title: string;
    content?: React.ReactNode;
    icon: string;
};

export const PortfolioLayout = ({
    coverImg,
    title,
    subTitle,
    portfolioMetaData: { projectType, applicationType, startDate, endDate },
    portfolioDetailCardInfos = [],
    children,
}: PortfolioLayoutProps) => {
    return (
        <Stack spacing={1}>
            <Box
                component="img"
                alt="Cover"
                src={coverImg}
                sx={{ marginLeft: '-1em', marginRight: '-1em' }}
            />
            <Box paddingBottom={1}>
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
            </Box>
            <Divider variant="middle" />
            <Grid
                container
                alignItems="stretch"
                justifyContent="center"
                direction="row"
                spacing={0.5}
                paddingRight={1}
                paddingTop={1}
                paddingBottom={2}
            >
                {portfolioDetailCardInfos.map(
                    (pd: PortfolioDetailCardInfo, index: number) => (
                        <Grid
                            key={index}
                            item
                            xs={12}
                            sm={6}
                            md={12 / portfolioDetailCardInfos.length}
                            lg={12 / portfolioDetailCardInfos.length}
                        >
                            <PortfolioDetailCard
                                title={pd.title}
                                content={pd.content}
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

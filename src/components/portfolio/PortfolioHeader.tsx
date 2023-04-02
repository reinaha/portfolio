import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import dayjs from 'dayjs';

import CalendarIcon from '../../icons/CalendarIcon.svg';
import CommercialTypeIcon from '../../icons/CommercialTypeIcon.svg';
import MobileProjectIcon from '../../icons/MobileProjectIcon.svg';
import { PortfolioDetailCardInfo, PortfolioDetailCards } from './PortfolioDetailCards';
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
    portfolioDetailCardInfos: PortfolioDetailCardInfo[];
};

export const PortfolioHeader = ({
    title,
    subTitle,
    portfolioMetaData: { projectType, applicationType, startDate, endDate },
    portfolioDetailCardInfos,
}: PortfolioHeaderProps) => {
    return (
        <Box>
            <Container sx={{ marginTop: 1, paddingBottom: 1 }}>
                <Stack spacing={1}>
                    <Stack direction={{ md: 'row', sm: 'column' }}>
                        <PortfolioMetaInfo
                            icon={CommercialTypeIcon}
                            label={projectType}
                        />
                        <PortfolioMetaInfo
                            icon={MobileProjectIcon}
                            label={applicationType}
                        />
                        <PortfolioMetaInfo
                            icon={CalendarIcon}
                            label={`${portfolioDateFormat(
                                startDate
                            )} - ${portfolioDateFormat(endDate)}`}
                        />
                    </Stack>
                    <Typography variant="h1">{title}</Typography>
                    {subTitle ? (
                        <Typography variant="subtitle1">{subTitle}</Typography>
                    ) : null}
                    <br />
                    <Divider variant="middle" />
                    <br />
                    {portfolioDetailCardInfos ? (
                        <PortfolioDetailCards
                            portfolioDetailCardInfos={portfolioDetailCardInfos}
                        />
                    ) : null}
                </Stack>
            </Container>
        </Box>
    );
};

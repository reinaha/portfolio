import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { PropertiMaxDashboardCardInfo } from '@/data';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Typography variant="h1">PropertiMax Agent Dashboard</Typography>
            <Typography variant="body2">
                The PropertiMax Agent Dashboard serves as the admin dashboard for the
                PropertiMax Real Estate Trading Website, developed by a team of two web
                developers. As the Lead UX/UI Designer, I was responsible for overseeing
                the app&apos;s overall design, including content planning and design.
                Additionally, I provided front-end development support using HTML, CSS,
                and jQuery.
            </Typography>
            <PortfolioDetailCards
                portfolioDetailCardInfos={PropertiMaxDashboardCardInfo}
            />
        </PortfolioSectionContainer>
    );
};

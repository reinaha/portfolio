import { Box, Grid, Stack, Typography } from '@mui/material';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { MouseScrollIcon } from '@/icons';

import PropertyMaxBg from '../../resources/PropertyMaxBg.png';
import PropertyMaxBgWeb from '../../resources/PropertyMaxBgWeb.png';
import { ContactCard, PortfolioCard } from '../components/homeCards';

export function Home() {
    const contactRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <Stack alignItems="center">
                <Typography paddingTop={7.5} paddingBottom={12.5} variant="subtitle1">
                    Hello, I&apos;m Sumin
                </Typography>
                <Typography variant="h1">I&apos;m a UI/UX Designer,</Typography>
                <Typography variant="h1">with 3 years of experience</Typography>
                <Typography paddingTop={5} variant="subtitle2">
                    I specialise in UI/UX Design, Responsive Web Design and Visual
                    Development
                </Typography>
            </Stack>
            <MouseScrollIcon />
            <Grid container alignItems="stretch" spacing={1}>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PortfolioCard
                        title="PropertiMax Application"
                        subTitle="Lead UX and UI design"
                        backgroundImage={PropertyMaxBg}
                        buttonOnClick={() => navigate('/portfolio/osstem-dental-e-shop')}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PortfolioCard
                        title="PropertiMax Website"
                        subTitle="Lead UX and UI design"
                        backgroundImage={PropertyMaxBgWeb}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PortfolioCard
                        title="PropertiMax Application"
                        subTitle="Lead UX and UI design"
                        backgroundImage={PropertyMaxBg}
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                    <PortfolioCard
                        title="PropertiMax Website"
                        subTitle="Lead UX and UI design"
                        backgroundImage={PropertyMaxBgWeb}
                    />
                </Grid>
                <Grid item md={12} lg={12}>
                    <ContactCard cardRef={contactRef} />
                </Grid>
            </Grid>
        </Stack>
    );
}

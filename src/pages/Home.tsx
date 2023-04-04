import { Box, Button, Grid, Stack, Toolbar, Typography } from '@mui/material';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { MouseScrollIcon } from '@/icons';

import PropertyMaxBg from '../../resources/PropertyMaxBg.png';
import PropertyMaxBgWeb from '../../resources/PropertyMaxBgWeb.png';
import { PortfolioCard } from '../components/homeCards';

const pages = [
    {
        key: 0,
        text: 'reina.smh@gmail.com',
        path: '/',
        bgColor: {
            dark: 'rgba(255, 255, 255, 0.1)',
            light: '#F1F1F1',
        },
    },
    {
        key: 1,
        text: 'LinkedIn',
        path: '/',
    },
    {
        key: 2,
        text: 'Behance',
        path: '/',
    },
];

export function Home() {
    const contactRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    return (
        <Stack paddingTop={30} spacing={40} alignItems="center">
            <Stack alignItems="center">
                <Typography paddingTop={7.5} paddingBottom={12.5} variant="subtitle1">
                    Hello, I&apos;m Sumin
                </Typography>
                <Typography textAlign="center" variant="h1">
                    I&apos;m a UI/UX Designer,
                </Typography>
                <Typography textAlign="center" variant="h1">
                    with 3 years of experience
                </Typography>
                <Typography textAlign="center" paddingTop={5} variant="subtitle2">
                    I specialise in UI/UX Design, Responsive Web Design and Visual
                    Development
                </Typography>
            </Stack>
            <MouseScrollIcon />
            <Box>
                <Grid container alignItems="stretch" columnSpacing={5.5} rowSpacing={11}>
                    <Grid item xs={12} sm={12} md={6} lg={6}>
                        <PortfolioCard
                            title="PropertiMax Application"
                            subTitle="Lead UX and UI design"
                            backgroundImage={PropertyMaxBg}
                            buttonOnClick={() =>
                                navigate('/portfolio/osstem-dental-e-shop')
                            }
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
                </Grid>
            </Box>
            <Stack
                direction={{ lg: 'row', md: 'row', sm: 'column', xs: 'column' }}
                width="100%"
                paddingBottom={30}
                rowGap={5}
            >
                <Box flexGrow={1}>
                    <Typography variant="h1">Let&apos;s Talk</Typography>
                </Box>
                <Stack direction="row" spacing={3.5}>
                    {pages.map((page) => {
                        const buttonColor = page.bgColor?.dark;

                        return (
                            <Button
                                key={page.key}
                                component={Link}
                                to={page.path}
                                color="primary"
                                disableElevation
                                sx={{
                                    bgcolor: buttonColor,
                                    borderRadius: 25,
                                    paddingLeft: 4.5,
                                    paddingRight: 4.5,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                }}
                            >
                                <Typography variant="button" textTransform="none">
                                    {page.text}
                                </Typography>
                            </Button>
                        );
                    })}
                </Stack>
            </Stack>
        </Stack>
    );
}

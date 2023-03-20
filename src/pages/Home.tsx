import NorthEastIcon from '@mui/icons-material/NorthEast';
import { Box, Card, CardContent, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';

import PropertyMaxBg from '../../resources/PropertyMaxBg.png';
import PropertyMaxBgWeb from '../../resources/PropertyMaxBgWeb.png';
import { ContactCard, IntroCard, PortfolioCard } from '../components/homeCards';

export function Home() {
    return (
        <Grid container alignItems="stretch" spacing={1}>
            <Grid item md={12} lg={6}>
                <IntroCard />
            </Grid>
            <Grid item container spacing={1} md={12} lg={6}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card
                        elevation={0}
                        sx={{
                            background: '#181A1B',
                            borderRadius: '20px',
                            height: '100%',
                            padding: '35px 32px 35px 35px',
                            minHeight: '14em',
                        }}
                    >
                        <CardContent sx={{ padding: '0px' }}>
                            <Box sx={{ display: 'inline-flex', width: '100%' }}>
                                <Typography
                                    fontSize="30px"
                                    fontWeight="600"
                                    sx={{ color: '#AFAFAF', flexGrow: 1 }}
                                >
                                    Download Portfolio
                                </Typography>
                                <IconButton
                                    sx={{
                                        height: '2em',
                                        padding: '0.5em',
                                        color: 'white',
                                        backgroundColor: '#292D32',
                                    }}
                                >
                                    <NorthEastIcon />
                                </IconButton>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container spacing={1} xs={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                background: '#181A1B',
                                borderRadius: '20px',
                                height: '100%',
                                padding: '35px 32px 35px 35px',
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    padding: '0px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'flex-end',
                                        flexGrow: 1,
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            height: '2em',
                                            padding: '0.5em',
                                            color: 'white',
                                            backgroundColor: '#292D32',
                                        }}
                                    >
                                        <NorthEastIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <Typography
                                        fontSize="30px"
                                        fontWeight="600"
                                        sx={{ color: '#AFAFAF' }}
                                    >
                                        Download CV
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                background: '#181A1B',
                                borderRadius: '20px',
                                height: '100%',
                                padding: '35px 32px 35px 35px',
                            }}
                        >
                            <CardContent
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    height: '100%',
                                    padding: '0px',
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        width: '100%',
                                        justifyContent: 'flex-end',
                                        flexGrow: 1,
                                    }}
                                >
                                    <IconButton
                                        sx={{
                                            height: '2em',
                                            padding: '0.5em',
                                            color: 'white',
                                            backgroundColor: '#292D32',
                                        }}
                                    >
                                        <NorthEastIcon />
                                    </IconButton>
                                </Box>
                                <Box>
                                    <Typography
                                        fontSize="30px"
                                        fontWeight="600"
                                        sx={{ color: '#AFAFAF' }}
                                    >
                                        Contact Me
                                    </Typography>
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item md={12} lg={6}>
                <PortfolioCard
                    title="PropertiMax Application"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBg}
                />
            </Grid>
            <Grid item md={12} lg={6}>
                <PortfolioCard
                    title="PropertiMax Website"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBgWeb}
                />
            </Grid>
            <Grid item md={12} lg={6}>
                <PortfolioCard
                    title="PropertiMax Application"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBg}
                />
            </Grid>
            <Grid item md={12} lg={6}>
                <PortfolioCard
                    title="PropertiMax Website"
                    subTitle="Lead UX and UI design"
                    backgroundImage={PropertyMaxBgWeb}
                />
            </Grid>
            <Grid item md={12} lg={12}>
                <ContactCard />
            </Grid>
        </Grid>
    );
}

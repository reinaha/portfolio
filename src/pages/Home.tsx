import {
    Avatar,
    Card,
    CardContent,
    Grid,
    Icon,
    IconButton,
    Typography,
} from '@mui/material';
import React from 'react';

import Gradient1 from '../../resources/Gradient1.png';
import {
    FiCard,
    FiCardActionArea,
    FiCardActions,
    FiCardContent,
    FiCardMedia,
} from '../components/fullImageCard';
import LinkedInIcon from '../icons/LinkedInIcon.svg';

export function Home() {
    return (
        <Grid container alignItems="stretch" spacing={1}>
            <Grid item md={12} lg={6}>
                <FiCard>
                    <FiCardMedia image={Gradient1} />
                    <FiCardContent>
                        <Typography fontSize="30px" fontWeight="600">
                            Hello, I&apos;m Sumin
                        </Typography>
                        <Typography fontSize="30px" fontWeight="600">
                            UI/UX designer with
                        </Typography>
                        <Typography fontSize="30px" fontWeight="600">
                            5 years of experience
                        </Typography>
                        <Typography variant="subtitle1" component="h6" marginTop="2em">
                            I care a lot about using design for positive impact. And enjoy
                            creating user-centre,
                        </Typography>
                        <Typography variant="subtitle1" component="h6"></Typography>
                        <Typography variant="subtitle1" component="h6">
                            delightful, and human experiences.
                        </Typography>
                    </FiCardContent>
                    <FiCardActions>
                        <IconButton sx={{ padding: '0px' }}>
                            <Avatar
                                sx={{
                                    bgcolor: '#FFFFFF',
                                    color: 'black',
                                    width: '60px',
                                    height: '60px',
                                }}
                            >
                                <Icon sx={{ textAlign: 'center' }}>
                                    <img
                                        src={LinkedInIcon}
                                        className="App-logo"
                                        alt="logo"
                                        style={{ height: '100%' }}
                                    />
                                </Icon>
                            </Avatar>
                        </IconButton>
                        <IconButton sx={{ padding: '0px' }}>
                            <Avatar
                                sx={{
                                    bgcolor: '#FFFFFF',
                                    color: 'black',
                                    width: '60px',
                                    height: '60px',
                                }}
                            >
                                S
                            </Avatar>
                        </IconButton>
                        <IconButton sx={{ padding: '0px' }}>
                            <Avatar
                                sx={{
                                    bgcolor: '#FFFFFF',
                                    color: 'black',
                                    width: '60px',
                                    height: '60px',
                                }}
                            >
                                G
                            </Avatar>
                        </IconButton>
                    </FiCardActions>
                </FiCard>
            </Grid>
            <Grid item container spacing={1} md={12} lg={6}>
                <Grid item xs={12} md={12} lg={12}>
                    <Card
                        elevation={0}
                        sx={{
                            background: '#FFEF5E',
                            borderRadius: '20px',
                            height: '100%',
                        }}
                    >
                        <CardContent>
                            <Typography variant="subtitle1" component="h6">
                                I care a lot about using design
                            </Typography>
                            <Typography fontSize="30px" fontWeight="600">
                                View my works
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item container spacing={1} xs={12} md={12} lg={12}>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '20px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <CardContent sx={{ marginTop: 'auto' }}>
                                <Typography fontSize="30px" fontWeight="600">
                                    About me
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <Card
                            elevation={0}
                            sx={{
                                background: 'rgba(255, 255, 255, 0.5)',
                                borderRadius: '20px',
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <CardContent sx={{ marginTop: 'auto' }}>
                                <Typography fontSize="30px" fontWeight="600">
                                    Contact
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

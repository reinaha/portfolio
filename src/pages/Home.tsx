import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    IconButton,
    Typography,
} from '@mui/material';

import Texture from '../../resources/textureA.png';

function BackgroundImg() {
    return (
        <div
            style={{
                position: 'relative',
                left: '0px',
                top: '0px',
                background: 'rgba(242, 242, 242)',
                opacity: '0.9',
                filter: 'blur(84px)',
            }}
        >
            <div
                style={{
                    position: 'absolute',
                    width: '413px',
                    height: '252px',
                    left: '-73px',
                    top: '347px',
                    opacity: '0.6',
                    background: '#17A500',
                    borderRadius: '20px',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '313px',
                    height: '313px',
                    left: '389px',
                    top: '49.69px',
                    background: '#FFC700',
                    borderRadius: '20px',
                    transform: 'rotate(-23.69deg)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '428px',
                    height: '313px',
                    left: '154px',
                    top: '227.79px',
                    background: '#C5FBFF',
                    opacity: '0.8',
                    borderRadius: '20px',
                    transform: 'rotate(-23.69deg)',
                }}
            />
            <div
                style={{
                    position: 'absolute',
                    width: '178px',
                    height: '178px',
                    left: '340px',
                    top: '173.26px',
                    background: '#FFEF5E',
                    opacity: '0.7',
                    borderRadius: '20px',
                    transform: 'rotate(-23.69deg)',
                }}
            />
        </div>
    );
}

export function Home() {
    return (
        <Grid container spacing={1}>
            <Grid item xs={12} sm={6} md={6}>
                <Card
                    elevation={0}
                    sx={{ borderRadius: '20px', backgroundColor: '#292D32' }}
                >
                    <CardContent>
                        <CardMedia component={BackgroundImg} />
                        <div style={{ position: 'relative' }}>
                            <Typography fontSize="30px" fontWeight="600" zIndex="modal">
                                Hello, I&apos;m Sumin
                            </Typography>
                            <Typography fontSize="30px" fontWeight="600">
                                UI/UX designer with 5 years of experience
                            </Typography>
                            <Typography
                                variant="subtitle1"
                                component="h6"
                                marginTop="2em"
                            >
                                I care a lot about using design for positive impact.
                            </Typography>
                            <Typography variant="subtitle1" component="h6">
                                And enjoy creating user-centre,
                            </Typography>
                            <Typography variant="subtitle1" component="h6">
                                delightful, and human experiences.
                            </Typography>
                        </div>
                    </CardContent>
                    <CardActions sx={{ marginTop: '7em' }}>
                        <IconButton>
                            <Avatar sx={{ bgcolor: '#FFFFFF', color: 'black' }}>
                                <LinkedInIcon style={{ color: 'blue' }} />
                            </Avatar>
                        </IconButton>
                        <IconButton>
                            <Avatar sx={{ bgcolor: '#FFFFFF', color: 'black' }}>S</Avatar>
                        </IconButton>
                    </CardActions>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <Card elevation={0} sx={{ background: '#FFEF5E', borderRadius: '20px' }}>
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
        </Grid>
    );
}

import { Avatar, Icon, IconButton, Typography } from '@mui/material';

import Gradient1 from '../../../resources/Gradient1.png';
import LinkedInIcon from '../../icons/LinkedInIcon.svg';
import { FiCard, FiCardActions, FiCardContent, FiCardMedia } from '../fullImageCard';

export function IntroCard() {
    return (
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
                    I care a lot about using design for positive
                </Typography>
                <Typography variant="subtitle1" component="h6">
                    impact. And enjoy creating user-centre,
                </Typography>
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
    );
}

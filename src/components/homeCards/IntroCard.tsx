import { Typography } from '@mui/material';

import Gradient1 from '../../../resources/Gradient1.png';
import BehanceIcon from '../../icons/BehanceIcon.svg';
import GoogleIcon from '../../icons/GoogleIcon.svg';
import LinkedInIcon from '../../icons/LinkedInIcon.svg';
import { LogoButton } from '../buttons/LogoButton';
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
                <LogoButton iconSrc={LinkedInIcon} />
                <LogoButton iconSrc={BehanceIcon} />
                <LogoButton iconSrc={GoogleIcon} />
            </FiCardActions>
        </FiCard>
    );
}

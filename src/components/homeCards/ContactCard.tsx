import { Button, Typography } from '@mui/material';

import Gradient1 from '../../../resources/Gradient1.png';
import { FiCard, FiCardActions, FiCardContent, FiCardMedia } from '../fullImageCard';

type ContactCardProps = {
    cardRef?:
        | ((instance: HTMLDivElement | null) => void)
        | React.RefObject<HTMLDivElement>
        | null
        | undefined;
};

export function ContactCard({ cardRef }: ContactCardProps) {
    return (
        <FiCard ref={cardRef} sx={{ maxHeight: '455px' }}>
            <FiCardMedia image={Gradient1} />
            <FiCardContent>
                <Typography fontSize="30px" fontWeight="600">
                    Want to work
                </Typography>
                <Typography fontSize="30px" fontWeight="600">
                    together?
                </Typography>
                <Typography variant="subtitle1" component="h6" marginTop="1em">
                    Feel free to reach out for collaborations or just a friendly hello
                    reina.smh@gmail.com
                </Typography>
            </FiCardContent>
            <FiCardActions>
                <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    sx={{
                        borderRadius: '3em',
                        backgroundColor: 'black',
                        padding: '12px 30px 12px 30px',
                    }}
                >
                    Contact me
                </Button>
            </FiCardActions>
        </FiCard>
    );
}

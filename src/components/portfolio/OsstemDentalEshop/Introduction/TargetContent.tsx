import { Typography } from '@mui/material';

import {
    IconListItem,
    PortfolioChipSection,
    PortfolioSectionContainer,
} from '@/components';

export const TargetContent = () => {
    const goalColor = { primary: '#0A69FA', secondary: '#F2F7FF' };
    const subGoalColor = { primary: '#008557', secondary: '#E8FAF0' };

    return (
        <PortfolioSectionContainer>
            <PortfolioChipSection title="Main Target" color={goalColor}>
                <Typography>Dentists (Clients of Osstem New Zealand)</Typography>
                <Typography>
                    The main target of the Osstem Dental E-shop application is the
                    existing clients of Osstem New Zealand who have been ordering through
                    analog channels. The goal is to transition these customers to use the
                    mobile app for ordering.
                </Typography>
            </PortfolioChipSection>
            <PortfolioChipSection title="Sub Target" color={subGoalColor}>
                <Typography>
                    New clients (Dentists in their late twenties to early forties)
                </Typography>
                <Typography>
                    The sub target of the app is dentists in their late twenties to early
                    forties who have not previously conducted business with Osstem New
                    Zealand, and who are comfortable with using a new mobile app for their
                    ordering needs.
                </Typography>
            </PortfolioChipSection>
        </PortfolioSectionContainer>
    );
};

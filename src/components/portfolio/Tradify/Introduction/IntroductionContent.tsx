import { Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const IntroductionContent = () => {
    return (
        <PortfolioSectionContainer>
            <Typography>
                Tradify&apos;s mobile app is used by thousands of field technicians who
                frequently work in environments with limited or unreliable internet
                connectivity. Although offline support already existed, it had evolved
                inconsistently over time, making it difficult for users to understand what
                they could access, edit, or save without a connection.
            </Typography>
            <Typography>
                As the product continued to grow, improving the offline experience became
                less about adding new functionality and more about establishing a
                consistent approach that could scale across the application.
            </Typography>
            <Typography>
                I led the end-to-end discovery and design process, auditing existing
                offline behaviours across the product, defining capability boundaries,
                identifying interaction patterns, and establishing reusable UX principles
                for offline experiences. This work resulted in a shared framework that
                aligned product, design, and engineering teams while providing a
                foundation for future offline capabilities.
            </Typography>
        </PortfolioSectionContainer>
    );
};

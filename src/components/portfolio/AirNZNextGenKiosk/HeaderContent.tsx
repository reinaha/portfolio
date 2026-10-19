import { Link, Stack, Typography } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';
import { PortfolioDetailCards } from '@/components';
import { AirNZNextGenKioskCardInfo } from '@/data';

const BEST_DESIGN_AWARDS_URL =
    'https://bestawards.co.nz/value-of-design/value-of-design-established-impact/Entrant:814309bd-6bff-4a75-8244-4f471cac18b9/next-generation-kiosks-air-new-zealand/';

export const HeaderContent = () => {
    return (
        <PortfolioSectionContainer spacing={5}>
            <Stack spacing={2}>
                <Typography variant="h1">
                    Air New Zealand <br /> Next Generation Kiosk
                </Typography>
                <Link
                    href={BEST_DESIGN_AWARDS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                        fontFamily: 'DM Sans',
                        fontSize: '14px',
                        lineHeight: '18px',
                        fontWeight: 700,
                        color: '#BF9855',
                        textDecoration: 'none',
                    }}
                >
                    Best Design Awards 2026 · Gold
                </Link>
            </Stack>
            <Typography variant="body2">
                Redesigning Air New Zealand&apos;s next-generation self-service kiosk by
                replacing a legacy vendor platform with an in-house solution—giving the
                airline full control over the customer experience, hardware, and future
                innovation.
            </Typography>
            <PortfolioDetailCards portfolioDetailCardInfos={AirNZNextGenKioskCardInfo} />
        </PortfolioSectionContainer>
    );
};

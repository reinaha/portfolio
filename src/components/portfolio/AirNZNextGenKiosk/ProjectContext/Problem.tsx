import { Typography } from '@mui/material';

import { IconListItem, PortfolioImage, PortfolioSectionContainer } from '@/components';
import { AirNZNextGenKioskProjectContextProblem } from '@/images/AirNZNextGenKiosk';

export const ProblemContent = () => {
    const iconColor = { primary: '#FF7A00', secondary: '#FFF9E6' };

    return (
        <PortfolioSectionContainer>
            <Typography>
                The legacy vendor platform supported core check-in, but its rigid, generic
                architecture limited Air New Zealand&apos;s ability to evolve the
                experience. Replacing it gave us an opportunity to identify long-standing
                passenger and airport team pain points, and use those learnings to
                redesign the kiosk journey around Air New Zealand&apos;s operational
                needs.
            </Typography>
            <IconListItem iconType="number" number={1} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Generic platform, limited flexibility
                </Typography>
                <Typography>
                    The vendor platform was built as a generic airline solution with
                    rigid, linear journeys, making it difficult to adapt as passenger
                    types, destination requirements, and operational rules increased.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={2} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Long journeys, slower operations
                </Typography>
                <Typography>
                    Because the experience couldn&apos;t adapt to different passenger
                    scenarios, many travellers completed unnecessarily long check-in
                    journeys, increasing kiosk usage time and airport queues.
                </Typography>
            </IconListItem>
            <IconListItem iconType="number" number={3} iconColor={iconColor}>
                <Typography sx={{ fontWeight: '600', marginBottom: '8px' }}>
                    Opportunity to redesign for Air New Zealand
                </Typography>
                <Typography>
                    Replacing the vendor platform created an opportunity to rethink the
                    kiosk journey using insights from passengers and airport staff, rather
                    than replicating the existing experience.
                </Typography>
            </IconListItem>
            <PortfolioImage imageSrc={AirNZNextGenKioskProjectContextProblem} />
        </PortfolioSectionContainer>
    );
};

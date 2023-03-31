import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import Cover2 from '../../../resources/OsstemDentalEshop/Cover2.jpg';
import { ColourIcons } from '../../components/icons/ColourIcons';
import { PortfolioLayout, PortfolioSection } from '../../components/portfolio';
import {
    GoalsContent,
    IntroductionContent,
} from '../../components/portfolio/OsstemDentalEshop';
import DNSIcon from '../../icons/DNSIcon.svg';
import FaceIcon from '../../icons/FaceIcon.svg';
import FigmaIcon from '../../icons/FigmaIcon.svg';
import IllustratorIcon from '../../icons/IllustratorIcon.svg';
import PhotoshopIcon from '../../icons/PhotoshopIcon.svg';
import TimerIcon from '../../icons/TimerIcon.svg';
import ToolsIcon from '../../icons/ToolsIcon.svg';

const portfolioDetailCardInfos = [
    {
        title: 'Target Audience',
        content: (
            <Typography variant="body2">
                Dentists in their late twenties to early forties
            </Typography>
        ),
        icon: FaceIcon,
    },
    {
        title: 'Duration',
        content: (
            <>
                <Typography variant="body2">3 Months</Typography>
                <Typography variant="body2">(Feb 2022 - May 2022)</Typography>
            </>
        ),
        icon: TimerIcon,
    },
    {
        title: 'Tools Used',
        content: (
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 0.3 }}>
                <ColourIcons icon={FigmaIcon} />
                <ColourIcons icon={IllustratorIcon} />
                <ColourIcons icon={PhotoshopIcon} />
            </Box>
        ),
        icon: ToolsIcon,
    },
    {
        title: 'My Role',
        content: <Typography variant="body2">Lead UI & UX Design</Typography>,
        icon: DNSIcon,
    },
];

export const OsstemDentalEShop = () => {
    return (
        <PortfolioLayout
            coverImg={Cover2}
            title="Osstem dental e-shop"
            subTitle="Find the best deal on dental tools at your fingertips."
            portfolioMetaData={{
                projectType: 'Commercial',
                applicationType: 'Application',
                startDate: new Date(2022, 2),
                endDate: new Date(2022, 5),
            }}
            portfolioDetailCardInfos={portfolioDetailCardInfos}
        >
            <PortfolioSection title="Introduction" content={<IntroductionContent />} />
            <PortfolioSection title="Goals" content={<GoalsContent />} />
        </PortfolioLayout>
    );
};

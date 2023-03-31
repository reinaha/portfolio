import { Typography } from '@mui/material';
import { Box } from '@mui/system';

import { ColourIcons } from '../components/icons/ColourIcons';
import DNSIcon from '../icons/DNSIcon.svg';
import FaceIcon from '../icons/FaceIcon.svg';
import FigmaIcon from '../icons/FigmaIcon.svg';
import IllustratorIcon from '../icons/IllustratorIcon.svg';
import PhotoshopIcon from '../icons/PhotoshopIcon.svg';
import TimerIcon from '../icons/TimerIcon.svg';
import ToolsIcon from '../icons/ToolsIcon.svg';

export const OsstemDentalEShopCardInfo = [
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

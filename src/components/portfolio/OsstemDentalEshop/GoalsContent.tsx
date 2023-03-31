import { Chip, Stack, Typography } from '@mui/material';

import { ArrowPointedText, NumberListText } from '../../listText';

export const GoalsContent = () => {
    return (
        <Stack spacing={1.4} alignItems="flex-start">
            <Chip
                label="Main Goal"
                sx={{
                    bgcolor: '#F2F7FF',
                    color: '#0A69FA',
                    fontSize: '18px',
                    fontWeight: 500,
                    padding: '0.2em',
                }}
            />
            <Typography>
                The primary objective of the application for the company was to allow
                dentists to easily purchase our products through the app, rather than
                having to rely on contacting our sales personnel to buy products.
            </Typography>
            <ArrowPointedText
                text="By achieving this, the company aimed to establish a stable and reliable source
                    of income that would not be affected by environmental changes."
            />
            <Chip
                label="Sub Goal"
                sx={{
                    bgcolor: '#E8FAF0',
                    color: '#008557',
                    fontSize: '18px',
                    fontWeight: 500,
                    padding: '0.4em',
                }}
            />
            <NumberListText
                number={1}
                text="Encourage customers to utilise the chat feature on the app for inquiries
                    instead of contacting the company via phone."
                numberColor="#008557"
                backgroundColor="#E8FAF0"
            />
            <ArrowPointedText
                text="Encouraging customers to contact the company through chat on the 
                    app instead of making unnecessary phone inquiries can prevent work paralysis caused by phone calls, 
                    and leaving requests in written form can make it easier to respond to accurate requests and unexpected 
                    complaints in the future."
            />
            <NumberListText
                number={2}
                text="Provide customers with clear visibility of the product delivery process
                    and order details through our shopping app."
                numberColor="#008557"
                backgroundColor="#E8FAF0"
            />
            <ArrowPointedText
                text={[
                    'The most frequently asked question by existing customers was about the estimated arrival time of \
                    their product, while the most common complaint was regarding wrong orders placed by customers due \
                    to their own mistakes and then demanding the company to resolve the issue.',
                    'In order to address these issues, our objective is to enhance the existing system by offering \
                    comprehensive information about the product delivery process, including estimated delivery time, \
                    through our shopping app. Furthermore, we strive to promote the practice of reviewing and \
                    confirming orders before making payments to reduce the frequency of incorrect orders.',
                ]}
            />
        </Stack>
    );
};

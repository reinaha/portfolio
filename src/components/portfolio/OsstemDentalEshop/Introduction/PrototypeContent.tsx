import { Box } from '@mui/material';

import { PortfolioSectionContainer } from '@/components';

export const PrototypeContent = () => {
    return (
        <PortfolioSectionContainer>
            <Box>
                <iframe
                    title="hi"
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                    }}
                    width="100%"
                    height="600px"
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FxwEegHApZ0kqmP6ltpqBQ5%2FOsstem-Dental-E-Shop%3Fnode-id%3D1-2101%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D1%253A2101%3D1"
                    allowFullScreen
                ></iframe>
            </Box>
        </PortfolioSectionContainer>
    );
};

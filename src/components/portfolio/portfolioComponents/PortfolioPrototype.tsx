import { Box } from '@mui/material';

interface PortfolioPrototypeProps {
    src: string;
}

export const PortfolioPrototype = ({ src }: PortfolioPrototypeProps) => {
    return (
        <Box>
            <iframe
                title="hi"
                style={{
                    border: '1px solid rgba(0, 0, 0, 0.1)',
                }}
                width="100%"
                height="600px"
                src={src}
                allowFullScreen
            ></iframe>
        </Box>
    );
};

import { Stack, StackProps } from '@mui/material';
import { ReactNode } from 'react';

import { PortfolioFullWidthImage, PortfolioSection } from '..';

export interface PortfolioHeaderProps extends StackProps {
    title: string;
    headerContent?: ReactNode;
    coverImg?: string;
}

export const PortfolioHeader = ({
    title,
    headerContent,
    coverImg,
    ...props
}: PortfolioHeaderProps) => {
    return (
        <Stack spacing={13} paddingBottom={11} {...props}>
            <PortfolioSection
                title={title}
                reverseTitleIcon={true}
                titlePadding={7.5}
                content={headerContent}
            />
            {coverImg ? <PortfolioFullWidthImage image={coverImg} /> : null}
        </Stack>
    );
};

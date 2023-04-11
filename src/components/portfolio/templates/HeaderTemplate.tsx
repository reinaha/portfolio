import { Stack } from '@mui/material';

import { PortfolioFullWidthImage, PortfolioSection } from '@/components';
import { HeaderTemplateProps } from '@/models';

import { HeaderContentTemplate } from './HeaderContentTemplate';

export const HeaderTemplate = ({
    projectType,
    coverImage,
    HeaderContent = HeaderContentTemplate,
    ...portfolioHeader
}: HeaderTemplateProps) => {
    return (
        <Stack spacing={13} paddingBottom={11}>
            <PortfolioSection
                title={projectType}
                reverseTitleIcon={true}
                titlePadding={7.5}
                content={<HeaderContent {...portfolioHeader} />}
            />
            {coverImage ? <PortfolioFullWidthImage image={coverImage} /> : null}
        </Stack>
    );
};

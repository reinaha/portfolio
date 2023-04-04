import { Stack } from '@mui/material';
import { ReactChildren, ReactNode } from 'react';

import {
    MajorSectionTitle,
    MajorSectionTitleProps,
    PortfolioFullWidthImage,
    PortfolioSection,
    PortfolioSectionProps,
} from '@/components';

type PortfolioMajorSectionProps = {
    sectionTitle?: MajorSectionTitleProps;
    portfolioSections: PortfolioSectionProps[];
    coverImage?: string;
    children?: ReactChildren | ReactNode;
};

export const PortfolioMajorSection = ({
    sectionTitle,
    portfolioSections,
    coverImage,
    children,
}: PortfolioMajorSectionProps) => {
    return (
        <Stack spacing={25}>
            {sectionTitle ? <MajorSectionTitle title={sectionTitle.title} /> : null}

            {coverImage ? <PortfolioFullWidthImage image={coverImage} /> : null}

            {portfolioSections.map((ps, index) => (
                <PortfolioSection
                    key={index}
                    title={ps.title}
                    content={ps.content}
                    coverImg={ps.coverImg}
                />
            ))}
            {children}
        </Stack>
    );
};

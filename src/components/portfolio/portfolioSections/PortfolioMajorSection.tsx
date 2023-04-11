import { Stack } from '@mui/material';
import { ReactChildren, ReactNode, useRef } from 'react';

import {
    MajorSectionTitle,
    MajorSectionTitleProps,
    PortfolioFullWidthImage,
    PortfolioSection,
    PortfolioSectionProps,
} from '@/components';

export type PortfolioMajorSectionProps = {
    sectionTitle?: MajorSectionTitleProps;
    portfolioSections: PortfolioSectionProps[];
    coverImage?: string;
    children?: ReactChildren | ReactNode;
};

type RefElem = HTMLDivElement | null;

export const PortfolioMajorSection = ({
    sectionTitle,
    portfolioSections,
    coverImage,
    children,
}: PortfolioMajorSectionProps) => {
    const sectionRefs = useRef<Array<RefElem>>([]);

    const navigateTo = (index: number) => {
        if (
            sectionRefs &&
            sectionRefs.current &&
            sectionRefs.current.length > index &&
            sectionRefs.current[index]
        ) {
            const currentRef = sectionRefs.current[index];
            if (currentRef) {
                currentRef.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center',
                });
            }
        }
    };

    return (
        <Stack spacing={25}>
            {sectionTitle ? (
                <MajorSectionTitle
                    title={sectionTitle.title}
                    subTitles={sectionTitle.subTitles}
                    navigateTo={navigateTo}
                />
            ) : null}

            {coverImage ? <PortfolioFullWidthImage image={coverImage} /> : null}

            {portfolioSections.map((ps, index: number) => (
                <PortfolioSection
                    key={index}
                    title={ps.title}
                    content={ps.content}
                    coverImg={ps.coverImg}
                    sectionRef={(el) => (sectionRefs.current[index] = el)}
                />
            ))}
            {children}
        </Stack>
    );
};

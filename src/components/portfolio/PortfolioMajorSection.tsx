import { Stack } from '@mui/material';
import { ReactChildren, ReactNode } from 'react';

import { PortfolioFullWidthImage } from '..';
import { MajorSectionTitle, MajorSectionTitleProps } from './MajorSectionTitle';
import { PortfolioNumberedSection } from './PortfolioNumberedSection';
import { PortfolioSection, PortfolioSectionProps } from './PortfolioSection';

type PortfolioMajorSectionProps = {
    sectionTitle?: MajorSectionTitleProps;
    portfolioSections: PortfolioSectionProps[];
    midComponents?: ReactNode;
    coverImage?: string;
    numbered?: boolean;
    numberOptions?: {
        numberColor?: string;
        backgroundColor?: string;
    };
    children?: ReactChildren | ReactNode;
};

export const PortfolioMajorSection = ({
    sectionTitle,
    portfolioSections,
    midComponents,
    coverImage,
    numbered = false,
    numberOptions,
    children,
}: PortfolioMajorSectionProps) => {
    return (
        <Stack spacing={25}>
            {sectionTitle ? <MajorSectionTitle title={sectionTitle.title} /> : null}

            {coverImage ? <PortfolioFullWidthImage image={coverImage} /> : null}

            {midComponents ? midComponents : null}

            {numbered
                ? portfolioSections.map((ps, index) => (
                      <PortfolioNumberedSection
                          key={index}
                          title={ps.title}
                          content={ps.content}
                          number={index + 1}
                          numberColor={numberOptions?.numberColor || ''}
                          backgroundColor={numberOptions?.backgroundColor || ''}
                      />
                  ))
                : portfolioSections.map((ps, index) => (
                      <PortfolioSection
                          key={index}
                          title={ps.title}
                          content={ps.content}
                      />
                  ))}
            {children}
        </Stack>
    );
};

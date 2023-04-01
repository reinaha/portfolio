import { ReactChildren, ReactNode } from 'react';

import { MajorSectionTitle, MajorSectionTitleProps } from './MajorSectionTitle';
import { PortfolioSection, PortfolioSectionProps } from './PortfolioSection';

type PortfolioMajorSectionProps = {
    sectionTitle?: MajorSectionTitleProps;
    portfolioSections: PortfolioSectionProps[];
    midComponents?: ReactNode;
    children?: ReactChildren | ReactNode;
};

export const PortfolioMajorSection = ({
    sectionTitle,
    portfolioSections,
    midComponents,
    children,
}: PortfolioMajorSectionProps) => {
    return (
        <>
            {sectionTitle ? (
                <MajorSectionTitle
                    title={sectionTitle.title}
                    subTitle={sectionTitle.subTitle}
                />
            ) : null}

            {midComponents ? midComponents : null}

            {portfolioSections.map((ps, index) => (
                <PortfolioSection key={index} title={ps.title} content={ps.content} />
            ))}
            {children}
        </>
    );
};

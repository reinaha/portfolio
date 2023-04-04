import { ReactNode } from 'react';

import { PortfolioChevronSection } from './PortfolioChevronSection';
import { PortfolioContainer, PortfolioContainerProps } from './PortfolioContainer';

type SubsectionType = 'chevron';

export interface PortfolioSubSection extends PortfolioContainerProps {
    title: string;
}

interface SubSectionContent {
    title?: string;
    content: ReactNode;
}

interface PortfolioSubSectionProps {
    subsectionType?: SubsectionType;
    subsections: SubSectionContent[];
}

export const PortfolioSubSection = ({
    subsectionType,
    subsections,
}: PortfolioSubSectionProps) => {
    return (
        <PortfolioContainer spacing={20}>
            {subsections.map((ss, index) => (
                <SubSectionComponent
                    key={index}
                    type={subsectionType}
                    title={ss.title || ''}
                >
                    {ss.content}
                </SubSectionComponent>
            ))}
        </PortfolioContainer>
    );
};

interface SubSectionComponentProps extends PortfolioSubSection {
    type?: SubsectionType;
}

export const SubSectionComponent = ({
    type,
    title,
    ...props
}: SubSectionComponentProps) => {
    switch (type) {
        case 'chevron':
        default:
            return <PortfolioChevronSection title={title} {...props} />;
    }
};

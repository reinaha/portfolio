import { ReactNode } from 'react';

import {
    PortfolioChevronSection,
    PortfolioSectionContainer,
    PortfolioSectionContainerProps,
} from '@/components';

type SubsectionType = 'chevron';

export interface PortfolioSubSection extends PortfolioSectionContainerProps {
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
        <PortfolioSectionContainer spacing={20}>
            {subsections.map((ss, index) => (
                <SubSectionComponent
                    key={index}
                    type={subsectionType}
                    title={ss.title || ''}
                >
                    {ss.content}
                </SubSectionComponent>
            ))}
        </PortfolioSectionContainer>
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

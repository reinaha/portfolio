import { FC } from 'react';

import { MajorSections } from '@/models';

interface ContentTemplateProps<D> {
    MajorSectionComponent: FC<D>;
    majorSections: MajorSections<D>;
}

export const ContentTemplate = <D,>({
    MajorSectionComponent,
    majorSections,
}: ContentTemplateProps<D>) => {
    return (
        <>
            {majorSections.sections.map((s, index) => (
                <MajorSectionComponent key={index} {...s} />
            ))}
        </>
    );
};

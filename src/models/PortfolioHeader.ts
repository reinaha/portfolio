import { FC, ReactNode } from 'react';

export interface PortfolioHeader {
    title: string;
    subtitle?: string;
    description?: string;
    coverImage?: string;
    projectType?: string;
    headerCards?: HeaderCard[];
}

export interface HeaderCard {
    title?: string;
    content?: ReactNode;
}

export interface HeaderTemplateProps extends PortfolioHeader {
    HeaderContent?: FC<PortfolioHeader>;
}

export interface Header<H> {
    component: FC<H>;
    props: H;
}

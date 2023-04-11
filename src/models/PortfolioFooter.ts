import { FC } from 'react';

export interface PortfolioFooter {
    contact?: string;
}

export interface FooterTemplateProps extends PortfolioFooter {
    FooterContent?: FC;
}

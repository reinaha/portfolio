import { TypographyProps } from '@mui/material';
import { NavigateFunction } from 'react-router-dom';

type PortfolioCardOnClickProp = NavigateFunction | null | undefined;

export interface IPortfolioCard {
    title: string;
    subtitle?: string;
    tags?: string[];
    filterCriteria?: string[];
    backgroundImg: string;
    textColor?: string;
    titleProps?: TypographyProps;
    subtitleProps?: TypographyProps;
    titleSubtitleSpacing?: number;
    titleIcon?: React.ReactNode;
    onClick(navigate?: PortfolioCardOnClickProp): () => void;
}

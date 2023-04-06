import { NavigateFunction } from 'react-router-dom';

type PortfolioCardOnClickProp = NavigateFunction | null | undefined;

export interface IPortfolioCard {
    title: string;
    subtitle?: string;
    tags?: string[];
    backgroundImg: string;
    onClick(navigate?: PortfolioCardOnClickProp): () => void;
}

import { IPortfolioCard } from './PortfolioCard';

export interface IFeaturedWorkCard {
    card: IPortfolioCard;
    tier: 'large' | 'medium';
    // Featured Work uses its own title/subtitle copy (e.g. "PropertiMax" / "Real
    // Estate Trading Web · SaaS") rather than IPortfolioCard's title/subtitle,
    // which were written for the older overlay-card style. Same for `image` —
    // these are dedicated Featured Work covers exported from Figma, not
    // IPortfolioCard's backgroundImg (used elsewhere, e.g. the homepage grid).
    title: string;
    subtitle: string;
    image: string;
    // Optional award credential: `badge` is pinned to the cover's top-left as a
    // sticker (it sits outside the hover zoom, so it stays put), and `label`
    // renders as a gold eyebrow line above the title.
    award?: {
        badge: string;
        label: string;
    };
}

export interface IVisualWorkCard {
    card: IPortfolioCard;
}

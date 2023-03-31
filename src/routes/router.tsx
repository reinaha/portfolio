import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from '../components/layout/Layout';
import { PortfolioLayout } from '../components/layout/PortfolioLayout';
import { Error, Home, OsstemDentalEShop } from '../pages';
import { defaultTheme, lightTheme } from '../themes/default';

export default function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/portfolio" element={<PortfolioLayout theme={lightTheme} />}>
                    <Route path="osstem-dental-e-shop" element={<OsstemDentalEShop />} />
                </Route>
                <Route path="/" element={<Layout theme={defaultTheme} />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

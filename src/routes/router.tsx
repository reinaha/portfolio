import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Error, Home, OsstemDentalEShop, PropertiMaxApp } from '@/pages';

import { Layout } from '../components/layout/Layout';
import { PortfolioLayout } from '../components/layout/PortfolioLayout';
import { defaultTheme, lightTheme } from '../themes/default';

export default function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/portfolio" element={<PortfolioLayout theme={lightTheme} />}>
                    <Route path="osstem-dental-e-shop" element={<OsstemDentalEShop />} />
                    <Route path="propertimax-app" element={<PropertiMaxApp />} />
                </Route>
                <Route path="/" element={<Layout theme={defaultTheme} />}>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

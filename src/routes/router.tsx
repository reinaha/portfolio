import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/components';
import {
    Error,
    Home,
    OsstemDentalEShop,
    PropertiMaxApp,
    UnderConstruction,
} from '@/pages';
import { PropertiMaxWeb } from '@/pages/portfolio/PropertiMaxWeb';

export default function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/portfolio">
                        <Route
                            path="osstem-dental-e-shop"
                            element={<OsstemDentalEShop />}
                        />
                        <Route path="propertimax-app" element={<PropertiMaxApp />} />
                        <Route path="propertimax-web" element={<PropertiMaxWeb />} />
                        <Route index element={<UnderConstruction />} />
                    </Route>
                    <Route index element={<Home />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { DefaultLayout } from '@/components';
import {
    Error,
    Home,
    OsstemDentalEShop,
    PropertiMaxApp,
    PropertiMaxDashboard,
    PropertiMaxWeb,
    UnderConstruction,
} from '@/pages';

export default function Router() {
    return (
        <BrowserRouter basename="/portfolio">
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="/work">
                        <Route
                            path="osstem-dental-e-shop"
                            element={<OsstemDentalEShop />}
                        />
                        <Route path="propertimax-app" element={<PropertiMaxApp />} />
                        <Route path="propertimax-web" element={<PropertiMaxWeb />} />
                        <Route
                            path="propertimax-dashboard"
                            element={<PropertiMaxDashboard />}
                        />
                        <Route index element={<UnderConstruction />} />
                    </Route>
                    <Route index element={<Home key={Math.random()} />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

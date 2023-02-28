import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Layout from '../components/layout/Layout';
import { Error, Home, Portfolio } from '../pages';

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="portfolio" element={<Portfolio />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

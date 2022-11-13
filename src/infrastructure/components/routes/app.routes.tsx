import { Navigate, Routes, Route } from 'react-router-dom';
import DetailsPage from '../../../features/ecommerce/pages/detailsPage/detailsPage';
import DressesPage from '../../../features/ecommerce/pages/dressesPage/dressesPage';
import JacketsPage from '../../../features/ecommerce/pages/jacketsPage/jacketsPage';
import SalesPage from '../../../features/ecommerce/pages/salesPage/salesPage';

export function AppRoutes() {
    return (
        <Routes>
            <Route path="home" element={<SalesPage />}></Route>
            <Route path="jackets" element={<JacketsPage />}></Route>
            <Route path="dresses" element={<DressesPage />}></Route>
            <Route path="detail" element={<DetailsPage />}></Route>
            <Route path="*" element={<Navigate replace to="" />}></Route>
        </Routes>
    );
}

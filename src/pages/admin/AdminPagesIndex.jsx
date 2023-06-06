import { Route, Routes } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";
import AdminLayoutIndex from "../../layouts/admin/AdminLayoutIndex";

const AdminPagesIndex = () => {
    return (
        <>
            <AdminLayoutIndex />
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
            </Routes>
        </>
    );
}

export default AdminPagesIndex;
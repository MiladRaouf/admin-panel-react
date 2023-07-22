import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./dashboard/Dashboard";
import Products from "./products/Products";

const AdminContents = () => {
    return (
        <>
            <Routes>
                <Route index element={<Dashboard />} />
                <Route path="/admin/dashboard" element={<Dashboard />} />
                <Route path="/admin/products" element={<Products />} />
            </Routes>
        </>
    );
}

export default AdminContents;
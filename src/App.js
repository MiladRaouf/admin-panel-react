import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminIndex from "./layouts/admin/AdminIndex";
import Dashboard from "./pages/dashboard/Dashboard";
import Product from "./pages/products/Product";

function App() {
  return (
    <section>
      <BrowserRouter>
        <AdminIndex />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Product />} />
          {/* <Route index element={<Product />} /> */}
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

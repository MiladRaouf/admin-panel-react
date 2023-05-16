import { Routes, Route, BrowserRouter } from "react-router-dom";
import AdminIndex from "./layouts/admin/AdminIndex";
import IndexDashboard from "./pages/dashboard/IndexDashboard";
import IndexProduct from "./pages/products/indexProduct";

function App() {
  return (
    <section>
      <BrowserRouter>
        <AdminIndex />
        <Routes>
          <Route path="/" element={<IndexDashboard />}>

          </Route>
          {/* <Route path="admin/dashboard" element={<IndexDashboard />} />
          <Route path="/admin/products" element={<IndexProduct />} /> */}
          {/* <Route path="/" element={<IndexDashboard />}/> */}
          {/* <Route path="*" element={<IndexDashboard />} /> */}
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;

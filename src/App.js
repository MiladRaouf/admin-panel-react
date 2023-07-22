import { useLocation } from "react-router-dom";
import AuthLayout from "./layouts/auth/AuthLayout";
import AdminLayout from "./layouts/admin/AdminLayout";

function App() {
  const location = useLocation();
  return (
    <section>
        {location.pathname.includes('/auth') ? <AuthLayout /> : <AdminLayout />}
    </section>
  );
}

export default App;

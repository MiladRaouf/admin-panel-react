import { BrowserRouter } from "react-router-dom";
import AdminPagesIndex from "./pages/admin/AdminPagesIndex";
import RegisterPagesIndex from "./pages/register/RegisterPagesIndex";

function App() {
  return (
    <section>
      <BrowserRouter>
          <AdminPagesIndex />
          <RegisterPagesIndex />
      </BrowserRouter>
    </section>
  );
}

export default App;

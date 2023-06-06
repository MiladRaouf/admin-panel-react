import { Route, Routes } from "react-router-dom";
import RegisterForm from "../../components/registerForm/RegisterForm";

const RegisterPagesIndex = () => {
    return (
        <Routes>
            <Route path="/register" element={<RegisterForm />} />
        </Routes>
    );
};

export default RegisterPagesIndex;
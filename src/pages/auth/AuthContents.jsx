import { Route, Routes } from "react-router-dom";
import Register from "./rejgister/Register";
import Login from "./login/Login";

const AuthContents = () => {
    return (
        <Routes>
            <Route path="/auth/register" element={<Register />} />
            <Route path="/auth/login" element={<Login />} />
        </Routes>
    );
};

export default AuthContents;
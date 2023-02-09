import { Fragment } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const AdminIndex = () => {
    return (
        <Fragment>
            <Navbar />
            <Sidebar />
        </Fragment>
    );
}

export default AdminIndex;
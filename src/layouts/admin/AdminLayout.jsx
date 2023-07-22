import { Fragment, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import AdminContents from "../../pages/admin/AdminContents";
import { Navigate, useNavigate } from "react-router-dom";

const AdminLayout = () => {
    const [menuBars, setMenuBars] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <Fragment>
            {!localStorage.getItem('token') ?
                <Navigate to={'/auth/register'} /> :
                (<>
                    <Navbar
                        menuBars={menuBars}
                        setMenuBars={setMenuBars}
                        openSidebar={openSidebar}
                        setOpenSidebar={setOpenSidebar}
                    />
                    <Sidebar menuBars={menuBars} openSidebar={openSidebar} />
                    <AdminContents />
                </>)
            }
        </Fragment>
    );
}

export default AdminLayout;
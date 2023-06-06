import { Fragment, useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";

const AdminLayoutIndex = () => {
    const [menuBars, setMenuBars] = useState(false);
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <Fragment>
            <Navbar
                menuBars={menuBars}
                setMenuBars={setMenuBars}
                openSidebar={openSidebar}
                setOpenSidebar={setOpenSidebar}
            />
            <Sidebar menuBars={menuBars} openSidebar={openSidebar} />
        </Fragment>
    );
}

export default AdminLayoutIndex;
import { Fragment, useState } from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const AdminIndex = () => {
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

export default AdminIndex;
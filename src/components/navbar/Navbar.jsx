import './style.css';

import { NavLink } from "react-router-dom";

const Navbar = ({ menuBars, setMenuBars, openSidebar, setOpenSidebar }) => {
    return (
        <section id='navbar-section'>
            <nav className='container-fluid'>
                <article className='account'>
                    <figure>
                        <img src="" alt="user image" />
                    </figure>
                    <i className={`fa fa-bars ${menuBars ? 'menu-bars-on' : null}`} onClick={() => { setMenuBars(!menuBars) }}></i>
                    <i className={`fa fa-chevron-circle-left ${openSidebar ? 'open-sidebar-on' : null}`} onClick={() => { setOpenSidebar(!openSidebar) }}></i>
                </article>

                <section className='operations'>
                    <i className="fa fa-search"></i>
                    <i className="fas fa-bell"></i>
                    <NavLink className={'register-link'} to={"/auth/register"}>
                        <i className="fa fa-power-off"></i>
                    </NavLink>
                    <NavLink to={"/auth/login"}>login</NavLink>
                </section>
            </nav>
        </section>
    );
}

export default Navbar;
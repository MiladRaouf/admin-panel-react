import './navbar.css';

const Navbar = ({ menuBars, setMenuBars, openSidebar, setOpenSidebar }) => {
    return (
        <section className='navbar-section'>
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
                    <i className="fa fa-power-off"></i>
                </section>
            </nav>
        </section>
    );
}

export default Navbar;
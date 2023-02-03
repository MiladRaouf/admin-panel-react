import './navbar.css';

const Navbar = () => {
    return (
        <nav className='container-xxl'>
            <article className='account'>
                <figure>
                    <img src="" alt="user image" />
                </figure>
                <figcaption>
                    میلاد رئوف
                </figcaption>
            </article>

            <section className='operations'>
                <i className="fa fa-search"></i>
                <i className="fas fa-bell"></i>
                <i className="fa fa-power-off"></i>
            </section>
        </nav>
    );
}

export default Navbar;
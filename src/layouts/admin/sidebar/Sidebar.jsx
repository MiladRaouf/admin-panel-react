import './sidebar.css'

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <ul>
                <li>
                    <a href="#">
                        <i className="fa fa-home"></i>
                        <h6 className='item'>داشبورد</h6>
                    </a>
                    <a href="#">
                        <i className="fa fa-backward"></i>
                        <h6 className='item'>سبد خرید</h6>
                    </a>
                    <a href="#">
                        <i className="fa fa-user"></i>
                        <h6 className='item'>نقش ها</h6>
                    </a>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
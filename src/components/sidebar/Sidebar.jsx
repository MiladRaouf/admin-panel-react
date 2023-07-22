import './style.css';
import { NavLink } from "react-router-dom";

const Sidebar = ({ menuBars, openSidebar }) => {
    const menuItems = [
        {
            id: 1,
            name: 'داشبورد',
            icon: 'fas fa-chart-pie',
            link: '/admin/dashboard'
        }, {
            id: 2,
            name: 'محصولات',
            icon: 'fas fa-palette',
            link: '/admin/products'
        }, {
            id: 3,
            name: 'نشانی ها',
            icon: 'fa fa-map',
            link: '/admin/address'
        }, {
            id: 4,
            name: 'نقش ها',
            icon: 'fa fa-user',
            link: '/admin/rols'
        }, {
            id: 5,
            name: 'رنگ ها',
            icon: 'fas fa-palette',
            link: '/admin/colors'
        }
    ];

    return (
        <aside id='sidebar' className={`${menuBars ? 'sidebar-show' : ''}`}>
            <ul>
                {
                    menuItems.map(item => {
                        return (
                            <li key={item.id}>
                                <NavLink to={item.link} style={({isActive}) => ({color: isActive ? "#4bff03" : "#fff"})}>
                                    <i className={item.icon}></i>
                                    <h6 className={`item ${openSidebar ? 'sidebar-open' : ''}`}>{item.name}</h6>
                                </NavLink>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    );
};

export default Sidebar;
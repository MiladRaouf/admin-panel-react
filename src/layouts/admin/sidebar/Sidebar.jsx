const Sidebar = ({ menuBars, openSidebar }) => {
    const menuItems = [
        {
            id: 1,
            name: 'داشبورد',
            icon: 'fas fa-chart-pie',
            link: '#'
        }, {
            id: 2,
            name: 'نشانی ها',
            icon: 'fa fa-map',
            link: '#'
        }, {
            id: 3,
            name: 'نقش ها',
            icon: 'fa fa-user',
            link: '#'
        }, {
            id: 4,
            name: 'رنگ ها',
            icon: 'fas fa-palette',
            link: '#'
        }
    ];

    return (
        <aside id='sidebar' className={`${menuBars ? 'sidebar-show' : ''}`}>
            <ul>
                {
                    menuItems.map(item => {
                        return (
                            <li key={item.id}>
                                <a href={item.link}>
                                    <i className={item.icon}></i>
                                    <h6 className={`item ${openSidebar ? 'sidebar-open' : ''}`}>{item.name}</h6>
                                </a>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    );
};

export default Sidebar;
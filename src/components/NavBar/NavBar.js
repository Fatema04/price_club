import React from 'react';
import NavItem from '../NavItem/NavItem';

const NavBar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 1, name: "Products", path: "/products" },
        { id: 1, name: "Orders", path: "/orders" },
        { id: 1, name: "About", path: "/about" },
        { id: 1, name: "Contact", path: "/contact" },
    ]
    return (
        <nav>
            <ul>
                {
                    routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;
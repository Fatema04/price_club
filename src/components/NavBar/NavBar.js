import React, { useState } from 'react';
import NavItem from '../NavItem/NavItem';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'


const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: "Home", path: "/home" },
        { id: 1, name: "Products", path: "/products" },
        { id: 1, name: "Orders", path: "/orders" },
        { id: 1, name: "About", path: "/about" },
        { id: 1, name: "Contact", path: "/contact" },
    ]
    return (
        <nav>
            {
                open ?
                    <XMarkIcon onClick={() => setOpen(!open)} className='h-6 w-6'></XMarkIcon> :

                    <Bars3Icon onClick={() => setOpen(!open)} className='h-6 w-6'></Bars3Icon>}


            <ul className='md:flex justify-center'>
                {
                    routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;
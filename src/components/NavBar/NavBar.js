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
        <nav className='bg-purple-300 w-full'>

            <div onClick={() => setOpen(!open)} className='h-6 w-6 md:hidden'>
                {
                    open ? <XMarkIcon ></XMarkIcon> : <Bars3Icon ></Bars3Icon>}
            </div>

            <ul className={`bg-purple-300 w-full md:flex justify-center absolute duration-500 ease-in ${open ? 'top-4' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <NavItem key={route.id} route={route}></NavItem>)
                }
            </ul>

        </nav>
    );
};

export default NavBar;
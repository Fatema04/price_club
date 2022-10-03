import React from 'react';

const NavItem = ({ route }) => {
    return (

        <li><a href={route.path}>{route.name}</a></li>
    );
};

export default NavItem;
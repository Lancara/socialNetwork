import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to='/profile' className = { navData => navData.isActive ? classes.active : classes.item }>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/users' className = { navData => navData.isActive ? classes.active : classes.item }>Users</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to='/login' className = { navData => navData.isActive ? classes.active : classes.item }>Login</NavLink>
            </div>

        </nav>
    );
};

export default Navbar;
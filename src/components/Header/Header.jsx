import React from 'react';
import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.headerTitle}>Social network</div>

            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div>{props.login} - <button className={classes.loginBlocButton} onClick={props.logout}>log out</button></div>
                    : <NavLink className={classes.loginBlocButton} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};

export default Header;
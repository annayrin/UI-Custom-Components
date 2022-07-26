import React from "react";
import classes from "./custom-nav-link.module.css";
import {NavLink} from "react-router-dom";

const CustomNavLink = ({iconName, path, label, description}) => {

    return (

        <NavLink
            className={({isActive}) => (isActive ?
                classes.navLink + " " + classes.selected :
                classes.navLink + " " + classes.unselected)}
            to={path}
        >
            <div className={classes.iconDiv}>
                <span className="material-icons-round">{iconName}</span>
            </div>
            <div className={classes.label}>
                <h1>{label}</h1>
                <p>{description}</p>
            </div>

        </NavLink>
    )
}

export default CustomNavLink
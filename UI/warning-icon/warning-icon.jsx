import React from "react";
import classes from "./warning-icon.module.css";

const WarningIcon = ({icon, content}) => {

    return (
        <div className={classes.warningContainer}>
            <div className={classes.warning}>
                <span className={"material-icons"}>{icon}</span>
                <span>{content}</span>
            </div>
        </div>
    )
}

export default WarningIcon
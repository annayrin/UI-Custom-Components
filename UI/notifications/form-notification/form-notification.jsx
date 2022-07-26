import React, {useCallback} from "react";
import classes from "./form-notification.module.css";

const FormNotification = ({type, notification}) => {
    const cls = [
        classes.formNotification,
        classes[type ?? "default"],
    ]

    const iconRender = useCallback(() => {

        switch (type) {
            case "error":
                return "error";
            case "success":
                return "check";
            case "warning":
                return "warning";
            case "info":
                return "info";
            default:
                return "notifications_none"
        }
    }, [type])

    return (
        <div className={cls.join(" ")}>
            <div className={classes.content}>
                <span className="material-icons">{iconRender()}</span>
                <span className={classes.text}>{notification}</span>
            </div>
        </div>
    )
}

export default FormNotification
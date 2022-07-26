import React from "react";
import classes from "./backdrop.module.css";
import {BackdropTypes} from "./backdropTypes";


const Backdrop = ({open, blur, handleOpen, zIndex}) => {

    const cls = [classes.backdrop,
        open ? classes.openBackdrop : "",
        blur ? classes.blur : ""
    ]



    return (
        <div
            style={{
                zIndex
            }}
            className={cls.join(" ")}
            onMouseDown={handleOpen?.bind(this, !open)}
        >

        </div>
    )
}

Backdrop.proptype = BackdropTypes;

export default Backdrop;
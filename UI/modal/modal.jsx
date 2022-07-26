import React from "react";
import big from "./bigModal.module.css";
import medium from "./mediumModal.module.css";
import small from "./smallModal.module.css";
import DefaultButton from "../buttons/default-button/default-button";
import Backdrop from "../backdrop/backdrop";
import {ModalTypes} from "./modal-types";

const classes = {
    big: big,
    medium: medium,
    small: small
}

const Modal = ({open, label, handleOpen, classname, children}) => {

    return (
        !!open && <>
            <Backdrop blur open={!!open} handleOpen={handleOpen?.bind(this, null)} zIndex={20}/>
            <div className={classes[classname].modal}>
                <header>
                    {/*<span>{open} {label}</span>*/}
                    <DefaultButton
                        color={"danger-outlined"}
                        width={60}
                        height={60}
                        label={<span className="material-icons">close</span>}
                        onClick={handleOpen?.bind(this, null)}
                    />
                </header>
                <div className={classes[classname].content}>
                    {children}
                </div>
            </div>
        </>
    )
}

Modal.propTypes = ModalTypes

export default Modal
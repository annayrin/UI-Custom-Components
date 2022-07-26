import React from "react";
import classes from "./dropdown.module.css";
import useDropdown from "./use-dropdown";
import DefaultButton from "../buttons/default-button/default-button";

const Dropdown = ({custom, listItems, onAction}) => {

    const {visible, buttonClass, showDropdown, handleLeave, handleOver} = useDropdown();

    return (
        <div className={classes.dropdown}>
            {!custom ? <div
                    className={buttonClass.join(" ")}
                    onClick={showDropdown}
                    onMouseLeave={visible ? handleLeave : null}
                    onMouseOver={visible ? handleOver : null}
                >
                    <span className={classes.account}>H</span>
                    <span
                        className="material-icons"
                    >
                    {!visible ? "keyboard_arrow_down" : "keyboard_arrow_up"}
                </span>
                </div>
                : <DefaultButton
                    width={26}
                    height={26}
                    label={<span className="material-icons">{custom}</span>}
                    color={"grey-outlined"}
                    onClick={showDropdown}
                    onMouseLeave={visible ? handleLeave : null}
                    onMouseOver={visible ? handleOver : null}
                />}
            {visible && (
                <div
                    className={classes.dropdownBody}
                >
                    <ul>
                        {
                            listItems.map((item, index) => (
                                <li className={classes.liIcons}
                                    key={`dropdown-li-${item.content}-${index}`}
                                    onClick={onAction ? onAction : null}
                                >
                                    {item.content}
                                    {item.label && <span
                                        onClick={(event) => console.log(event.target.outerText)}
                                        className="material-icons">
                                        {item.label}
                                    </span>}
                                </li>
                            ))
                        }

                    </ul>
                </div>
            )}
        </div>
    )
}

export default Dropdown
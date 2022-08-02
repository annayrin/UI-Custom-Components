import React from "react";
import classes from "./dropdown.module.css";
import useDropdown from "./use-dropdown";
import DefaultButton from "../buttons/default-button/default-button";

const Dropdown = ({custom, listItems, onAction}) => {

    const {visible, buttonClass, showDropdown, handleLeave, handleOver} = useDropdown();
    const accountName = listItems[0].content.split("@")[1]

    return (
        <div className={classes.dropdown}>
            {!custom ? <div
                    className={buttonClass.join(" ")}
                    onClick={showDropdown}
                    onMouseLeave={visible ? handleLeave : null}
                    onMouseOver={visible ? handleOver : null}
                >
                    <span className={classes.account}> {accountName[0]}</span>
                    <span
                        className="material-icons"
                    >
                    {!visible ? "keyboard_arrow_down" : "keyboard_arrow_up"}
                </span>
                </div>
                : <DefaultButton
                    width={30}
                    height={30}
                    className={classes.customHandler}
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
                                    onClick={onAction ? () => onAction(item.content) : null}
                                >
                                    {item.content}
                                    {item.label && <span
                                        onClick={onAction ? () => onAction(item.content) : null}
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
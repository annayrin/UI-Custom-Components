import {useState} from "react";
import classes from "./dropdown.module.css";

const useDropdown = () => {
    const [visible, setVisible] = useState(false);

    const buttonClass = [
        classes.dropdownIcons,
        visible? classes.hovered : ""
    ]


    const showDropdown = () => {
        setVisible(!visible)
    }

    const handleLeave = () => {
        window.onclick = () => {
            setVisible(false)
            window.onclick = null
        }
    }

    const handleOver = () => {
        window.onclick = null
    }

    return {
        visible, buttonClass, showDropdown, handleLeave, handleOver
    }
}

export default useDropdown
import PropTypes from "prop-types";
import Dropdown from "./dropdown";


Dropdown.propTypes = {
    visible: PropTypes.bool,
    buttonClass: PropTypes.string,
    custom: PropTypes.string, // to add a custom icon for the dropdown main icon / label to click and open te dropdown
    listItems: PropTypes.array, // array with objects that include {content: for the list name and/or label for icon name(not mandatory)
}
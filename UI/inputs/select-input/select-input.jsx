import React from "react";
import classes from "./select-input.module.css";
import FieldError from "../../field-error/field-error";

const SelectInput = ({
                         error,
                         label,
                         name,
                         value,
                         options,
                         id,
                         required,
                         onChange,
                         onFocus,
                         onBlur
                     }) => {

    return (
        <div className={classes.selectInput}>
            {!!label && <label htmlFor={id} className={classes.label}>{label} {required && <sup>*</sup>}</label>}
            <select
                required={required}
                className={classes.select}
                name={name}
                id={id}
                value={value}
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
            >
                <option value="">choose...</option>
                {options.length
                    ? options.map((option, index) => {

                        return (
                            <option key={`${name}-${index}`} value={option}>{option}</option>
                        )
                    })
                    : null
                }
            </select>
            <FieldError error={error}/>
        </div>
    )
}

export default SelectInput
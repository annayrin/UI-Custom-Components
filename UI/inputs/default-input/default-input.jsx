import React from "react";
import classes from "./default-input.module.css";
import FieldError from "../../field-error/field-error";

const DefaultInput = ({
                          error,
                          autoComplete,
                          required,
                          id,
                          type,
                          label,
                          className,
                          name,
                          value,
                          placeholder,
                          min,
                          max,
                          maxLength,
                          disable,
                          hidden,
                          onChange,
                          onFocus,
                          onBlur,
                          onKeyDown,
                          readOnly
                      }) => {

    return (
        <div className={classes.defaultInputContainer}>
            {!!label && <label htmlFor={id} className={classes.label}>{label} {required && <sup>*</sup>}</label>}
            <input
                autoComplete={autoComplete}
                required={required}
                className={`${classes.input} ${className}`}
                id={id}
                type={type}
                name={name}
                value={value}
                placeholder={placeholder}
                min={min}
                max={max}
                maxLength={maxLength}
                disabled={disable}
                hidden={hidden}
                onChange={onChange}
                onKeyDown={onKeyDown}
                onBlur={onBlur}
                onFocus={onFocus}
                readOnly={readOnly}
            />
            <FieldError error={error}/>
        </div>
    )
}

export default DefaultInput
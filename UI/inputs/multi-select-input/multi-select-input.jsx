import React from "react";
import classes from "./multi-select-input.module.css";
import DefaultInput from "../default-input/default-input";
import useMultiSelectInput from "./use-multi-select-input";

const MultiSelectInput = ({
                              errorMessage,
                              regexp,
                              selected,
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
                              readOnly,
                              onRemove,
                              setErrors
                          }) => {
    const {init, handleChange, handleKeyDown} = useMultiSelectInput(regexp, errorMessage, setErrors, onChange)


    return (
        <div className={classes.multiSelectInput}>
            <DefaultInput
                autoComplete={autoComplete}
                required={required}
                className={className}
                id={id}
                label={label}
                type={type}
                name={name}
                value={init}
                placeholder={placeholder}
                min={min}
                max={max}
                maxLength={maxLength}
                disabled={disable}
                hidden={hidden}
                onKeyDown={handleKeyDown}
                readOnly={readOnly}
                error={error}
                onFocus={onFocus}
                onChange={handleChange}
            />
            {selected?.length ?
                <div className={classes.domainListContainer}>
                    {selected.map((item, index) => (
                        <div key={`selected-domain-item0${index}`}>
                            <span>
                                <span className={classes.domainName}>{item}</span>
                                <span className={classes.close} onClick={onRemove.bind(this, name, index)}>
                                    <span className={`${classes.closeIcon} material-icons`}>close</span>
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
                :
                null
            }

        </div>
    )
}

export default MultiSelectInput
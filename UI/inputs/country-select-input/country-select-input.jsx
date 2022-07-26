import React, {useRef, useState} from "react";
import classes from "./country-select-input.module.css";
import countryList from 'react-select-country-list'
import DefaultInput from "../default-input/default-input";
import FieldError from "../../field-error/field-error";

const CountrySelectInput = ({
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
                                onKeyDown,
                                readOnly
                            }) => {
    const drop_ref = useRef()
    const [countries] = useState(countryList().data)
    const [finedList, setFinedList] = useState([])


    const searchWhenChange = event => {
        const {name, value} = event.target
        const fined = []
        for (let item of countries) {
            if (value.length > 0 && (item.value.toLowerCase().includes(value.toLowerCase()) || item.label.toLowerCase().includes(value.toLowerCase()))) {
                fined.push(item.label)
            }
        }
        setFinedList(fined)
        onChange(name, value)
    }

    const selectHandle = country => {
        onChange(name, country)
        setFinedList([])
    }

    return (
        <div className={classes.countrySelectInput}>
            <div className={classes.fieldContent}>
                <DefaultInput
                    autoComplete={autoComplete}
                    required={required}
                    className={className}
                    id={id}
                    label={label}
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    min={min}
                    max={max}
                    maxLength={maxLength}
                    disabled={disable}
                    hidden={hidden}
                    onKeyDown={onKeyDown}
                    onFocus={onFocus}
                    readOnly={readOnly}
                    onBlur={event => {
                        if (event.relatedTarget !== drop_ref.current) {
                            setFinedList([])
                        }
                    }}
                    onChange={searchWhenChange}
                />
                {finedList?.length ?
                    <div tabIndex={0} ref={drop_ref} className={classes.countryListContainer}>
                        <ul>
                            {finedList.map((item, index) => (
                                <li key={`country-selector-item-list-${index}`} onClick={selectHandle.bind(this, item)}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                    :
                    null
                }
            </div>
            <FieldError error={error}/>
        </div>
    )
}

export default CountrySelectInput
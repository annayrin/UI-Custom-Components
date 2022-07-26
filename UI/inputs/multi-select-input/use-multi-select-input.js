import {useState} from "react";

const useMultiSelectInput = (regexp, errorMessage, setError,onChange) => {
    const [init, setInit] = useState('')

    const handleChange = event => {
        if (event.target.value !== " " && event.keyCode !== 13 && event.code !== "Space" && event.code !== "Enter" && event.code !== "NumpadEnter") {
            setInit(event.target.value.trim())

        }
    }

    const handleKeyDown = event => {
        if ((event.keyCode === 13 || event.code === "Space" || event.code === "Enter" || event.code === "NumpadEnter") && init !== "" && init.length > 0) {
            event.preventDefault()
            if (regexp) {
                if (event.target.value.trim().match(regexp)) {
                    onChange(event.target.name, init)
                    setInit('')
                } else {
                    setError(event.target.name, errorMessage)
                }
            } else {
                onChange(event.target.name, init)
                setInit('')
            }
        }
    }

    return {
        init,
        handleChange,
        handleKeyDown
    }
}

export default useMultiSelectInput
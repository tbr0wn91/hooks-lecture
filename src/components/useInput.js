import {useState} from 'react';

export default function useInput(initialValue){
    const [value, setValue ] = useState(initialValue)

    const changeHandler = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChange: changeHandler
    }
}
import { useState } from "react"

export const useForm = (initialState={} ) => {

    const [formvalues, setValues] = useState(initialState);

    const reset =()=>{
        setValues( initialState );
    }

    const handleInputChange = ({target})=>{

        setValues({
            ...formvalues,
            [target.name]:target.value
        })


    }


    return [formvalues,handleInputChange,reset]


}

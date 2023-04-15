import { VStack } from "@chakra-ui/react";
import { useMemo, useState } from "react";

const FormInput = (props) => {
    const { label, errorMessage, onChange, id, reset, ...input } = props;
    const [ focused, setFocused ] = useState(false);
    const handleFocus = () => {
        setFocused(true);
    }
    useMemo(()=> {
        setFocused(false);
    },[reset])
    return (  
        <VStack className="input-container" width='100%'>
            <label>{label}</label>
            <input {...input} onChange={onChange} onBlur={handleFocus} focused={focused.toString()} onFocus={(e) => input.name === "confirmPassword" && setFocused(true)} />
            <span>{errorMessage}</span>
        </VStack>
    );
}
 
export default FormInput;
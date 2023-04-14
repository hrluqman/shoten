import { Button } from '@chakra-ui/react'
import FormInput from './FormInput';
import { useState } from "react";

const FormCreate = () => {

    const [values, setValues] = useState({
        title: "",
        price: "",
        author: "",
    });
    
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "Title",
            type: "text",
            errorMessage: "Title should be 1-50 characters and contain only letters and numbers!",
            pattern: "^[A-Za-z0-9 ]{1,50}$",
            required: true,
        },
        {
            id: 2,
            name: "price",
            label: "Price",
            type: "number",
            errorMessage: "Price should be numbers!",
            pattern: "^[1-9]\d*(\.\d{1,2})?$",
            required: true,
        },
        {
            id: 3,
            name: "author",
            label: "Author",
            type: "text",
            errorMessage: "Author should be 1-20 characters and contain only letters!",
            pattern: "^[A-Za-z]{1,20}$",
            required: true,
        }
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (  
        <form className="form-container" onSubmit={handleSubmit}>
            {inputs.map((input)=> (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
            ))}
            <Button bg='gray.300' width="100%" mt={4} type='submit'>Submit</Button>
        </form>
    );
}
 
export default FormCreate;
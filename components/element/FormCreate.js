import { VStack, Button, Spinner, useToast } from '@chakra-ui/react'
import FormInput from './FormInput';
import { useState } from "react";

const FormCreate = () => {

    const toast = useToast()
    const [ loading, setLoading ] = useState(false)
    const [ reset, setReset ] = useState(false)

    const [values, setValues] = useState({
        title: "",
        price: "",
        author: "",
        status: "available"
    })
    
    const inputs = [
        {
            id: 1,
            name: "title",
            label: "Title",
            type: "text",
            errorMessage: "Title should be 1-60 characters and contain only letters and numbers!",
            pattern: `^[a-zA-Z0-9!@#$%^&*()_+-=':",./? ]{1,60}$`,
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
            pattern: "^[A-Za-z ]{1,20}$",
            required: true,
        }
    ]

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const dataInput = {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json'
            }
        }
        await fetch('/api/postProducts', dataInput).then((response)=>{return response.json()}).then((data) => {
            if(data.status=="Success") {
                setReset(true)
                setValues({
                    title: "",
                    price: "",
                    author: "",
                    status: "available"
                });
                setLoading(false);
                setTimeout(() => {
                    setReset(false)
                }, 500);
                toast({
                    title: `Submit Successfully!`,
                    status: 'success',
                    isClosable: true,
                })
            }
        }).catch(error => console.error('Error:', error));
    }

    return (  
        <form className="form-container" onSubmit={handleSubmit}>
            {inputs.map((input)=> (
                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} reset={reset} />
            ))}
            <VStack className="input-container" width='100%'>
                <label className="status">Status <span className="info-status">(Only book with 'Available' status will be shown in the home page)</span></label>
                <select id="status" name="status" onChange={onChange}>
                    <option value="available">Available</option>
                    <option value="unavailable">Unavailable</option>
                </select>
            </VStack>
            <Button bg='gray.300' width="100%" mt={4} type='submit'> {loading && <Spinner mr={3} />} Submit</Button>
        </form>
    );
}
 
export default FormCreate;
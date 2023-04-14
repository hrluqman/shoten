import Navbar from "@/components/element/Navbar";
import PageHead from "@/components/element/PageHead";
import FormInput from "@/components/element/FormInput";
import color from "@/lib/color";
import { VStack, Heading, Box, Button, Link, Text } from "@chakra-ui/react";
import { useState } from "react";

const Login = () => {

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "name",
            label: "Name",
            type: "text",
            errorMessage: "Name should be 3-10 characters and contain only letters!",
            pattern: "^[A-Za-z]{3,10}$",
            required: true,
        },
        {
            id: 2,
            name: "password",
            label: "Password",
            type: "password",
            errorMessage: "Password should be 6-10 characters and contain only letters and numbers!",
            pattern: "^[A-Za-z0-9]{6,10}$",
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
        <>
            <PageHead title='Admin Login' />  
            <Navbar />
            <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                <Heading as='h2' color={color['white']}>Admin Login</Heading>
                <Box bg={color['white']} width={{ base: '70%', md: '50%', lg: '40%' }} px={4} py={6} borderRadius='12px'>
                    <form className="form-container" onSubmit={handleSubmit}>
                        {inputs.map((input)=> (
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                        ))}
                        <Button bg='gray.300' width="100%" mt={4} type='submit'>Login</Button>
                    </form>
                    <Link href="/signup" _hover={{color: color['primary']}}><Text fontSize='xs' textAlign='right' mt={3} width='90%' mx='auto'>Sign up as an admin</Text></Link>
                </Box>
            </VStack>
        </>
    );
}
 
export default Login;
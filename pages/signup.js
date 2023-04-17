import Navbar from "@/components/element/Navbar";
import PageHead from "@/components/element/PageHead";
import FormInput from "@/components/element/FormInput";
import color from "@/lib/color";
import { VStack, Heading, Box, Button, Link, Text, Spinner, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useSession } from 'next-auth/react'

const Signup = () => {

    const { data } = useSession()
    const toast = useToast()
    const [ loading, setLoading ] = useState(false)
    const [ reset, setReset ] = useState(false)

    const [values, setValues] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            name: "email",
            label: "Email",
            type: "email",
            errorMessage: "Please include a valid email address!",
            required: true,
        },
        {
            id: 3,
            name: "password",
            label: "Password",
            type: "password",
            errorMessage: "Password should be 6-10 characters and contain only letters and numbers!",
            pattern: "^[A-Za-z0-9]{6,10}$",
            required: true,
        },
        {
            id: 4,
            name: "confirmPassword",
            label: "Confirm Password",
            type: "password",
            errorMessage: "Password don't match!",
            pattern: values.password,
            required: true,
        }
    ]

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(data?.user) {
            toast({
                title: `Please logout to sign up a new user.`,
                status: 'error',
                isClosable: true,
            })
        }
        else {
            setLoading(true);
            const dataInput = {
                method: 'POST',
                body: JSON.stringify({
                    name: values.name,
                    email: values.email,
                    password: values.password
                }),
                headers: {
                  'Content-Type': 'application/json'
                }
            }
            await fetch('/api/userSignup', dataInput).then((response)=>{return response.json()}).then((data) => {
                if(data.status=="Success") {
                    setReset(true)
                    setValues({
                        name: "",
                        email: "",
                        password: "",
                        confirmPassword: "",
                    });
                    setLoading(false);
                    setTimeout(() => {
                        setReset(false)
                    }, 500);
                    toast({
                        title: `Signed Up Successfully!`,
                        status: 'success',
                        isClosable: true,
                    })
                }
                else {
                    toast({
                        title: data.status,
                        status: 'error',
                        isClosable: true,
                    })
                    setLoading(false);
                }
            }).catch(error => console.error('Error:', error));
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (  
        <>
            <PageHead title='Admin Sign Up' />  
            <Navbar />
            <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                <Heading as='h2' color={color['white']}>Admin Sign Up</Heading>
                <Box bg={color['white']} width={{ base: '70%', md: '50%', lg: '40%' }} px={4} pb={6} pt={3} borderRadius='12px'>
                    <form className="form-container" onSubmit={handleSubmit}>
                        {inputs.map((input)=> (
                            <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} reset={reset} />
                        ))}
                        <Button bg='gray.300' width="100%" mt={4} type='submit'>{loading && <Spinner mr={3} />} Sign Up</Button>
                    </form>
                    <Link href="/login" _hover={{color: color['primary']}}><Text fontSize='xs' textAlign='center' mt={3} width='90%' mx='auto'>Back to Login</Text></Link>
                </Box>
            </VStack>
        </>
    );
}
 
export default Signup;
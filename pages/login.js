import Navbar from "@/components/element/Navbar";
import PageHead from "@/components/element/PageHead";
import FormInput from "@/components/element/FormInput";
import color from "@/lib/color";
import { useRouter } from 'next/router';
import { VStack, Heading, Box, Button, Link, Text, Spinner, useToast } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { signIn, signOut, useSession } from 'next-auth/react'

const Login = () => {
    const router = useRouter()
    const { data } = useSession()
    const [logged, setLogged] = useState(false)
    const toast = useToast()
    const [ loading, setLoading ] = useState(false)

    const [values, setValues] = useState({
        email: "",
        password: "",
    });

    const inputs = [
        {
            id: 1,
            name: "email",
            label: "Email",
            type: "email",
            errorMessage: "Please include a valid email address!",
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

    useEffect(()=>{
        if(data?.user) setLogged(true)
        else setLogged(false)
    },[])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const data = await signIn('credentials', {
                redirect: false,
                email: values.email,
                password: values.password
            });

            if(data.status == 200) {
                toast({
                    title: `Logged In Successfully!`,
                    status: 'success',
                    isClosable: true,
                })
                router.push('/admin/dashboard')
                setLogged(true)
            }
            else {
                toast({
                    title: data.error,
                    status: 'error',
                    isClosable: true,
                })
            };
            setLoading(false)
        }
        catch(error) {
            console.log(error);
        }
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }

    return (  
        <>
            <PageHead title='Admin Login' />  
            <Navbar />
                {!logged && 
                    <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                    <Heading as='h2' color={color['white']}>Admin Login</Heading>
                    <Box bg={color['white']} width={{ base: '70%', md: '50%', lg: '40%' }} px={4} py={6} borderRadius='12px'>
                        <form className="form-container" onSubmit={handleSubmit}>
                            {inputs.map((input)=> (
                                <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} />
                            ))}
                            <Button bg='gray.300' width="100%" mt={4} type='submit'>{loading && <Spinner mr={3} />} Login</Button>
                        </form>
                        <Link href="/signup" _hover={{color: color['primary']}}><Text fontSize='xs' textAlign='right' mt={3} width='90%' mx='auto'>Sign up as an admin</Text></Link>
                    </Box>
                    </VStack>
                }
                {logged && 
                    <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                        <Box width={{ base: '70%', md: '50%', lg: '40%' }} px={4} py={6} borderRadius='12px'>
                            <Heading as='h2' color={color['white']} textAlign='center'>Welcome, {data?.user.name}</Heading>
                            <Button bg='gray.300' width="100%" mt={4}><Link href="/admin/dashboard">Go to Dashboard</Link></Button>
                            <Button bg='gray.300' width="100%" mt={4} onClick={()=>signOut({callbackUrl: '/'})}>Log Out</Button>
                        </Box>
                    </VStack>
                }
        </>
    );
}
 
export default Login;
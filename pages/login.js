import Navbar from "@/components/element/Navbar";
import PageHead from "@/components/element/PageHead";
import { VStack, Heading, FormControl, FormLabel, Input, Box, Button, Link, Text } from "@chakra-ui/react";
import color from "@/lib/color";

const Login = () => {
    return (  
        <>
            <PageHead title='Admin Login' />  
            <Navbar />
            <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                <Heading as='h2' color={color['white']}>Admin Login</Heading>
                <Box bg={color['white']} width={{ base: '70%', md: '50%', lg: '40%' }} px={4} py={6} borderRadius='12px'>
                    <FormControl width='90%' justifyItems='center' mx="auto">
                        <FormLabel mb={1} fontSize='sm'>Email</FormLabel>
                        <Input id="email" type='email' borderColor={color['primary']} _hover={{borderColor: color['primary']}} />
                        <FormLabel mb={1} mt={3} fontSize='sm'>Password</FormLabel>
                        <Input id="password" type='password' borderColor={color['primary']} _hover={{borderColor: color['primary']}} />
                        <Button bg='gray.300' width="100%" mt={4} type='submit'>Login</Button>
                    </FormControl>
                    <Link href="/signup" _hover={{color: color['primary']}}><Text fontSize='xs' textAlign='right' mt={3} width='90%' mx='auto'>Sign up as an admin</Text></Link>
                </Box>
            </VStack>
        </>
    );
}
 
export default Login;
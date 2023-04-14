import Navbar from "@/components/element/Navbar";
import PageHead from "@/components/element/PageHead";
import { VStack, Heading, FormControl, FormLabel, Input, Box, Button, Link, Text } from "@chakra-ui/react";
import color from "@/lib/color";

const Signup = () => {
    return (  
        <>
            <PageHead title='Admin Sign Up' />  
            <Navbar />
            <VStack bg={color['primary']} justifyContent='center' alignItems='center' height='100vh'>
                <Heading as='h2' color={color['white']}>Admin Sign Up</Heading>
                <Box bg={color['white']} width={{ base: '70%', md: '50%', lg: '40%' }} px={4} py={6} borderRadius='12px'>
                    <FormControl width='90%' justifyItems='center' mx="auto">
                        <FormLabel mb={1} fontSize='sm'>Email</FormLabel>
                        <Input id="email" type='email' borderColor={color['primary']} _hover={{borderColor: color['primary']}} />
                        <FormLabel mb={1} mt={3} fontSize='sm'>Password</FormLabel>
                        <Input id="password" type='password' borderColor={color['primary']} _hover={{borderColor: color['primary']}} />
                        <Button bg='gray.300' width="100%" mt={4} type='submit'>Sign Up</Button>
                        <Link href="/login" _hover={{color: color['primary']}}><Text fontSize='xs' textAlign='center' mt={3} width='90%' mx='auto'>Back to Login</Text></Link>
                    </FormControl>
                </Box>
            </VStack>
        </>
    );
}
 
export default Signup;
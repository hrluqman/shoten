import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Input,
    Button
  } from '@chakra-ui/react'
import color from '@/lib/color';

const FormCreate = () => {
    return (  
        <FormControl isRequired>
            <FormLabel mb={1} fontSize='sm'>Book Title</FormLabel>
            <Input id="title" type='text' maxLength={50} borderColor={color['primary']} mb={3} _hover={{borderColor: color['primary']}} />
            <FormErrorMessage>Email is required.</FormErrorMessage>
            <FormLabel mb={1} fontSize='sm'>Price</FormLabel>
            <Input id="price" type='number' borderColor={color['primary']} mb={3} _hover={{borderColor: color['primary']}} />
            <FormLabel mb={1} fontSize='sm'>Author</FormLabel>
            <Input id="author" type='text' maxLength={20} borderColor={color['primary']} mb={3} _hover={{borderColor: color['primary']}} />
            <Box display='flex' justifyContent='center' alignItems='center' width='100%'>
                <Button bg='gray.300' width="50%" mt={4} mx='auto' type='submit'>Submit</Button>
            </Box>
        </FormControl>
    );
}
 
export default FormCreate;
import FormCreate from "../element/FormCreate";
import { VStack, Heading } from "@chakra-ui/react";

const CreateProduct = () => {
    return (  
        <VStack justifyContent='start' width='100%' px={4} pt={4}>
            <Heading as='h2' textAlign='left' width='100%'>Create Product</Heading>
            <FormCreate />
        </VStack>
    );
}
 
export default CreateProduct;
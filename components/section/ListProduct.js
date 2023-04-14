import { VStack, Heading } from "@chakra-ui/react";
import TableList from "../element/TableList";

const ListProduct = () => {
    return (  
        <VStack justifyContent='start' width='100%' px={4} pt={4}>
            <Heading as='h2' textAlign='left' width='100%'>List of Product</Heading>
            <TableList />
        </VStack>
    );
}
 
export default ListProduct;
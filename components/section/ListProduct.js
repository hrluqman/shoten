import { VStack, Heading, Text } from "@chakra-ui/react";
import TableList from "../element/TableList";

const ListProduct = ({ data, paginateList, currentPage }) => {
    return (  
        <VStack justifyContent='start' width='100%' px={4} pt={4}>
            <Heading as='h2' textAlign='left' width='100%'>List of Product</Heading>
            <Text fontSize='xs' fontStyle='italic' textAlign='left' width='100%' m={0}>*Refresh page to get the latest data.</Text>
            <TableList data={data} paginateList={paginateList} currentPage={currentPage} />
        </VStack>
    );
}
 
export default ListProduct;
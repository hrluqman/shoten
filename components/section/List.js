import { VStack, Heading, Grid, Box, Flex, Link } from "@chakra-ui/react";
import Book from "../element/Book";

const List = () => {
    return (  
        <section id="bookList">
            <VStack py={4}>
                <Heading as='h2' fontSize='5xl' textAlign='center'>Best Seller</Heading>
                <Box w='80%' h={0.5} bg="#272727"></Box>
                <Grid w='80%' templateColumns='repeat(4, 1fr)' gap={6} py={5}>
                    <Book />
                    <Book />
                    <Book />
                    <Book />

                    <Book />
                    <Book />
                    <Book />
                    <Book />
                </Grid>
                <Flex className="pagination-container" width='100%' justifyContent='center' alignItems='center'>
                    <Link className='page-link' mx={3} my={3}>&laquo;</Link>
                    <Link className='page-link active' mx={3} my={3}>1</Link>
                    <Link className='page-link' mx={3} my={3}>&raquo;</Link>
                </Flex>
            </VStack>
        </section>
    );
}
 
export default List;

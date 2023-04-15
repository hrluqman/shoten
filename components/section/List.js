import { VStack, Heading, Grid, Box, Flex, Link, Spinner } from "@chakra-ui/react";
import Book from "../element/Book";

const List = ({ data, paginateList, currentPage, loading }) => {
    const bookList = data.data;
    const totalPage = data.totalPage;
    var pagesArray = [];
    for (var i = 1; i <= totalPage; i++) {
        var classStr = `page-link ${(i==currentPage) ? 'active' : ''}`;
        pagesArray.push(<Link key={i} id={i} className={classStr} mx={3} my={3} onClick={paginateList}>{i}</Link>);
    }
    return (  
        <section id="bookList">
            <VStack py={4}>
                {loading && <Box display='flex' alignItems='center' bg={'gray.300'} zIndex={20} p={5} borderRadius={12} position='fixed' top='40%' style={{boxShadow: '0px 10px 40px 10px rgba(39,39,39,0.5)'}}><Spinner mr={4} /> Loading Data</Box>}
                <Heading as='h2' fontSize='5xl' textAlign='center'>Best Seller</Heading>
                <Box w='80%' h={0.5} bg="#272727"></Box>
                <Grid w='80%' templateColumns='repeat(4, 1fr)' gap={6} py={5}>
                    {bookList.map((book)=> (
                        <Book key={book.id} {...book} />
                    ))}
                </Grid>
                <Flex className="pagination-container" width='100%' justifyContent='center' alignItems='center'>
                    {pagesArray}
                </Flex>
            </VStack>
        </section>
    );
}
 
export default List;

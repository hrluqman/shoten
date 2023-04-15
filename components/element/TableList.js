import {
    VStack,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Flex,
    Link,
    Box
  } from '@chakra-ui/react'
import { AiOutlineEdit } from "react-icons/ai";
import color from '@/lib/color';

const TableList = ({ data, paginateList, currentPage }) => {
    const bookList = data.data;
    const totalPage = data.totalPage;
    var pagesArray = [];
    for (var i = 1; i <= totalPage; i++) {
        var classStr = `page-link ${(i==currentPage) ? 'active' : ''}`;
        pagesArray.push(<Link key={i} id={i} className={classStr} mx={3} my={3} onClick={paginateList}>{i}</Link>);
    }
    return (  
        <VStack width='100%'>
            <TableContainer width='100%' style={{border: `1px solid ${color['secondary']}`}}>
                <Table variant='simple'>
                    <Thead bg={color['secondary']}>
                        <Tr>
                            <Th color={color['white']}>ID</Th>
                            <Th color={color['white']}>Title</Th>
                            <Th color={color['white']}>Price (RM)</Th>
                            <Th color={color['white']}>Author</Th>
                            <Th color={color['white']}>Status</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {bookList.map((book)=>(
                            <Tr key={book.id}>
                                <Td>{book.id}</Td>
                                <Td textTransform='capitalize'>{book.book_title}</Td>
                                <Td>{book.book_price}</Td>
                                <Td>{book.book_author}</Td>
                                <Td textTransform='capitalize'>{book.book_status}</Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex className="pagination-container" width='100%' justifyContent='center' alignItems='center'>
                {pagesArray}
            </Flex>
        </VStack>
    );
}
 
export default TableList;
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
    Link
  } from '@chakra-ui/react'
import color from '@/lib/color';

const TableList = () => {
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
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td>1</Td>
                            <Td>The Tale of Uzumaki Naruto</Td>
                            <Td>120.00</Td>
                            <Td>Jiraiya</Td>
                        </Tr>
                        <Tr>
                            <Td>2</Td>
                            <Td>The Tale of Uzumaki Naruto</Td>
                            <Td>120.00</Td>
                            <Td>Jiraiya</Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
            <Flex className="pagination-container" width='100%' justifyContent='center' alignItems='center'>
                <Link className='page-link' mx={3} my={3}>&laquo;</Link>
                <Link className='page-link active' mx={3} my={3}>1</Link>
                <Link className='page-link' mx={3} my={3}>&raquo;</Link>
            </Flex>
        </VStack>
    );
}
 
export default TableList;
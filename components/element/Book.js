import { VStack, Heading, Box, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

const Book = ({...book}) => {
    return (  
        <Link className="book-detail" _hover={{textDecoration: 'none'}}>
            <VStack w='100%' pt={4}>
                <Box className="img-container" bg={'gray.300'} w='100%' borderRadius='12px' position='relative' justifyContent='center' alignItems='center'>
                    <Image src="/images/book-coverr.png" width={450} height={450} className="book-cover" alt="book-cover" />
                </Box>
                <Box w='100%' pl={2} pb={0}>
                    <Heading as='h3' fontSize='md' textAlign='left' mb={1}>{book.book_title}</Heading>
                    <Text opacity={0.8} fontSize='2xs' textAlign='left'>By {book.book_author}</Text>
                    <Text opacity={0.8} fontSize='xs' fontWeight='semibold' textAlign='left' color='#009FB7'>RM {book.book_price}</Text>
                </Box>
            </VStack>
        </Link>
    );
}
 
export default Book;

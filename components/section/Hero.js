import { Flex, Box, Heading, Button, Link, Text } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import Image from "next/image";

const Hero = () => {
    return (  
        <section className="hero-section">
            <Flex width={{base:'90%', md: '80%'}} margin="0 auto" h="80vh" justifyContent="center" alignItems="center">
                <Box>
                    <Heading as="h1" fontSize='7xl' mr={0}>Best Place to Find Your Favorite Books.</Heading>
                    <Text>Discover thousands of book title with the best price offered here.</Text>
                    <Text>Available for worldwide shipping and payment.</Text>
                    <Link href='/#bookList'>
                        <Button fontSize="sm" borderColor="#272727" borderWidth={2} borderRadius={0} color="#272727" variant='outline' mt={3} className="btn-action">
                            Explore Now
                            <Box className="arrow-action"><AiOutlineArrowRight /></Box>
                        </Button>
                    </Link>
                </Box>
                <Box>
                    <Image src="/images/hero-cover.png" width={600} height={600} className="hero-cover" alt="hero-cover" />
                </Box>
            </Flex>
            <Box w={100}></Box>
        </section>
    );
}
 
export default Hero;
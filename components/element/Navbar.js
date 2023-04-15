import { 
    HStack, 
    Flex, 
    Box, 
    Link,
    Text, 
    Drawer, 
    DrawerBody, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton,
    useDisclosure  
} from "@chakra-ui/react";
import { useState, useEffect, useMemo } from "react";
import { AiOutlineLogin, AiOutlineLogout, AiOutlineMenu } from "react-icons/ai";
import color from "@/lib/color";
import { signOut, useSession } from 'next-auth/react'

const Navbar = () => {
    const { data } = useSession()
    const [logged, setLogged] = useState(false)
    const [filter, setFilter] = useState('none');
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150) setFilter('#EFF1F3');
            else setFilter('none');
        });
    }, []);

    useMemo(()=>{
        if(data?.user) setLogged(true)
        else setLogged(false)
    },[data])
    
    const [size, setSize] = useState("xs")
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const handleClick = (newSize) => {
      setSize(newSize)
      onOpen()
    }

    return (  
        <Flex as="nav" w="100%" zIndex={9} flexDirection="row" justifyContent="space-between" alignItems="center" paddingInline={4} paddingBlock={3} style={{position: "fixed", top: "0", background: filter}}>
            <Link className="nav-title" fontSize='xl' fontWeight='bold' style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} href="/">Shoten Club</Link>
            <Flex display={{ base: 'none', md: 'flex' }}>
                <Link className="menu" fontSize='xs' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="/">BOOKS</Link>
                <Link className="menu" fontSize='xs' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="#">SHOP</Link>
                <Link className="menu" fontSize='xs' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="#">ABOUT</Link>
                {!logged && 
                <Link className="menu login" fontSize='lg' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="/login">
                    <HStack overflow='hidden'>
                        <AiOutlineLogin /><Text className="log-text" fontSize='xs'>LOGIN</Text>
                    </HStack>
                </Link>
                }
                {logged && 
                <Link className="menu login" fontSize='lg' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} onClick={()=>signOut({callbackUrl: '/'})}>
                    <HStack overflow='hidden'>
                        <AiOutlineLogout /><Text className="log-text" fontSize='xs'>LOGOUT</Text>
                    </HStack>
                </Link>
                }
            </Flex>
            <Box display={{ base: 'inline-block', md: 'none' }}>
                <AiOutlineMenu cursor="pointer" color={color['black']} fontSize='28px' onClick={() => handleClick(size)} key={size} m={4} />
            </Box>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerHeader>
                    <Flex justifyContent="space-between" alignItems="center">
                        <DrawerCloseButton className="modeText" fontSize="lg" m={4} />
                    </Flex>
                </DrawerHeader>
                <DrawerBody>
                    <Flex h="100%" flexDirection="column" justifyContent="center" alignItems="center">
                        <Box as="nav">
                            <Link _hover={{textDecoration: 'none'}}  href={`/`} onClick={onClose}>
                                <Text className="menuButton modeText" textAlign="center" style={{ textDecoration: 'none', padding: "20px 20px" }} marginInline={{base: 4, lg: 8}}>BOOKS</Text>
                            </Link>
                            <Text className="menuButton modeText" textAlign="center" style={{ textDecoration: 'none', padding: "20px 20px" }} marginInline={{base: 4, lg: 8}}>SHOP</Text>
                            <Link _hover={{textDecoration: 'none'}}  href={`/login`} onClick={onClose}>
                                <Text className="menuButton modeText" textAlign="center" style={{ textDecoration: 'none', padding: "20px 20px" }} marginInline={{base: 4, lg: 8}}>LOGIN</Text>
                            </Link>
                        </Box>
                    </Flex>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Flex>
    );
}
 
export default Navbar;
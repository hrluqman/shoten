import { Flex, Link, HStack, Text } from "@chakra-ui/react";
import color from "@/lib/color";
import { AiOutlineLogout } from "react-icons/ai";

const DashboardNav = () => {    
    return (  
        <Flex as="nav" w="100%" zIndex={9} flexDirection="row" justifyContent="space-between" alignItems="center" paddingInline={4} paddingBlock={3} style={{background: color['secondary']}}>
            <Link className="nav-title" color={color['white']} fontSize='xl' fontWeight='bold' style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} href="/">Shoten Club</Link>
            <Flex>
                <Link className="menu" color={color['white']} fontSize='xs' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="/admin/dashboard">DASHBOARD</Link>
                <Link className="menu" color={color['white']} fontSize='xs' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="#">SETTINGS</Link>
                <Link className="menu login" color={color['white']} fontSize='lg' fontWeight="semibold" style={{ textDecoration: 'none' }} _focus={{boxShadow: 'none'}} mx={3} href="/login">
                    <HStack overflow='hidden'>
                        <AiOutlineLogout /><Text className="log-text" fontSize='xs'>LOGOUT</Text>
                    </HStack>
                </Link>
            </Flex>
        </Flex>
    );
}
 
export default DashboardNav;
import PageHead from "@/components/element/PageHead";
import DashboardNav from "@/components/element/DashboardNav";
import CreateProduct from "@/components/section/CreateProduct";
import ListProduct from "@/components/section/ListProduct";
import { VStack, HStack, Box } from "@chakra-ui/react";
import color from "@/lib/color";
import { useState } from "react";

const Dashboard = () => {
    const [activeMenu, setActiveMenu] = useState('list');
    
    const menuHandler = (menu) => {
        setActiveMenu(menu)
    }

    return (  
        <>
            <PageHead title='Admin Dashboard' />  
            <HStack justifyContent='start' alignItems='start'>
                <VStack>
                    <VStack className="side-nav" bg={color['secondary']} borderRight='2px' borderColor={color['black']} width='20%' minHeight='100vh' minWidth='15rem' mt={0}>
                        <Box className="side-menu" fontWeight='bold' textAlign='left' width='100%' color={color['white']} py='0.9rem' pl={4}>Hi, User.</Box>
                        <Box className="side-menu" style={{background: `${activeMenu=='list' ? color['primary'] : color['secondary']}`}} textAlign='left' width='100%' cursor='pointer' color={color['white']} py={4} pl={4} _hover={{background: color['primary']}} onClick={() => menuHandler('list')}>All Products</Box>
                        <Box className="side-menu" style={{background: `${activeMenu=='create' ? color['primary'] : color['secondary']}`}} textAlign='left' width='100%' cursor='pointer' color={color['white']} py={4} pl={4} _hover={{background: color['primary']}} onClick={() => menuHandler('create')}>Create Product</Box>
                    </VStack>
                </VStack>
                <VStack width='100%' className="dashboard-container">
                    <DashboardNav />
                    {activeMenu=='create' && <CreateProduct />}
                    {activeMenu=='list' && <ListProduct />}
                </VStack>
            </HStack>
        </>
    );
}
 
export default Dashboard;
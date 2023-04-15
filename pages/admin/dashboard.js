import PageHead from "@/components/element/PageHead";
import DashboardNav from "@/components/element/DashboardNav";
import CreateProduct from "@/components/section/CreateProduct";
import ListProduct from "@/components/section/ListProduct";
import { VStack, HStack, Box, Spinner } from "@chakra-ui/react";
import color from "@/lib/color";
import { useState } from "react";

const Dashboard = ({ dataProps }) => {
    const [data, setData] = useState(dataProps)
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [activeMenu, setActiveMenu] = useState('list')
    const menuHandler = (menu) => {
        setActiveMenu(menu)
    }

    const paginateList = (e) => {
        setLoading(true);
        setCurrentPage(Number(e.target.id));
        var offset = (Number(e.target.id) - 1) * 8;
        fetch(`/api/getProducts?offset=${offset}`).then((res) => res.json())
        .then((resData) => {
            setData(resData);
            setLoading(false);
        })
    }

    return (  
        <>
            <PageHead title='Admin Dashboard' />  
            <HStack justifyContent='start' alignItems='stretch'>
                <VStack>
                    <VStack className="side-nav" bg={color['secondary']} borderRight='2px' borderColor={color['black']} width='20%' height='100%' minHeight='100vh' minWidth='15rem' mt={0}>
                        <Box className="side-menu" fontWeight='bold' textAlign='left' width='100%' color={color['white']} py='0.9rem' pl={4}>Hi, User.</Box>
                        <Box className="side-menu" style={{background: `${activeMenu=='list' ? color['primary'] : color['secondary']}`}} textAlign='left' width='100%' cursor='pointer' color={color['white']} py={4} pl={4} _hover={{background: color['primary']}} onClick={() => menuHandler('list')}>All Products</Box>
                        <Box className="side-menu" style={{background: `${activeMenu=='create' ? color['primary'] : color['secondary']}`}} textAlign='left' width='100%' cursor='pointer' color={color['white']} py={4} pl={4} _hover={{background: color['primary']}} onClick={() => menuHandler('create')}>Create Product</Box>
                    </VStack>
                </VStack>
                <VStack width='100%' className="dashboard-container">
                    <DashboardNav />
                    {loading && <Box display='flex' alignItems='center' bg={'gray.300'} p={5} borderRadius={12} position='fixed' top='40%' style={{boxShadow: '0px 10px 40px 10px rgba(39,39,39,0.5)'}}><Spinner mr={4} /> Loading Data</Box>}
                    {activeMenu=='create' && <CreateProduct />}
                    {activeMenu=='list' && <ListProduct data={data} paginateList={paginateList} currentPage={currentPage} />}
                </VStack>
            </HStack>
        </>
    );
}
 
export default Dashboard;

export async function getServerSideProps() {

    const res = await fetch(`https://shoten.vercel.app/api/getProducts?offset=0`)
    const dataProps = await res.json()

    return { props: { dataProps } }
}
import Navbar from "./element/Navbar";
import Hero from "./section/Hero";
import List from "./section/List";

const Main = ({ data, paginateList, currentPage, loading }) => {
    return (
        <>
            <Navbar />
            <Hero />
            <List data={data} paginateList={paginateList} currentPage={currentPage} loading={loading} />
        </>
    );
}
 
export default Main;
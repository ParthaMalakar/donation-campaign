import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <div className="mt-20">
            <CategoryList></CategoryList>
            </div>
            
        </div>
    );
};

export default Home;
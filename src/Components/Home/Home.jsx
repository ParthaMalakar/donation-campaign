import { useState } from "react";
import Banner from "../Banner/Banner";
import CategoryList from "../CategoryList/CategoryList";

const Home = () => {
    const [display, setDisplay] = useState([]);
    const [allCategory, setAllCategory] = useState([]);
    const allDonation =(categorys)=>{
        setAllCategory(categorys)}
    const handleFilter = input =>{
        if(input === ''){
            setDisplay(allCategory);
        }
        else if (input === 'Health'){
            const remoteJobs = allCategory.filter(job => job.category === 'Health');
            setDisplay(remoteJobs);
        }
        else if (input === 'health'){
            const remoteJobs = allCategory.filter(job => job.category === 'Health');
            setDisplay(remoteJobs);
        }
        else if (input === 'Education'){
            const education = allCategory.filter(job => job.category === 'Education');
            setDisplay(education);
        }
        else if (input === 'education'){
            const education = allCategory.filter(job => job.category === 'Education');
            setDisplay(education);
        }
        else if (input === 'Clothing'){
            const Clothing = allCategory.filter(job => job.category === 'Clothing');
            setDisplay(Clothing);
        }
        else if (input === 'clothing'){
            const Clothing = allCategory.filter(job => job.category === 'Clothing');
            setDisplay(Clothing);
        }
        else if (input === 'Food'){
            const Food = allCategory.filter(job => job.category === 'Food');
            setDisplay(Food);
        }
        else if (input === 'food'){
            const Food = allCategory.filter(job => job.category === 'Food');
            setDisplay(Food);
        }
        
    }
   
    return (
        <div >
            <Banner handleFilter={handleFilter} ></Banner>
            <div className="mt-20">
            <CategoryList allDonation={allDonation} display={display}></CategoryList>
            </div>
            
        </div>
    );
};

export default Home;
import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = ({allDonation ,display}) => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('../../../public/donationData.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, [])
    const senddata =()=>{
        allDonation(categorys);
    }
    senddata();
    console.log(display.length)
    return (
        <div className="grid md:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10 ">
            {display.length==0 ? categorys.map(category => <Category
             key={category.id} category={category}></Category> ): display.map(category => <Category
                key={category.id} category={category}></Category> )}
        </div>
    );
};

export default CategoryList;
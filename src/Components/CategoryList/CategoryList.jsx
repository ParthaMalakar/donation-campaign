import { useEffect, useState } from "react";
import Category from "../Category/Category";
import PropTypes from 'prop-types';
const CategoryList = ({allDonation ,display}) => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('/donationData.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, [])
    const senddata =()=>{
        allDonation(categorys);
    }
    senddata();
    console.log(display.length)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10 ">
            {display.length==0 ? categorys.map(category => <Category
             key={category.id} category={category}></Category> ): display.map(category => <Category
                key={category.id} category={category}></Category> )}
        </div>
    );
};
CategoryList.propTypes = {
    allDonation: PropTypes.func,
    
    display: PropTypes.object
}
export default CategoryList;
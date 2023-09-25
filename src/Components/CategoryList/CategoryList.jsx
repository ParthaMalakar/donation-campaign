import { useEffect, useState } from "react";
import Category from "../Category/Category";

const CategoryList = () => {
    const [categorys, setCategorys] = useState([]);
    useEffect(() => {
        fetch('../../../public/donationData.json')
            .then(res => res.json())
            .then(data => setCategorys(data));
    }, [])
    return (
        <div className="grid md:grid-cols-4 gap-5 max-w-7xl mx-auto mb-10 ">
            {categorys.map(category => <Category
             key={category.id} category={category}></Category> )}
        </div>
    );
};

export default CategoryList;
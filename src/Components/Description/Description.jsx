import { useLoaderData, useParams } from "react-router-dom";

const Description = () => {
    const categorys = useLoaderData();
    console.log(categorys);
    const {id} = useParams();
    console.log(id); 
    const category = categorys.find(category => category.id == id);
    console.log(category); 
    const style ={
        backgroundColor:`${category.text_button_bg_color}`
    }
    return (
        
        <div className="max-w-7xl mx-auto">
            <div className="mt-10 relative">
                <figure><img className="w-[1280px] h-[600px]" src={category.picture} alt="Shoes" /></figure>
                <div className="bg-black absolute bottom-1 w-full h-24 bg-opacity-70">
                <button style={style} className="py-3 px-2 rounded-md text-white ml-10 mt-6">Donate $290</button>
            </div>
            </div>
            
            <div>
                <h3 className="font-bold mt-4 text-4xl">{category.title}</h3>
                <p className="mt-4 font-normal mb-4">{category.description}</p>
            </div>
        </div>
    );
};

export default Description;
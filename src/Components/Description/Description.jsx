import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getStoredDonation, saveDonationApplication } from "../Utility/Utility";


const Description = () => {
    const categorys = useLoaderData();
    const {id} = useParams();
    const category = categorys.find(category => category.id == id);
    
    const style ={
        backgroundColor:`${category.text_button_bg_color}`
    }
    const [donations, setDonation] = useState([]);
    useEffect(() => {
        const storedIds = getStoredDonation();
        if (categorys.length > 0) {



            const Applied = [];
            for (const id of storedIds) {
                const Donation = categorys.find(job => job.id === id);
                if (Donation) {
                    Applied.push(Donation)
                }
            }
            setDonation(Applied);
           
        }
    }, [categorys]) 
    const handleDonation= category => { 
        
        const donationExist = donations.find(existing=> existing.id == category.id)
        if (!donationExist) {
            const newLog = [...donations, category]; 
            setDonation(newLog);
            saveDonationApplication(category.id)
            toast.success(`${category.title} added to the donation list`, {
                position: toast.POSITION.TOP_CENTER,
              });
        }
        else{
            toast.error(`${category.title} already exits`, {
                position: toast.POSITION.TOP_CENTER,
              });
        }  }
    return (
        
        <div className="max-w-7xl mx-auto">
            <div className="mt-10 relative">
                <figure><img className="w-[1280px] h-[600px]" src={category.picture} alt="Shoes" /></figure>
                <div className="bg-black absolute bottom-1 w-full h-24 bg-opacity-70">
               <button onClick={()=>handleDonation(category)}  style={style} className="py-3 px-2 rounded-md text-white ml-10 mt-6">Donate $290</button>
            </div>
            </div>
            <ToastContainer></ToastContainer>
            <div>
                <h3 className="font-bold mt-4 text-4xl">{category.title}</h3>
                <p className="mt-4 font-normal mb-4">{category.description}</p>
            </div>
        </div>
    );
};

export default Description;
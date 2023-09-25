import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/Utility";
import DonationList from "../DonationList/DonationList";


const Donation = () => {
    const style = {
        textAlign:'center'
    }
    const Donations = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);
    const [dataLength, setDataLength] = useState(4);
    useEffect(() => {
        const storedIds = getStoredDonation();
        if (Donations.length > 0) {


            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            const Applied = [];
            for (const id of storedIds) {
                const Donation = Donations.find(job => job.id === id);
                if (Donation) {
                    Applied.push(Donation)
                }
            }
            setAppliedDonation(Applied);
           
        }
    }, [Donations])
        
 
    return (
        <div>
            <div className="grid grid-cols-2 gap-4 mt-8 max-w-7xl mx-auto mb-10">
            {appliedDonation.slice(0, dataLength).map(category => <DonationList
            key={category.id} category={category}></DonationList>)}
          
        </div>
        <div style={style} className={dataLength >= appliedDonation.length ? 'hidden' : ''}>
                <button
                    onClick={() => setDataLength(appliedDonation.length)}
                    className="px-4 py-2 rounded-lg text-white bg-[#009444]">See All</button>
            </div>
        </div>
    );
};

export default Donation;
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../Utility/Utility";
import DonationList from "../DonationList/DonationList";


const Donation = () => {
    const Donations = useLoaderData();

    const [appliedDonation, setAppliedDonation] = useState([]);

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
            {appliedDonation.map(category => <DonationList
            key={category.id} category={category}></DonationList>)}
           
        </div>
        </div>
    );
};

export default Donation;
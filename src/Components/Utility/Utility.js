const getStoredDonation = () =>{
    const storedDonation = localStorage.getItem('donation-applications');
    if(storedDonation){
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonationApplication = id =>{
    const storedDonations = getStoredDonation();
    const exists = storedDonations.find(jobId => jobId === id);
    if(!exists){
        storedDonations.push(id);
        localStorage.setItem('donation-applications', JSON.stringify(storedDonations))
    }
}

export { getStoredDonation, saveDonationApplication}
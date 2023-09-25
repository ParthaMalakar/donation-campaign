
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import { getStoredDonation } from '../Utility/Utility';
const Statistics = () => {
    const yourDonations = getStoredDonation()
    const totalDonations = 12;
    const percentage = ((yourDonations.length / totalDonations) * 100).toFixed(2);
    const Remaining = 100 - percentage;
    const RemainingValue = parseFloat(Remaining);
    const value = parseFloat(percentage); 
    const data = [
        { name: 'Your Donations', value: value },
        { name: 'Remaining', value: RemainingValue },
    ];
    const COLORS = ['#0088FE', '#00C49F'];

    return (
        <div className=" text-center">
            <h2 className='mt-3'>Donation Statistics</h2>
           
            <PieChart className='md:ml-[200px] lg:ml-[550px] ' width={400} height={400}>
                <Pie
                    dataKey="value"
                    data={data}
                    cx={200}
                    cy={200}
                    outerRadius={80}
                    fill="#8884d8"
                    label
                >
                     {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
                </Pie>
                <Tooltip />
                <Legend />
            </PieChart>
            


            <p >
                Your Donations: {yourDonations.length} ({percentage}%)
            </p>
            <p>Total Donations: {totalDonations} ({Remaining}%)</p>
        </div>
    );
};
export default Statistics;
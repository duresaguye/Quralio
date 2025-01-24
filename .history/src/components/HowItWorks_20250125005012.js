
import { FaMoneyBillWave, FaTruckPickup, FaChartLine,FaTruckLoading,FaIndustry, FaWarehouse, FaRecycle, FaLeaf,FaChartBar, FaFileAlt, FaBoxes } from "react-icons/fa";
import Link from 'next/link';

export default function HowItWorks() {
  const plasticProducerSteps = [
    { title: "Dashboard Access", icon: <FaMoneyBillWave />, description: "Manage your pickups, balance, and impact tracking from one place." },
    { title: "Request Pickups", icon: <FaTruckPickup />, description: "Schedule pickups directly from your dashboard for convenient waste collection." },
    { title: "Track Contributions", icon: <FaChartLine />, description: "View your total plastic collected, recent contributions, and their environmental impact." },
  ];



const recyclingCompanySteps = [
 { 
    title: "Pickup Scheduling", 
    icon: <FaTruckLoading />, 
    description: "Coordinate and approve incoming requests for plastic waste pickups efficiently." 
},

  { title: "Track Processing Status", icon: <FaIndustry />, description: "Monitor the status of collected plastic, from pickup to recycling." },
  { title: "Impact Analytics", icon: <FaChartBar />, description: "See your environmental impact with detailed reports on recycled plastic volumes." },
  { title: "Plastic Volume Reports", icon: <FaFileAlt />, description: "View monthly and yearly reports on the amount of plastic processed." },

];


  return (
    <section className="container mx-auto p-8">
      {/* Plastic Producers Timeline */}
      <h2 className="text-3xl font-bold text-center mb-10">How It Works for Plastic waste Producers</h2>
      <div className="relative border-l-4 border-blue-500 pl-8 space-y-8 mb-16">
        {plasticProducerSteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-blue-500 text-3xl">{step.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      <Link href="/dashboard">Check it out</Link>
      </div>

      {/* Recycling Companies Timeline */}
      <h2 className="text-3xl font-bold text-center mb-10">How It Works for Recycling Companies</h2>
      <div className="relative border-l-4 border-green-500 pl-8 space-y-8">
        {recyclingCompanySteps.map((step, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-green-500 text-3xl">{step.icon}</div>
            <div>
              <h3 className="text-2xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

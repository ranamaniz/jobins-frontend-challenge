import { CountrySalesCard, TotalSalesCard } from "../components/Dashboard";
import TotalProfitCard from "../components/Dashboard/TotalProfitCard";

const Dashboard = () => {
  return (
    <section className="flex lg:justify-between flex-col lg:flex-row flex-1 gap-4">
      <TotalSalesCard />
      <TotalProfitCard />
      <CountrySalesCard />
    </section>
  );
};

export default Dashboard;

import { CountrySalesCard, TotalSalesCard } from "../components/Dashboard";
import SalesTable from "../components/Dashboard/SalesTable";
import TotalProfitCard from "../components/Dashboard/TotalProfitCard";
import UserCard from "../components/Dashboard/UserCard";

const Dashboard = () => {
  return (
    <>
      <section className="flex lg:justify-between flex-col lg:flex-row flex-1 gap-4 mb-3">
        <TotalSalesCard />
        <TotalProfitCard />
        <CountrySalesCard />
      </section>
      <UserCard />
      <SalesTable />
    </>
  );
};

export default Dashboard;

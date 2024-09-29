import { TotalSalesCard } from "../components/Dashboard";
import TotalProfitCard from "../components/Dashboard/TotalProfitCard";
import Card from "../components/ui/Card/Card";

const Dashboard = () => {
  return (
    <section
      // className="grid gap-4 md:grid-cols-[2fr_1fr_2fr]  md:gap-6"

      className="flex justify-start flex-col sm:flex-row gap-6"
    >
      {/* Total sales */}
      <TotalSalesCard />
      {/* Total Profit */}
      <TotalProfitCard />

      {/* progress */}
      <Card>progress</Card>
    </section>
  );
};

export default Dashboard;

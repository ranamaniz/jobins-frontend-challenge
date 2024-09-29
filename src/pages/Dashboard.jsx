import { TotalSalesCard } from "../components/Dashboard";
import Card from "../components/ui/Card/Card";

const Dashboard = () => {
  return (
    <section
      className="grid gap-4 md:grid-cols-[2fr_1fr_2fr]  md:gap-6"

      // className="grid gap-4 md:grid-cols-[2fr_1fr_2fr]  md:gap-6"
    >
      {/* Total sales */}
      <TotalSalesCard />
      {/* Total Profit */}
      <Card>Total Profit </Card>

      {/* progress */}
      <Card>progress</Card>
    </section>
  );
};

export default Dashboard;

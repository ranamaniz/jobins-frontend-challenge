import Card from "../ui/Card/Card";

const TotalSalesCard = () => {
  return (
    <Card className="grid grid-cols-[1fr_2fr] items-center">
      <img src="/images/finance.png" alt="total sales and costs icon" />
      <div className="flex flex-col justify-between gap-6">
        <div>
          <h3 className="text-xl font-semibold text-primary">
            Total Sales & Costs
          </h3>
          <span className="text-sm text-secondary">Last 7 days</span>
        </div>
        {/* vertical line */}
        <div>
          <span className="block text-primary font-bold text-4xl font-sans ">
            $350K
          </span>
          <span className="text-success text-sm">8.56K </span>
          <span className="text-secondary text-sm">vs last 7 days</span>
        </div>
      </div>
    </Card>
  );
};

export default TotalSalesCard;

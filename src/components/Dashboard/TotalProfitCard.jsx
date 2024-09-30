import Card from "../ui/Card/Card";

const TotalProfitCard = () => {
  return (
    <Card className="flex  flex-col justify-center gap-4 md:gap-8 flex-[2_1_0%] ">
      <div className="flex items-center gap-4">
        <img src="/images/yen.png" alt="total profit icon" />
        <div>
          <h3 className="text-lg font-semibold text-primary no-wrap">
            Total Profit
          </h3>
          <span className="text-sm text-secondary">Last 7 days</span>
        </div>
      </div>
      <div>
        <span className="block text-primary font-bold text-4xl font-sans ">
          50K
        </span>
        <span className="text-success text-sm">12% </span>
        <span className="text-secondary text-sm">vs last 7 days</span>
      </div>
    </Card>
  );
};

export default TotalProfitCard;

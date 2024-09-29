import ArrowUpSuccess from "../../assets/icons/arrow-up-success.svg?react";
import Card from "../ui/Card/Card";
import Divider from "../ui/Divider";

const TotalSalesCard = () => {
  return (
    <Card className="flex flex-col md:flex-row gap-4 md:gap-8  items-baseline md:items-center">
      <img
        src="/images/finance.png"
        alt="total sales and costs icon"
        className="hidden md:block"
      />
      <Divider className="hidden md:block" />
      <div className="flex flex-col justify-between gap-4 md:gap-8">
        <div className="flex items-center gap-4">
          <img
            src="/images/finance.png"
            alt="total sales and costs icon"
            className="block md:hidden h-10 w-10"
          />
          <div>
            <h3 className="text-lg font-semibold text-primary">
              Total Sales & Costs
            </h3>
            <span className="text-sm text-secondary">Last 7 days</span>
          </div>
        </div>

        <div>
          <span className="block text-primary font-bold text-4xl font-sans ">
            $350K
          </span>
          <span className="text-success text-sm flex items-center gap-1 flex-wrap">
            <ArrowUpSuccess />
            8.56K <span className="text-secondary text-sm">vs last 7 days</span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default TotalSalesCard;

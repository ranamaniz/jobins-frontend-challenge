import Card from "../ui/Card/Card";
import Progress from "../ui/Progress";
import ChevronUp from "../../assets/icons/chevron-up.svg?react";
import ChevronDown from "../../assets/icons/chevron-down.svg?react";

const countrySales = [
  {
    id: 1,
    country: { code: "us", name: "United States" },
    isProfit: true,
    profitPercent: 25.8,
    amount: "30k",
  },
  {
    id: 2,
    country: { code: "br", name: "Brazil" },
    isProfit: false,
    profitPercent: 16.2,
    amount: "26k",
  },
  {
    id: 3,
    country: { code: "au", name: "Australia" },
    isProfit: false,
    profitPercent: 11.9,
    amount: "17k",
  },
];

const CountrySalesCard = () => {
  return (
    <Card className="grid grid-rows-[1fr_1fr_1fr] gap-2 flex-1 lg:flex-[4_1_0%]">
      {countrySales.map((sale) => (
        <div
          key={sale.id}
          className="grid grid-cols-[1fr_1fr] grid-rows-[1fr_1fr] xs:grid-rows-[1fr] xs:grid-cols-[1fr_1fr_1fr]  md:grid-cols-[1fr_3fr_1fr] lg:grid-cols-[2fr_2fr_1fr] gap-4 items-center"
        >
          <div className="flex items-center gap-2 row-[1/2] col-[1/3] xs:col-[1/2] xs:row-[1/2] ">
            <img
              src={`/images/${sale.country.code}.png`}
              className="w-8 h-8 "
            />
            <div className="flex flex-col ">
              <span className="text-[15px] font-semibold">{sale.amount}</span>
              <span className="text-[13px] text-secondary">
                {sale.country.name}
              </span>
            </div>
          </div>
          <Progress
            value={sale?.profitPercent}
            type={sale?.isProfit ? "success" : "danger"}
            className="w-full row-[2/3] xs:col-[2/4] xs:row-[1/2] "
          />
          <span className="flex items-center row-[2/3] xs:col-[4/5] xs:row-[1/2]">
            {sale.isProfit ? (
              <ChevronUp height="20" width="20" />
            ) : (
              <ChevronDown height="20" width="20" />
            )}{" "}
            <span
              className={`${
                sale.isProfit ? "text-success" : "text-danger"
              } text-[15px] font-semibold`}
            >
              {sale.profitPercent}%
            </span>
          </span>
        </div>
      ))}
    </Card>
  );
};

export default CountrySalesCard;

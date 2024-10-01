import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ORDERS_STATUS } from "../../utils/constants";
import Tabs from "../Tabs";
import Avatar from "../ui/Avatar/Avatar";
import Card from "../ui/Card/Card";

const UserCard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeTabKey] = useState(() => {
    const orders = searchParams.get("orders");
    if (orders) {
      const activeOrderStatus = ORDERS_STATUS.find(
        (status) => status.value === orders
      );

      return activeOrderStatus?.key;
    }

    return "1";
  });

  const handleOrderStatusChange = (key, statusCode) => {
    setSearchParams({ orders: statusCode });
  };
  console.log("activeTabKey", activeTabKey);
  return (
    <Card className="!pb-0">
      <section className="flex flex-col gap-8 lg:grid lg:grid-cols-3 lg:grid-rows-1 lg:divide-x mb-8 lg:mb-0">
        <section className="flex items-center gap-3">
          <Avatar src="/images/Avatar.png" height="72" width="72" />
          <div>
            <h2 className="text-lg font-semibold">Robert Fox</h2>
            <span className="text-secondary text-sm">robert@gmail.com</span>
          </div>
        </section>

        <section className="text-[13px] lg:pl-5">
          <h3 className="text-secondary font-medium mb-4">
            PERSONAL INFORMATION
          </h3>
          <div className="grid grid-cols-2 grid-rows-3 gap-y-3 gap-x-7 max-w-lg">
            <span className="">Contact Number</span>
            <span className="font-semibold">(201) 555-0124</span>
            <span>Date of Birth</span>
            <span className="font-semibold">1 Jan, 1985</span>
            <span>Member Since</span>
            <span className="font-semibold">3 March, 2023</span>
          </div>
        </section>

        <section className="text-[13px] lg:pl-5">
          <h3 className="text-secondary font-medium mb-4">SHIPPING ADDRESS</h3>
          <p>3517 W. Gray St. Utica, Pennsylvania 57867</p>
          <div className="grid grid-cols-3 mt-5 max-w-lg">
            <div className="flex flex-col">
              <span className="text-2xl font-bold">150</span>
              <span className="text-secondary font-medium ">Total Order</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">140</span>
              <span className="text-secondary font-medium ">Completed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold">10</span>
              <span className="text-secondary font-medium ">Canceled</span>
            </div>
          </div>
        </section>
      </section>
      <Tabs
        defaultActiveKey={activeTabKey}
        items={ORDERS_STATUS}
        onChange={handleOrderStatusChange}
        className=" justify-center lg:justify-start"
      />
    </Card>
  );
};

export default UserCard;

import { useLocation } from "react-router-dom";
import NotificationIcon from "../ui/Icon/NotificationIcon";
import { PAGE_TITLES } from "../../utils/constants";
import Avatar from "../ui/Avatar/Avatar";

const Header = () => {
  const location = useLocation();

  return (
    <header className="col-[2/3] row-[1/2] flex justify-between items-center p-6 pb-4 ">
      <h1 className="font-bold text-2xl middle ">
        {PAGE_TITLES[location?.pathname] || ""}
      </h1>
      <section className="flex gap-6 items-center">
        <NotificationIcon size="sm" count={4} />
        <Avatar src="/images/userm.png" alt="user" />
      </section>
    </header>
  );
};

export default Header;

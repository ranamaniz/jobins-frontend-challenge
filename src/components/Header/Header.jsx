import { useLocation } from "react-router-dom";
import NotificationIcon from "../ui/Icon/NotificationIcon";
import { PAGE_TITLES } from "../../utils/constants";
import Avatar from "../ui/Avatar/Avatar";

const Header = () => {
  const location = useLocation();

  return (
    <section className="flex justify-between  py-4 px-6">
      <h2 className="font-bold text-2xl">
        {PAGE_TITLES[location?.pathname] || ""}
      </h2>
      <section className="flex gap-6">
        <NotificationIcon size="sm" count={4} />
        <Avatar />
      </section>
    </section>
  );
};

export default Header;

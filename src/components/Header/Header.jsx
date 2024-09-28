import { useLocation } from "react-router-dom";
import NotificationIcon from "../ui/Icon/NotificationIcon";
import { PAGE_TITLES } from "../../utils/constants";
import Avatar from "../ui/Avatar/Avatar";

const Header = () => {
  const location = useLocation();

  return (
    <header className="flex justify-between py-4 ">
      <h2 className="font-bold text-2xl">
        {PAGE_TITLES[location?.pathname] || ""}
      </h2>
      <section className="flex gap-6 items-center">
        <NotificationIcon size="sm" count={4} />
        <Avatar src="/images/userm.png" alt="user" />
      </section>
    </header>
  );
};

export default Header;

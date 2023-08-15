import { Link, useLocation } from "react-router-dom";

type SidebarType = {
  link: string;
  icon: string;
  title: string;
};

function Sidebaritem({ link, icon, title }: SidebarType) {
  const { pathname } = useLocation();
  return (
    <Link
      to={link}
      className={`flex items-center gap-4 py-3 mb-1 px-4 rounded-[4px] ${
        pathname === link ? "bg-[#2B3E46]" : ""
      }`}
    >
      <img src={icon} className="w-5 h-5" />
      <p className={`${pathname === link ? "text-white" : "text-[#a9b1bc]"}`}>
        {title}
      </p>
    </Link>
  );
}

export default Sidebaritem;

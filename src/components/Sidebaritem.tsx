import { Link, useLocation } from "react-router-dom";

type SidebarType = {
  link: string;
  icon: string;
  title: string;
};

function Sidebaritem({ link, icon, title }: SidebarType) {
  const { pathname } = useLocation();
  const isActive = pathname === link;
  return (
    <Link
      to={link}
      className={`group flex items-center hover:bg-[#2B3E46] gap-4 py-3 mb-2 px-4 rounded-[4px]`}
    >
      <img
        src={icon}
        className={`w-5 h-5 ${isActive ? "brightness-100" : "brightness-[.9]"}`}
      />
      <p
        className={`group-hover:text-white  leading-[15px] ${
          pathname === link ? "text-white" : "text-[#a9b1bc]"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}

export default Sidebaritem;

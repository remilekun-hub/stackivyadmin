import { Link } from "react-router-dom";

type SidebarType = {
  link: string;
  icon: string;
  title: string;
  isActive?: boolean;
};

function Sidebaritem({ link, icon, title, isActive }: SidebarType) {
  return (
    <Link
      to={link}
      className={`group flex items-center hover:bg-[#2B3E46] gap-4 py-3 mb-2 px-4 rounded-[4px] ${
        isActive ? "bg-[#2B3E46]" : ""
      }`}
    >
      <img src={icon} className={`w-5 h-5`} />
      <p
        className={`group-hover:text-white  leading-[15px] ${
          isActive ? "text-white" : "text-[#a9b1bc]"
        }`}
      >
        {title}
      </p>
    </Link>
  );
}

export default Sidebaritem;

import { Link, useNavigate, useLocation } from "react-router-dom";
import SidebarLogo from "../assets/sidebarlogo.svg";
import glassIcon from "../assets/search-normal.svg";
import dashboardicon from "../assets/Dashboardicon.svg";
import Sidebaritem from "./Sidebaritem";
import startupIcon from "../assets/rstart.png";
import door from "../assets/door.png";
import clog from "../assets/clog.png";
import profile from "../assets/profile-circle.png";
import careerI from "../assets/rcareer.png";
import quote from "../assets/quote.png";
import marketing from "../assets/marketing.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const handleLogout = () => {
    navigate("/");
    localStorage.removeItem("user");
  };

  return (
    <aside className="hidden xl:block min-h-screen overflow-auto w-[330px] bg-[#1E2C31] fixed left-0 z-[9999999999]">
      <header className=" h-[100px] pl-5 items-center flex">
        <Link to={"/dashboard"}>
          <img src={SidebarLogo} alt="Stackivy Logo" />
        </Link>
      </header>

      <div className="p-6">
        <div className=" flex items-center gap-3 border-0 pl-4 bg-[#2B3E46] mt-5 rounded-[4px] overflow-hidden">
          <img src={glassIcon} className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search"
            className="p-3 outline-0 border-0 bg-[#2B3E46] text-white placeholder:text-[#a9b1bc]"
          />
        </div>
      </div>

      <div className="px-6 mt-6 mb-10">
        <Sidebaritem
          link="/dashboard"
          icon={dashboardicon}
          title="Dashboard"
          isActive={pathname === "/dashboard"}
        />
        <Accordion type="single" collapsible className="w-full outline-none">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#a9b1bc] hover:bg-[#2B3E46] py-2">
              <div className="flex gap-4 ">
                <img src={careerI} alt="" className="w-5 h-5" />
                <p>Career</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                to={"/career/applications"}
                className={`block  mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/career/applications" ||
                  pathname.startsWith("/career/application")
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Applications
              </Link>

              <Link
                to={"/career/manage-job-posts"}
                className={`block  mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/career/manage-job-posts" ||
                  pathname === "/career/job-posts/create"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Manage Job Posts
              </Link>
              <Link
                to={"/career/settings"}
                className={`block  mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/career/settings"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Settings
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Sidebaritem
          link="/startup"
          icon={startupIcon}
          title="Startup"
          isActive={pathname === "/startup" || pathname.startsWith("/startup/")}
        />
        <Sidebaritem
          link="/quote"
          icon={quote}
          title="Quote"
          isActive={pathname === "/quote"}
        />

        <Accordion type="single" collapsible className="w-full outline-none">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-[#a9b1bc] hover:bg-[#2B3E46] py-2">
              <div className="flex gap-4 ">
                <img src={marketing} alt="" className="w-5 h-5" />
                <p>Marketing</p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <Link
                to={"/blogs"}
                className={`block mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/blogs" || pathname === "/blog/create"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Blogs
              </Link>
              <Link
                to={"/guides"}
                className={`block mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/guides" || pathname === "/guides/create"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Guides
              </Link>
              <Link
                to={"/webinars"}
                className={`block mt-2  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/webinars" || pathname === "/webinars/create"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Webinars
              </Link>

              {/* <Link
                to={"/case-studies"}
                className={`block mt-2 ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/case-studies"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Case Studies
              </Link> */}

              <Link
                to={"/events"}
                className={`block  ml-[50px]  hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1 ${
                  pathname === "/events" || pathname === "/events/create"
                    ? "bg-[#2b3E46] text-white"
                    : "text-[#a9b1bc]"
                }`}
              >
                Events
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="px-6 pt-8 border-t-[1px] border-t-[#27393F]">
        <Sidebaritem link="/account" icon={profile} title="Account" />
        <Sidebaritem link="/support" icon={clog} title="Support" />
        <div
          className={`group flex items-center hover:bg-[#2B3E46] gap-4 py-3 mb-2 px-4 rounded-[4px] cursor-pointer`}
          onClick={handleLogout}
        >
          <img src={door} className={`w-5 h-5`} />
          <p className="text-[#a9b1bc] group-hover:text-white leading-[15px]">
            Logout
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;

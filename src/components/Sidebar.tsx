import { Link, useNavigate } from "react-router-dom";
import SidebarLogo from "../assets/sidebarlogo.svg";
import glassIcon from "../assets/search-normal.svg";
import dashboardicon from "../assets/Dashboardicon.svg";
import Sidebaritem from "./Sidebaritem";
import contentIcon from "../assets/Contenticon.png";
import door from "../assets/door.png";
import clog from "../assets/clog.png";
import profile from "../assets/profile-circle.png";
import careerI from "../assets/material-symbols_business-center-outline.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function Sidebar() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  const customNavigate = (path: string) => {
    navigate(path);
  };

  return (
    <aside className="hidden xl:block min-h-screen w-[300px] bg-[#1E2C31] fixed left-0 z-[900]">
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
        <Sidebaritem link="/dashboard" icon={dashboardicon} title="Dashboard" />
        <Sidebaritem link="/career" icon={careerI} title="Career" />
        <Sidebaritem link="/startup" icon={dashboardicon} title="Startup" />
        <Sidebaritem link="/quote" icon={dashboardicon} title="Quote" />

        <div>
          <Accordion type="single" collapsible className="w-full outline-none">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-[#a9b1bc] hover:bg-[#2B3E46] py-2">
                <div className="flex gap-4 ">
                  <img src={contentIcon} alt="" className="w-5 h-5" />
                  <p>Marketing</p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div
                  className="cursor-pointer mt-2 text-[#a9b1bc] ml-[50px] hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1"
                  onClick={() => customNavigate("/blog")}
                >
                  Blogs
                </div>
                <div
                  className="cursor-pointer text-[#a9b1bc] ml-[50px] hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1"
                  onClick={() => customNavigate("/guides")}
                >
                  Guides
                </div>
                <div
                  className="cursor-pointer text-[#a9b1bc] ml-[50px] hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1"
                  onClick={() => customNavigate("/webinars")}
                >
                  Webinars
                </div>
                <div
                  className="cursor-pointer text-[#a9b1bc] ml-[50px] hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1"
                  onClick={() => customNavigate("/case-studies")}
                >
                  Case Studies
                </div>
                <div
                  className="cursor-pointer text-[#a9b1bc] ml-[50px] hover:text-white hover:bg-[#2B3E46] px-4 py-2 rounded-[4px] mb-1"
                  onClick={() => customNavigate("/events")}
                >
                  Events
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
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

import { useState } from "react";
import { Link } from "react-router-dom";
import SidebarLogo from "../assets/sidebarlogo.svg";
import glassIcon from "../assets/search-normal.svg";
import dashboardicon from "../assets/Dashboardicon.svg";
import Sidebaritem from "./Sidebaritem";
import arrow from "../assets/arrow-down.png";
import arrowup from "../assets/arrowup.png";
import contentIcon from "../assets/Contenticon.png";

function Sidebar() {
  const [showContent, setShowContent] = useState<boolean>(false);

  return (
    <aside className="hidden xl:block min-h-screen w-[300px] bg-[#1E2C31] fixed left-0">
      <header className=" h-[100px] pl-5 items-center flex">
        <Link to={"/"}>
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

      <div className="px-6 mt-6">
        <Sidebaritem link="/" icon={dashboardicon} title="Dashboard" />
        <Sidebaritem link="/career" icon={dashboardicon} title="Career" />

        <div className="pl-4 my-3">
          <div
            className="flex justify-between cursor-pointer"
            onClick={() => setShowContent(!showContent)}
          >
            <div
              className={`leading-[15px] gap-4  flex items-center ${
                showContent ? "text-white" : "text-[#a9b1bc]"
              }`}
            >
              <img src={contentIcon} className="w-5 h-5" />
              <p
                className={`leading-[15px] gap-4  flex items-center${
                  showContent ? "text-white" : "text-[#a9b1bc]"
                }`}
              >
                Content
              </p>
            </div>
            <h2>
              {showContent ? (
                <img src={arrow} className="w-5 h-5" />
              ) : (
                <img src={arrowup} className="w-5 h-5" />
              )}
            </h2>
          </div>
          {showContent && (
            <div className="ml-8 mt-3">
              <p className="text-[#a9b1bc] hover:text-white hover:bg-[#2B3E46] px-4 py-1 rounded-[4px] mb-1">
                Blogs
              </p>
              <p className="hover:bg-[#2B3E46] px-3 py-1 rounded-[4px] mb-1">
                vvv
              </p>
              <p className="hover:bg-[#2B3E46] px-3 py-1 rounded-[4px] mb-1">
                vvv
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="px-6 pt-8">
        <Sidebaritem link="/account" icon={dashboardicon} title="Account" />
        <Sidebaritem link="/support" icon={dashboardicon} title="Support" />
      </div>
    </aside>
  );
}

export default Sidebar;

import glassIcon2 from "../assets/search-two.png";
import chev from "../assets/chev.png";
import chev2 from "../assets/chev2.png";
import calendar from "../assets/calendar-2.png";
import arrowDown2 from "../assets/arrow-down2.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Blog() {
  console.log(location);
  return (
    <section className="">
      <div className="flex-1  mx-auto">
        <Navbar>
          <div className="flex items-center gap-[6px]">
            <h1 className="font-medium text-[24px]">Content -</h1>
            <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
              Blogs
            </span>
          </div>
        </Navbar>

        <main className="p-4 lg:p-6 xl:p-7 bg-[#F3F4F6]">
          <div className="rounded-[16px] bg-white h-screen">
            <div className="pt-10 pb-6 px-4 lg:px-7 flex justify-between">
              <div className=" gap-3 hidden sm:flex">
                <div className="flex gap-3 items-center">
                  <h1>All (0)</h1>
                  <span>
                    <img src={chev} className="w-2 h-2" />
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <h1 className="text-[#D1D5DB]">Published (0)</h1>
                  <span>
                    <img src={chev2} className="w-2 h-2" />
                  </span>
                </div>

                <div className="flex gap-3 items-center">
                  <h1 className="text-[#D1D5DB]">Drafts (0)</h1>
                  <span>
                    <img src={chev2} className="w-2 h-2 grayscale-0" />
                  </span>
                </div>
              </div>
              <div className="mr-2">
                <Link
                  to={"/blog/new"}
                  className="bg-[#116B89] text-white py-4 px-6 rounded-full font-normal"
                >
                  Create New Blog +
                </Link>
              </div>
            </div>

            <div className="flex px-4 lg:px-7 items-center">
              <div className="flex items-center w-full justify-between">
                <div className="flex  items-center">
                  <div className="max-w-sm  space-y-6">1</div>
                  <div className="flex gap-2 items-center  px-4 py-2">
                    <img src={calendar} className="w-6 h-6 font-bold" />
                    <div>2</div>
                    <img src={arrowDown2} className="w-4 h-4 " />
                  </div>
                </div>

                <div className="hidden mr-2 lg:flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4  mt-5 rounded-[4px] overflow-hidden">
                  <img src={glassIcon2} className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for something here"
                    className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 pb-6 px-4 lg:px-7 mr-2">
              {/* <TableSection /> */}
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Blog;

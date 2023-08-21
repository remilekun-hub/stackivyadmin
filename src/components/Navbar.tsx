import glassIcon2 from "../assets/search-two.png";
import bell from "../assets/bell.png";
import prfofileImg from "../assets/profileimg.png";

type Prop = {
  children?: JSX.Element;
};
function Navbar({ children }: Prop) {
  return (
    <header className="sticky top-0 z-[99999] px-4 lg:px-6 flex items-center h-[110px] w-full bg-white">
      <nav className="flex justify-between w-full items-center h-full mx-auto max-w-[1500px]">
        {children}

        <div className="flex items-center gap-10">
          <div className="hidden md:block">
            <div className=" flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4 rounded-[4px] overflow-hidden">
              <img src={glassIcon2} className="w-5 h-5" />
              <input
                type="text"
                placeholder="Search for something here"
                className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
              />
            </div>
          </div>
          <div className="flex items-center mt-2 gap-6">
            <div>
              <img src={bell} className="w-[23px] h-[23px]" />
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={prfofileImg} className="w-[50x] h-[50px]" />
              <div className="flex flex-col gap-[6px]">
                <h1 className="text-black font-medium leading-4">
                  Oladele Akindele
                </h1>
                <h4 className="text-[12px] font-medium text-[#9CA3AF] leading-[14.5px]">
                  CEO
                </h4>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;

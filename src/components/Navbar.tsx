import bell from "../assets/bell.png";
import prfofileImg from "../assets/profileimg.png";
import { userSlice } from "@/Hooks/user";

type Prop = {
  children?: JSX.Element;
};
function Navbar({ children }: Prop) {
  const user = userSlice((state) => state.user);
  return (
    <header className="sticky top-0 z-[9999] px-4 lg:px-6 flex items-center h-[110px] w-full bg-white">
      <nav className="flex justify-between w-full items-center h-full mx-auto max-w-[1500px]">
        {children}

        <div className="flex items-center gap-10">
          <div className="flex items-center mt-2 gap-6">
            <div>
              <img src={bell} className="w-[23px] h-[23px]" />
            </div>
            <div className="flex items-center gap-[10px]">
              <img src={prfofileImg} className="w-[50x] h-[50px]" />
              <div className="flex flex-col gap-[6px]">
                <h1 className="text-black text-[14px] sm:text-[16px] font-semibold leading-4">
                  <span>{user?.admin.firstName}</span>
                  <span className="ml-2">{user?.admin.LastName}</span>
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

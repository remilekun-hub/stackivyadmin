import DashBox from "../components/DashBox";
import Navbar from "../components/Navbar";
import dash1 from "../assets/dash1.png";
import dash2 from "../assets/dash2.png";
import dash3 from "../assets/dash3.png";
import dash4 from "../assets/dash4.png";
import dash5 from "../assets/dash5.png";
import dash6 from "../assets/dash6.png";
import dash7 from "../assets/dash7.png";

function Home() {
  return (
    <section>
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Dashboard</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-[30px]">
            <DashBox title="Total quote requested" amount="100" icon={dash1} />
            <DashBox title="Total startup quote" amount="0" icon={dash2} />
            <DashBox title="Total job applicants" amount="0" icon={dash3} />
            <DashBox
              title="Last posted blog"
              date="15 Jun, 2023"
              icon={dash4}
            />
            <DashBox
              title="Last posted guides"
              date="15 Jun, 2023"
              icon={dash4}
            />
            <DashBox title="Last posted webinars" amount="-" icon={dash5} />
            <DashBox title="Last posted case studies" amount="-" icon={dash6} />
            <DashBox title="Last posted case studies" amount="-" icon={dash7} />
            {/* <DashBox title="Total startup quote" /> */}
            {/* <DashBox title="Total job applicants" />
            <DashBox title="Last posted blog" date="15 Jun, 2023" /> */}
          </div>

          <div className="mt-[30px] grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-[30px]">
            <div className="bg-white rounded-[16px] border-[1px] border-[#E5E7EB] py-9">
              <div className="flex justify-between px-9 pb-4 border-b-[1px] border-[#F9FAFB]">
                <h1 className="text-[#6B7280] font-bold">Recent Blogs</h1>
                <p className="text-[#116B89] text-[13px] underline">
                  View Blogs
                </p>
              </div>
              <div className="px-9 mt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* webinars */}
            <div className="bg-white rounded-[16px] border-[1px] border-[#E5E7EB] py-9">
              <div className="flex justify-between px-9 pb-4 border-b-[1px] border-[#F9FAFB]">
                <h1 className="text-[#6B7280] font-bold">Recent Webinars</h1>
                <p className="text-[#116B89] text-[13px] underline">
                  View Webinars
                </p>
              </div>
              <div className="px-9 mt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Leveraging technology to change the future of...{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Leveraging technology to change the future of...{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Leveraging technology to change the future of...{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* guides */}
            <div className="bg-white rounded-[16px] border-[1px] border-[#E5E7EB] py-9">
              <div className="flex justify-between px-9 pb-4 border-b-[1px] border-[#F9FAFB]">
                <h1 className="text-[#6B7280] font-bold">Recent Guides</h1>
                <p className="text-[#116B89] text-[13px] underline">
                  View Guides
                </p>
              </div>
              <div className="px-9 mt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Is crypto the future of money, start trading.....{" "}
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* case studies */}
            <div className="bg-white rounded-[16px] border-[1px] border-[#E5E7EB] py-9">
              <div className="flex justify-between px-9 pb-4 border-b-[1px] border-[#F9FAFB]">
                <h1 className="text-[#6B7280] font-bold">Recent Guides</h1>
                <p className="text-[#116B89] text-[13px] underline">
                  View Guides
                </p>
              </div>
              <div className="px-9 mt-4 flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Empowering travel agency to do more
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div className="">
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Empowering travel agency to do more
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p>
                      Empowering travel agency to do more
                      <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
                        Savings
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="font-bold text-[14px]">10/08/2023</p>
                    <p className="text-[#9CA3AF] text-[12px] text-right">
                      8:00 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Home;

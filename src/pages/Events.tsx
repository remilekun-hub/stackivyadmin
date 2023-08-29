import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XCircle, PencilLine } from "lucide-react";
import event1 from "../assets/event1.png";
import event2 from "../assets/event2.png";

function Events() {
  const [closeEvent, setCloseEvent] = useState(false);
  return (
    <section className="">
      {closeEvent && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/60 z-[99999999999999999999999999] flex items-center justify-center">
          <div className="rounded-[24px] bg-white p-7 text-center w-[320px]">
            <h1>
              Are you sure you wanto close this event{" "}
              <span className="font-semibold">“Ardilla Product Launch”</span>
            </h1>
            <div className="flex justify-center mt-6 gap-5">
              <button className="outline-none text-white bg-[#116B89] rounded-full px-5 py-2">
                Yes Close
              </button>
              <button onClick={() => setCloseEvent(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Events</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] p-7">
          <div>
            <Tabs defaultValue="liveEvents">
              <div className="flex justify-between flex-wrap items-center gap-5 border-b-[1px] border-[#F3F4F6]">
                <TabsList className="flex justify-start gap-[40px] ">
                  <TabsTrigger
                    value="liveEvents"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Live Events
                  </TabsTrigger>
                  <TabsTrigger
                    value="closedEvents"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Closed Events
                  </TabsTrigger>
                </TabsList>
                <div>
                  <Link
                    to={"/events/create"}
                    className="bg-[#116B89] text-white py-4 px-6 rounded-full font-normal"
                  >
                    Create New Event +
                  </Link>
                </div>
              </div>
              <div className="pt-8">
                <TabsContent value="liveEvents" className="pb-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Ardilla Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setCloseEvent(true)}
                          >
                            <XCircle className="text-[#EF4444] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Close Event
                            </span>
                          </div>
                          <Link
                            to="/events/1/edit"
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event1} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Hargon Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setCloseEvent(true)}
                          >
                            <XCircle className="text-[#EF4444] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Close Event
                            </span>
                          </div>
                          <Link
                            to={"/events/2/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event2} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Hargon Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setCloseEvent(true)}
                          >
                            <XCircle className="text-[#EF4444] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Close Event
                            </span>
                          </div>
                          <Link
                            to={"/events/3/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event2} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Ardilla Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <div
                            className="flex items-center gap-1 cursor-pointer"
                            onClick={() => setCloseEvent(true)}
                          >
                            <XCircle className="text-[#EF4444] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Close Event
                            </span>
                          </div>
                          <Link
                            to={"/events/4/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event1} className="rounded-[20px]" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="closedEvents" className="pb-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Ardilla Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <Link
                            to={"/events/5/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event1} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Hargon Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <Link
                            to={"/events/5/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event2} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Hargon Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <Link
                            to={"/events/5/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event2} className="rounded-[20px]" />
                      </div>
                    </div>

                    <div className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]">
                      <div className="flex justify-between py-5 px-5 ">
                        <h1 className="text-[18px] leading-5 font-medium mag">
                          Ardilla Product Launch
                        </h1>
                        <div className="flex gap-6">
                          <Link
                            to={"/events/5/edit"}
                            className="flex items-center gap-1 cursor-pointer"
                          >
                            <PencilLine className="text-[#116B89] w-3-[14px] h-[14px]" />
                            <span className="font-semibold text-[14px]">
                              Edit
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="pt-2">
                        <img src={event1} className="rounded-[20px]" />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Events;

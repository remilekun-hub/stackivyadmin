import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { XCircle, PencilLine } from "lucide-react";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import { EventType, Event, base_url } from "../../types";
import { toast } from "react-hot-toast";
import Modal from "@/components/Modal";

function Events() {
  const user = userSlice((state) => state.user);
  const [events, setEvents] = useState<EventType | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const controller = new AbortController();
    const getEvents = async () => {
      try {
        toast.loading("Fetching events...", { id: "event" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/event`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
            signal: controller.signal,
          }
        );
        if (data.code === 200) {
          toast.success("Events Fetched Successfully", { id: "event" });
          setEvents(data.data);
        }
        if (data.code !== 200) {
          toast.error("coludn't fetch events", { id: "event" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getEvents();
    return () => {
      toast.dismiss("event");
      toast.dismiss("deleteEvent");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const [closeEvent, setCloseEvent] = useState(false);

  const deleteEvent = async () => {
    try {
      toast.loading("processing...", { id: "deleteEvent" });
      await axios
        .delete(
          `${base_url}/api/v1/stackivy/admin/marketing/event/${selectedEvent?.id}`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        )
        .then(() => {
          toast.success("event deleted successfully", { id: "deleteEvent" });
          navigate(0);
        });
    } catch (error) {
      console.log(error);
    }
  };
  const onCancelConfirmation = () => {
    setCloseEvent(false);
    setSelectedEvent(null);
  };

  const CloseEventModal = () => (
    <Modal>
      <div className="rounded-[24px] bg-white p-7 text-center w-[320px]">
        <h1>
          Are you sure you want to close this event{" "}
          <span className="font-semibold">“{selectedEvent?.title}”</span>
        </h1>
        <div className="flex justify-center mt-6 gap-5">
          <button
            className="outline-none text-white bg-[#116B89] rounded-full px-5 py-2"
            onClick={deleteEvent}
          >
            Yes Close
          </button>
          <button onClick={onCancelConfirmation}>Cancel</button>
        </div>
      </div>
    </Modal>
  );
  return (
    <section className="">
      {closeEvent && <CloseEventModal />}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Events</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto min-h-screen bg-white rounded-[16px] p-7">
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
                    {events?.active_event.map((event) => (
                      <div
                        className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]"
                        key={event.id}
                      >
                        <div className="flex justify-between py-5 px-5 ">
                          <h1 className="text-[20px] leading-5 font-medium mag">
                            {event.title}
                          </h1>
                          <div className="flex gap-6">
                            <div
                              className="flex items-center gap-1 cursor-pointer"
                              onClick={() => {
                                const selectedE = events.active_event.find(
                                  (e) => e.id === event.id
                                );
                                if (selectedE) {
                                  setSelectedEvent(selectedE);
                                  setCloseEvent(true);
                                }
                              }}
                            >
                              <XCircle className="text-[#EF4444] w-3-[14px] h-[14px]" />
                              <span className="font-semibold text-[14px]">
                                Close Event
                              </span>
                            </div>
                            <Link
                              to={`/events/edit?id=${event.id}&image_url=${event.image.file_url}&title=${event.title}`}
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
                          <img
                            src={event.image.file_url}
                            className="rounded-[20px] h-[300px] w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="closedEvents" className="pb-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    {events?.inactive_event.map((event) => (
                      <div
                        className="border-[1px] rounded-[20px] border-[#E5E7EB] bg-[#FAFAFA]"
                        key={event.id}
                      >
                        <div className="flex justify-between py-5 px-5 ">
                          <h1 className="text-[20px] leading-5 font-medium mag">
                            {event.title}
                          </h1>
                          <div className=" gap-6 hidden">
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
                              to={`/events/edit?id=${event.id}&image_url=${event.image.file_url}&title=${event.title}`}
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
                          <img
                            src={event.image.file_url}
                            className="rounded-[20px] h-[300px] object-cover object-center w-full"
                          />
                        </div>
                      </div>
                    ))}
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

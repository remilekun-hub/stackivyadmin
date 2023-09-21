import { useState, useEffect } from "react";
import SharedTable from "../components/Tables/SharedTable";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColumnDef } from "@tanstack/react-table";
import { XCircleIcon } from "lucide-react";
import SingleWebinar from "@/components/SingleWebinar";
import { Link } from "react-router-dom";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import toast from "react-hot-toast";
import { GroupWebinarType, base_url, Speaker } from "../../types";
import Modal from "../components/Modal.tsx";

function Webinars() {
  const user = userSlice((state) => state.user);
  const [webinars, setWebinars] = useState<GroupWebinarType | null>();
  const [viewNote, setViewNote] = useState(false);
  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null);
  const columns: ColumnDef<Speaker>[] = [
    {
      accessorKey: "first_name",
      header: "NAME",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div>
            <span>
              {data.first_name} {data.last_name}
            </span>
          </div>
        );
      },
    },
    { accessorKey: "email", header: "EMAIL ADDRESS" },
    { accessorKey: "phone", header: "PHONE NUMBER" },
    { accessorKey: "linkedin", header: "LINKEDIN" },
    { accessorKey: "instagram", header: "INSTAGRAM" },
    {
      id: "actions",
      header: "NOTE",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <div>
            <span
              className="text-[#116B89] underline"
              onClick={() => {
                let singleSpeaker;
                if (speakers) {
                  singleSpeaker = speakers.find((s) => s.id === data.id);
                }

                if (singleSpeaker) {
                  setSelectedSpeaker(singleSpeaker);
                  setViewNote(true);
                }
              }}
            >
              View Note
            </span>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    const getWebinars = async () => {
      try {
        toast.loading("Fetching webinars...", { id: "webinars" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/webinar`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
          }
        );
        if (data.code === 200) {
          toast.success("Webinars Fetched Successfully ..", { id: "webinars" });
          setWebinars(data.data);
        }
        if (data.code !== 200) {
          toast.error("couldn't fetch webinars ..", { id: "webinars" });
          setWebinars(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getWebinars();
    return () => {
      toast.dismiss("webinars");
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    const controller = new AbortController();
    const getSpeakers = async () => {
      try {
        toast.loading("Fetching speakers...", { id: "speakers" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/webinar/speaker`,
          {
            headers: {
              Authorization: `Bearer ${user?.token}`,
            },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          toast.success("Speakers fetched successfully ..", { id: "speakers" });
          setSpeakers(data.data);
        }
        if (data.code !== 200) {
          toast.error("couldn't fetch speakers ..", { id: "speakers" });
          setWebinars(data.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSpeakers();
    return () => {
      toast.dismiss("speakers");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const NotesModal = () => (
    <Modal>
      <div className="rounded-[16px] bg-white p-7 text-center w-[808px]">
        <div className="flex items-center justify-between pt-1">
          {/* <h1 className="font-semibold">Investment and Planning</h1> */}
          <div />
          <XCircleIcon
            className="text-[#9CA3AF] w-4 h-4 cursor-pointer"
            onClick={() => setViewNote(false)}
          />
        </div>

        <p className="text-left mt-5 pb-4 text-[#818181] leading-6">
          {selectedSpeaker?.note}
        </p>
      </div>
    </Modal>
  );
  return (
    <section>
      {viewNote && <NotesModal />}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Webinars</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto bg-white rounded-[16px] border-[1px] min-h-screen border-[#F3F4F6] p-7">
          <div>
            <Tabs defaultValue="application">
              <div className="flex justify-between flex-wrap items-center gap-10 border-[#F3F4F6]">
                <TabsList className="flex justify-start gap-[40px] ">
                  <TabsTrigger
                    value="application"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Speakers Applications
                  </TabsTrigger>
                  <TabsTrigger
                    value="live"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Live Webinars
                  </TabsTrigger>
                  <TabsTrigger
                    value="closed"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Closed Webinars
                  </TabsTrigger>
                </TabsList>
                <div>
                  <Link
                    to={"/webinars/create"}
                    className="px-6 py-4 bg-[#116B89] text-white rounded-full"
                  >
                    Create New Webinar +
                  </Link>
                </div>
              </div>
              <div className="pt-7 px-2">
                <TabsContent value="application" className="pb-2">
                  <SharedTable data={speakers} columns={columns} />
                </TabsContent>
                <TabsContent value="live" className="pb-2">
                  <div className="">
                    {webinars?.active_webinar.map((w) => (
                      <SingleWebinar key={w.id} {...w} />
                    ))}
                  </div>
                </TabsContent>
                <TabsContent value="closed" className="pb-2">
                  <div className="">
                    {webinars?.inactive_webinar.map((w) => (
                      <SingleWebinar key={w.id} {...w} />
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

export default Webinars;

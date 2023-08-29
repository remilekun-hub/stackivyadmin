import { useState } from "react";
import SharedTable from "../components/Tables/SharedTable";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Speaker, speakers } from "@/dummy/speakers";
import { ColumnDef } from "@tanstack/react-table";
import { XCircleIcon } from "lucide-react";
import SingleWebinar from "@/components/SingleWebinar";
import { Link } from "react-router-dom";

function Webinars() {
  const [viewNote, setViewNote] = useState(false);
  const columns: ColumnDef<Speaker>[] = [
    { accessorKey: "Name", header: "NAME" },
    { accessorKey: "email", header: "EMAIL ADDRESS" },
    { accessorKey: "phonenumber", header: "PHONE NUMBER" },
    { accessorKey: "platform", header: "LINKEDIN/INSTAGRAM" },
    {
      id: "actions",
      header: "NOTE",
      cell: () => {
        // const data = row.original;

        return (
          <div>
            <span
              className="text-[#116B89] underline"
              onClick={() => setViewNote(true)}
            >
              View Note
            </span>
          </div>
        );
      },
    },
  ];

  return (
    <section>
      {viewNote && (
        <div className="fixed w-screen h-screen top-0 left-0 bg-black/60 z-[99999999999999999999999999] flex items-center justify-center">
          <div className="rounded-[16px] bg-white p-7 text-center w-[808px]">
            <div className="flex items-center justify-between pt-1">
              <h1 className="font-semibold">Investment and Planning</h1>
              <XCircleIcon
                className="text-[#9CA3AF] w-4 h-4 cursor-pointer"
                onClick={() => setViewNote(false)}
              />
            </div>
            <p className="text-left mt-5 pb-4 text-[#818181] leading-6">
              Lorem ipsum dolor sit amet consectetur. Ipsum lorem ullamcorper
              vitae amet non. Amet elementum tellus eleifend varius quam id
              egestas urna. Volutpat ut non viverra et cras vitae morbi nibh.
              Sagittis praesent ut integer diam suspendisse bibendum iaculis
              justo. Tempor nisl id habitasse facilisis. Lobortis in
              pellentesque viverra aliquet. Nunc pellentesque cras ut ut
              placerat nec suspendisse. Duis mattis diam eu risus. A augue
              placerat elementum eget purus id viverra in. Enim pellentesque
              nunc et nunc habitant consectetur vitae in. Duis hendrerit
              placerat non molestie ultrices. Eget sem sapien vestibulum
              imperdiet tempus facilisis amet sit urna. Tincidunt nulla nam
              lectus in amet purus in.
            </p>
          </div>
        </div>
      )}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Webinars</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] border-[1px] h-screen border-[#F3F4F6] p-7">
          <div>
            <Tabs defaultValue="application">
              <div className="flex justify-between flex-wrap items-center gap-5 border-[#F3F4F6]">
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
                    <SingleWebinar />
                  </div>
                </TabsContent>
                <TabsContent value="closed" className="pb-2">
                  clossed
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

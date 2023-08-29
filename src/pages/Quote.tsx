import { useState } from "react";
import PendingTable from "@/components/Tables/PendingTable";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ColumnDef } from "@tanstack/react-table";
import { pending } from "@/dummy/pending";
import { PendingType } from "@/dummy/pending";
import glassIcon2 from "../assets/search-two.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  MoreHorizontal,
  CheckCircle2,
  XCircle,
  PencilLine,
  Eye,
} from "lucide-react";
import ContactedTable from "@/components/Tables/ContactedTable";
// import Modal from "@/components/Modal";

function Quote() {
  // const [data] = useState<PendingType[]>([...pending]);
  const [openfeedback, setOpenFeedack] = useState(false);
  const [viewPendingMessage, setViewPendingMessage] = useState(false);
  const [dropFeedback, setDropFeedback] = useState(false);
  // const [modal, setModal] = useState<
  //   "feedbackModal" | "viewMessageModal" | false
  // >(false);

  const columns: ColumnDef<PendingType>[] = [
    { accessorKey: "firstname", header: "first name" },
    { accessorKey: "lastname", header: "last name" },
    { accessorKey: "mobilenumber", header: "Mobile Number" },
    { accessorKey: "email", header: "email" },
    { accessorKey: "category", header: "category" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: () => {
        return (
          <span
            className="underline text-[#116B89]"
            onClick={() => setViewPendingMessage(true)}
          >
            View Message
          </span>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center text-black  gap-3 mb-1"
                // onClick={() => navigate(`/career/application/${applicant.id}`)}
              >
                <CheckCircle2 className="w-4 h-4 text-[#22C55E]" />
                <span className="text-black">Move to Contacted</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <XCircle className="w-4 h-4 text-[#FFCA0D]" />
                <span className="text-black">Move to Close Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <span>cc</span>
                <span className="text-black">Move to Failed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <PencilLine className="w-4 h-4 text-black" />
                <span
                  className="text-black"
                  onClick={() => setDropFeedback(true)}
                >
                  Drop Feedback
                </span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const contactedColumns: ColumnDef<PendingType>[] = [
    { accessorKey: "firstname", header: "first name" },
    { accessorKey: "lastname", header: "last name" },
    { accessorKey: "mobilenumber", header: "Mobile Number" },
    { accessorKey: "email", header: "email" },
    { accessorKey: "category", header: "category" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: () => {
        return <span className="underline text-[#116B89]">View Message</span>;
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <XCircle className="w-4 h-4 text-[#FFCA0D]" />
                <span className="text-black">Move to Close Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4 mb-1">
                <span>cc</span>
                <span className="text-black">Move to Failed Deals</span>
              </DropdownMenuItem>

              <DropdownMenuItem>
                <div
                  className="cursor-pointer flex items-center gap-4 mb-1"
                  onClick={() => setOpenFeedack(true)}
                >
                  <Eye className="w-4 h-4 text-black" />
                  <span className="text-black">View Feedback</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const closedDealsColumns: ColumnDef<PendingType>[] = [
    { accessorKey: "firstname", header: "first name" },
    { accessorKey: "lastname", header: "last name" },
    { accessorKey: "mobilenumber", header: "Mobile Number" },
    { accessorKey: "email", header: "email" },
    { accessorKey: "category", header: "category" },
    {
      accessorKey: "message",
      header: "messsage",
      cell: () => {
        return <span className="underline text-[#116B89]">View Message</span>;
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <div
                  className="cursor-pointer flex items-center gap-4 mb-1"
                  onClick={() => setOpenFeedack(true)}
                >
                  <PencilLine className="w-4 h-4 text-black" />
                  <span className="text-black">View Feedback</span>
                </div>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return (
    <section className="">
      {openfeedback && (
        <div className="fixed top-0 left-0 h-screen w-screen flex bg-black/60 z-[9999999999999999999999999999999] justify-center items-center">
          <div className="bg-white rounded-[16px] h-[300px] p-7 w-[808px]">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-black font-semibold">Feedback</h1>
              <XCircle
                className="w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => setOpenFeedack(false)}
              />
            </div>
            <div>
              <p className="text-[#818181]">
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
        </div>
      )}
      {viewPendingMessage && (
        <div className="fixed top-0 left-0 h-screen w-screen flex bg-black/60 z-[9999999999999999999999999999999] justify-center items-center">
          <div className="bg-white rounded-[16px] h-[300px] p-7 w-[808px]">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-black font-semibold">
                Investment and Planning
              </h1>
              <XCircle
                className="w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => setViewPendingMessage(false)}
              />
            </div>
            <div>
              <p className="text-[#818181]">
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
        </div>
      )}
      {dropFeedback && (
        <div className="fixed top-0 left-0 h-screen w-screen flex bg-black/60 z-[9999999999999999999999999999999] justify-center items-center">
          <div className="bg-white rounded-[16px] h-[320px] p-7 pb-8 w-[808px]">
            <div className="flex justify-between items-center mb-5">
              <h1 className="text-black font-semibold">Feedback</h1>
              <XCircle
                className="w-4 h-4 text-gray-400 cursor-pointer"
                onClick={() => setDropFeedback(false)}
              />
            </div>
            <div>
              <textarea className="w-full outline-none border-[1px] h-[140px] p-2 border-[#E9E9E9] rounded-[8px] mb-5" />
              <button className="bg-[#116B89] text-wite mb-4 px-5 text-white py-2 rounded-full">
                Post Feedback
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Quotes</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        {/* <div onClick={() => setModal("feedbackModal")}>open modal</div> */}

        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] border-[1px] h-full border-[#F3F4F6] p-7">
          <div>
            <Tabs defaultValue="pending">
              <div className="flex justify-between flex-wrap items-center gap-5 border-b-[1px] border-[#F3F4F6]">
                <TabsList className="flex justify-start gap-[40px] ">
                  <TabsTrigger
                    value="pending"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger
                    value="contacted"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Contacted
                  </TabsTrigger>
                  <TabsTrigger
                    value="closed-deals"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Closed Deals
                  </TabsTrigger>
                  <TabsTrigger
                    value="failed-deals"
                    className="text-[14px] py-4 leading-5 px-0"
                  >
                    Failed Deals
                  </TabsTrigger>
                </TabsList>
                <div>
                  <div className=" flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4 rounded-[4px] overflow-hidden">
                    <img src={glassIcon2} className="w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for something here"
                      className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
                    />
                  </div>
                </div>
              </div>
              <div className="pt-5">
                <TabsContent value="pending" className="pb-2">
                  <PendingTable columns={columns} data={pending} />
                </TabsContent>
                <TabsContent value="contacted" className="pb-2">
                  <ContactedTable columns={contactedColumns} data={pending} />
                </TabsContent>
                <TabsContent value="closed-deals" className="pb-2">
                  <ContactedTable columns={closedDealsColumns} data={pending} />
                </TabsContent>
                <TabsContent value="failed-deals" className="pb-2">
                  <ContactedTable columns={closedDealsColumns} data={pending} />
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default Quote;

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar.tsx";
import CustomDataTable from "@/components/CustomDataTable.tsx";
import edit22 from "../assets/edit22.png";
import del22 from "../assets/del22.png";
import close from "../assets/close-circle.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";

function CareerSettimgs() {
  type SettingsType = {
    id: string;
    name: string;
  };
  const [createJob, setCreateJob] = useState(false);
  const settings = [
    {
      id: "1",
      name: "Onsite",
    },
    {
      id: "2",
      name: "Remote",
    },
    {
      id: "3",
      name: "Hybrid",
    },
  ];
  const columns: ColumnDef<SettingsType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const setting = row.original;
        return (
          <>
            <div className="w-[450px]">{setting.name}</div>
          </>
        );
      },
    },

    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const setting = row.original;

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
                className="cursor-pointer flex items-center  gap-3"
                // onClick={() => navigate(`/career/applicant/${applicant.id}`)}
              >
                <span>
                  <img src={edit22} className="w-3 h-3" />
                </span>{" "}
                <span>Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-3">
                <span>
                  <img src={del22} className="w-3 h-3" />
                </span>{" "}
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <section>
      {createJob && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1>Create Work Place </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateJob(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Work Place Type</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
              />
              <button className="rounded-full text-white px-7 py-[10px] bg-[#116B89]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="mx-auto">
            <Tabs defaultValue="workplace" className="w-full mx-auto">
              <div className=" border-b-[1px] border-b-[#F3F4F6] mx-6">
                <TabsList className="flex gap-3 w-[300px] justify-center mx-auto h-[90px]">
                  <TabsTrigger value="workplace">Work Place Type</TabsTrigger>
                  <TabsTrigger value="jobtype">Job Type</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                </TabsList>
              </div>
              <div className="w-[600px] mx-auto">
                <TabsContent value="workplace">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateJob(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={columns} data={settings} />
                  </div>
                </TabsContent>
                <TabsContent value="jobtype">Job Type here</TabsContent>
                <TabsContent value="documents">Documents</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CareerSettimgs;

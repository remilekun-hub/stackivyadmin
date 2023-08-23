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
  type JobType = {
    id: string;
    name: string;
  };
  type DocumentType = {
    id: string;
    name: string;
  };

  const [createJob, setCreateJob] = useState(false);
  const [createJobType, setCreateJobType] = useState(false);
  const [createDoc, setCreateDoc] = useState(false);
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

  const documents = [
    {
      id: "1",
      name: "CV",
    },
    {
      id: "2",
      name: "Cover Letter",
    },
    {
      id: "3",
      name: "Portfolio",
    },
  ];

  const DocColumns: ColumnDef<DocumentType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const doc = row.original;
        return (
          <>
            <div className="w-[300px]">{doc.name}</div>
          </>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const doc = row.original;

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
  const jobtype = [
    {
      id: "1",
      name: "Full Time",
    },
    {
      id: "2",
      name: "Part Time",
    },
    {
      id: "3",
      name: "Contract",
    },
    {
      id: "4",
      name: "Temporary",
    },
    {
      id: "5",
      name: "Other",
    },
    {
      id: "6",
      name: "Volunteer",
    },
    {
      id: "6",
      name: "Internship",
    },
  ];
  const JobColumns: ColumnDef<JobType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const jobtype = row.original;
        return (
          <>
            <div className="w-[300px]">{jobtype.name}</div>
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
  const columns: ColumnDef<SettingsType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const setting = row.original;
        return (
          <>
            <div className="w-[300px]">{setting.name}</div>
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
              <h1 className="font-bold">Create Work Place </h1>
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

      {createJobType && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Job Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateJobType(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Job Type</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name of Job Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
              />
              <button className="rounded-full text-white px-7 py-[10px] bg-[#116B89]">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {createDoc && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Document Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateDoc(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Document Type</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name of Document Type"
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
                <TabsList className="flex gap-8 w-[300px] justify-center mx-auto h-[100px]">
                  <TabsTrigger value="workplace" className="pb-5 px-0">
                    Work Place Type
                  </TabsTrigger>
                  <TabsTrigger value="jobtype" className="pb-5 px-0">
                    Job Type
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="pb-5 px-0">
                    Documents
                  </TabsTrigger>
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
                <TabsContent value="jobtype">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateJobType(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={JobColumns} data={jobtype} />
                  </div>
                </TabsContent>
                <TabsContent value="documents">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateDoc(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={DocColumns} data={documents} />
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

export default CareerSettimgs;

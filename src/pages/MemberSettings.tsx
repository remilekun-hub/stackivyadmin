import { useState } from "react";
import Navbar from "../components/Navbar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import close from "../assets/close-circle.png";
import edit22 from "../assets/edit22.png";
import del22 from "../assets/del22.png";
import SettingsTable from "../components/Tables/SettingsTable";

function MemberSettings() {
  const [createRole, setCreateRole] = useState(false);
  type RoleType = {
    id: string;
    name: string;
  };
  const roles = [
    {
      id: "1",
      name: "Admin",
    },
    {
      id: "2",
      name: "Support",
    },
    {
      id: "3",
      name: "Marketing",
    },
    {
      id: "4",
      name: "Account Officer",
    },
  ];
  const RoleColumns: ColumnDef<RoleType>[] = [
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

  return (
    <section>
      {createRole && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Role Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateRole(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Role Type</p>
              <input
                type="text"
                name=""
                id=""
                placeholder="Enter Name of Role Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
              />
              <button className="rounded-full text-white px-7 py-[10px] bg-[#116B89] block ml-auto">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      <Navbar>
        <div className="flex items-center gap-[6px]">
          <h1 className="font-bold text-[24px]">Member -</h1>
          <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
            Settings
          </span>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <h1 className="font-semibold text-center pt-10">Role Type</h1>
          <hr className=" mt-5 mx-9" />
          <div className=" w-[650px] mx-auto">
            <div className="flex justify-end mt-10">
              <button
                className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                onClick={() => setCreateRole(true)}
              >
                Add +{" "}
              </button>
            </div>
            <div className="mt-3">
              <SettingsTable columns={RoleColumns} data={roles} />
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default MemberSettings;

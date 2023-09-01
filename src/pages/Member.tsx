import Navbar from "../components/Navbar";
import MembersTable from "../components/Tables/MembersTable";
import { UserType } from "../dummy/users";
import { users } from "../dummy/users";
import { ColumnDef } from "@tanstack/react-table";
import { XCircleIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import trash from "../assets/trash.png";
import eye from "../assets/eye.png";
import { useNavigate } from "react-router-dom";
import { useState, useRef, ChangeEvent } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Member() {
  const navigate = useNavigate();
  const fileRef = useRef<HTMLInputElement>(null);
  const [addNewMember, setAddNewMember] = useState(false);
  const [deleteMember, setDeleteMember] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const columns: ColumnDef<UserType>[] = [
    {
      accessorKey: "user",
      header: "USERS",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="flex gap-3 items-center">
            <img src={data.user.img} className="w-7 h-7" />
            <span>{data.user.name}</span>
          </div>
        );
      },
    },
    { accessorKey: "role", header: "ROLE" },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "lastLogin",
      header: "LAST LOGIN",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <div className="flex flex-col gap-2">
            <span>{data.lastLogin.date}</span>
            <span className="text-[#9CA3AF] text-[13px]">
              {data.lastLogin.time}
            </span>
          </div>
        );
      },
    },

    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const data = row.original;

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
                className="cursor-pointer flex items-center  gap-4"
                onClick={() => navigate(`/member/manage/${data.id}`)}
              >
                <span>
                  <img src={eye} className="w-4 h-4" />
                </span>{" "}
                <span className="text-black">View Member Details</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4"
                onClick={() => setDeleteMember(true)}
              >
                <span className="mb-[5px]">
                  <img src={trash} className="w-4 h-4" />
                </span>{" "}
                <span className="text-black">Delete Member</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <section>
      {addNewMember && (
        <div className="flex w-screen h-screen justify-center fixed top-0 left-0 z-[999999999999999999] items-center bg-black/60">
          <div className="bg-white w-[778px] rounded-[24px]">
            <div className="flex justify-between items-center px-8 pt-7 pb-5 border-b-[1px] border-[#F5F5F5]">
              <h1 className="font-semibold">Add New Member</h1>
              <XCircleIcon
                className="w-6 h-6 text-[#9CA3AF] cursor-pointer"
                onClick={() => setAddNewMember(false)}
              />
            </div>
            <div className="p-8">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4"
                    placeholder="First Name"
                    required
                  />
                  <input
                    type="text"
                    name="Lastname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4"
                    placeholder="Last Name"
                    required
                  />
                  <input
                    type="text"
                    name="Username"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4"
                    placeholder="User Name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4"
                    placeholder="Email"
                    required
                  />
                  <input
                    type="text"
                    name="phonenumber"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 h-[68px]"
                    placeholder="Phone Number"
                    required
                  />

                  <Select>
                    <SelectTrigger className="w-full py-8 px-5 mb-6 outline-none focus-within:outline-none">
                      <SelectValue placeholder="User Role" />
                    </SelectTrigger>
                    <SelectContent className="z-[99999999999999999999999999999999999999999] overflow-hidden">
                      <SelectGroup>
                        <SelectLabel>User Role</SelectLabel>
                        <SelectItem value="Admin">Admin</SelectItem>
                        <SelectItem value="Support">Support</SelectItem>
                        <SelectItem value="Marketing">Marketing</SelectItem>
                        <SelectItem value="Account Officer">
                          Account Officer
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="password"
                    name="Password"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4"
                    placeholder="Password"
                    required
                  />

                  <button
                    className="px-5 py-4 border-[1px] border-dashed border-[#116B89] rounded-[4px]"
                    onClick={() => {
                      if (fileRef && fileRef.current) {
                        fileRef.current.click();
                      }
                    }}
                  >
                    <p className="text-center text-[#116B89]">
                      + Upload Picture
                    </p>
                    <input
                      type="file"
                      name=""
                      id=""
                      className="hidden"
                      ref={fileRef}
                      required
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files) {
                          setImage(e.target.files[0]);
                        }
                      }}
                    />
                    <p>{image?.name}</p>
                  </button>
                </div>

                <div className="my-8 flex gap-6">
                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Dashboard
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Career
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Startup
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Quote
                    </label>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Marketing
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Member
                    </label>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Account
                    </label>
                  </div>
                </div>
                <button className="bg-[#116B89] text-white rounded-full block  ml-auto px-5 py-2 my-5">
                  Add Member
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {deleteMember && (
        <div className="flex w-screen h-screen justify-center fixed top-0 left-0 z-[999999999999999999] items-center bg-black/60">
          <div className="bg-white w-[450px] rounded-[24px] p-10">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Delete "Adebowale Franca"</h1>
              <XCircleIcon
                className="w-6 h-6 text-[#9CA3AF] cursor-pointer"
                onClick={() => setDeleteMember(false)}
              />
            </div>
            <div className="mt-2">
              <p className="text-[#9CA3AF]">
                You will not be able to undo after deleting this member
              </p>
              <div className="flex gap-7 mt-5 mb-3">
                <button className="text-[#FF0606] font-semibold bg-[#FFEBEB] px-10 py-3 rounded-full outline-none">
                  Yes, delete
                </button>
                <button
                  className="font-semibold rounded-full outline-none"
                  onClick={() => setDeleteMember(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <div className="flex items-center gap-[6px]">
          <h1 className="font-bold text-[24px]">Member -</h1>
          <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
            Manage Member
          </span>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="flex justify-between  border-b-[2px] border-b-[#F3F4F6] items-center h-[110px] px-8">
            <h1 className="font-semibold text-[17px]">Manage Members</h1>
            <button
              className="flex items-center gap-[2px] bg-[#116B89] px-6 py-3 text-white rounded-full"
              onClick={() => setAddNewMember(true)}
            >
              Add New Member +
            </button>
          </div>
          <div className="px-8 pt-4">
            <MembersTable data={users} columns={columns} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Member;

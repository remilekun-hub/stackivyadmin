import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import userImg from "../assets/profileimg.png";
import { RecentType, recent } from "@/dummy/Recent";
import RecentTable from "@/components/Tables/RecentTable";
import { ColumnDef } from "@tanstack/react-table";
import edit from "../assets/editA.png";
import { XCircleIcon } from "lucide-react";
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

function SingleMember() {
  const fileRef = useRef<HTMLInputElement>(null);
  const [changeP, setChangeP] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [editA, setEditA] = useState(false);
  const columns: ColumnDef<RecentType>[] = [
    {
      accessorKey: "Date",
      header: "Date",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <div className="w-[400px]">{data.Date}</div>
          </>
        );
      },
    },
    {
      accessorKey: "Ip",
      header: "SOURCE IP",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <div className="w-[300px] text-[#2563EB]">{data.Ip}</div>
          </>
        );
      },
    },

    { accessorKey: "message", header: "MESSAGE" },
  ];
  return (
    <section className="">
      {changeP && (
        <div className="flex w-screen h-screen justify-center fixed top-0 left-0 z-[999999999999999999] items-center bg-black/60">
          <div className="bg-white w-[450px] rounded-[24px] p-10">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Change Password</h1>
              <XCircleIcon
                className="w-6 h-6 text-[#9CA3AF] cursor-pointer"
                onClick={() => setChangeP(false)}
              />
            </div>
            <div className="mt-6">
              <p className="mb-2 text-[#9CA3AF]">New Password</p>
              <input
                type="text"
                name=""
                className="outline-none rounded-[8px] border-[1px] border-[#E6E6E6] px-5 py-4 w-full text-[#D1D5DB]"
                placeholder="Enter New Password"
              />
              <button className="bg-[#116B89]  ml-auto mt-10 rounded-full text-white py-3 px-7 block">
                Save
              </button>
            </div>
          </div>
        </div>
      )}
      {editA && (
        <div className="flex w-screen h-screen justify-center fixed top-0 left-0 z-[999999999999999999] items-center bg-black/60">
          <div className="bg-white w-[778px] rounded-[24px]">
            <div className="flex justify-between items-center px-8 pt-7 pb-5 border-b-[1px] border-[#F5F5F5]">
              <h1 className="font-semibold">Edit Member Details</h1>
              <XCircleIcon
                className="w-6 h-6 text-[#9CA3AF] cursor-pointer"
                onClick={() => setEditA(false)}
              />
            </div>
            <div className="p-8">
              <form>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="First Name"
                    defaultValue={"Adebowale"}
                    required
                  />
                  <input
                    type="text"
                    name="Lastname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="Last Name"
                    defaultValue={"Franca"}
                    required
                  />
                  <input
                    type="text"
                    name="Username"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="User Name"
                    defaultValue={"Frankss90"}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="Email"
                    defaultValue={"AdebowaleFranca234@gmail.com"}
                    required
                  />
                  <input
                    type="text"
                    name="phonenumber"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 h-[68px] font-semibold"
                    placeholder="Phone Number"
                    defaultValue={"08156554352"}
                    required
                  />

                  <Select defaultValue="Admin">
                    <SelectTrigger className="w-full py-8 px-5 mb-6 outline-none font-semibold focus-within:outline-none">
                      <SelectValue
                        placeholder="User Role"
                        className="font-semibold"
                      />
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
                    type="text"
                    name="Password"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    defaultValue={"Adebowal_80"}
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
                  Save Update
                </button>
              </form>
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
      <main className="bg-[#F3F4F6] p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto min-h-screen bg-white rounded-[16px]">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link to="/members/manage" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Details</h1>
            </Link>
          </div>

          <div className="mx-auto mt-7">
            <Tabs defaultValue="info" className="w-full mx-auto">
              <div className="">
                <TabsList className="flex pb-0 gap-9 w-[300px] justify-center mx-auto h-[100px]">
                  <TabsTrigger value="info" className="pb-5 px-0">
                    Account Info
                  </TabsTrigger>
                  <TabsTrigger value="activities" className="pb-5 px-0">
                    Recent Activities
                  </TabsTrigger>
                </TabsList>
                <hr className="mt-[-24px] mx-9" />
              </div>
              <div className="w-full mt-10">
                <TabsContent value="info">
                  <div className="mx-9 mt-8 rounded-[10px] border-[1px] border-[#F3F4F6] p-[50px]">
                    <div className="">
                      <div className="relative w-[300px] mx-auto">
                        <img
                          src={userImg}
                          alt="user image"
                          className="w-[90px] h-[90px] mb-8 mx-auto"
                        />
                        <button
                          className="absolute right-0 top-[30px] text-white bg-[#116B89] flex items-center px-4 py-1 rounded-[4px]"
                          onClick={() => setEditA(true)}
                        >
                          <img src={edit} className="w-[13px] h-[13px]" />
                          <span className="ml-2"> Edit</span>
                        </button>
                      </div>

                      <p className="mb-4 text-center font-semibold">
                        Adebowale Franca
                      </p>

                      <div className="flex justify-center">
                        <button className="text-[#116B89] font-semibold mx-auto bg-[#F9FAFB]  rounded-[4px] px-[11px] py-[5px] ">
                          Admin
                        </button>
                      </div>
                    </div>
                    <div className="mt-[70px]">
                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Email</p>
                        <p className="font-semibold">
                          Adebowale Franca234@gmail.com
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Phone Number</p>
                        <p className="font-semibold">08168463526</p>
                      </div>
                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Joined Since</p>
                        <p className="font-semibold">10/12/2023</p>
                      </div>
                      <div className="flex justify-between items-center mb-10  gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Permission</p>
                        <div className="flex gap-3">
                          <div>
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className="accent-[#228B22] cursor-pointer"
                              defaultChecked={true}
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
                              className="accent-[#228B22] cursor-pointer"
                              defaultChecked={true}
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
                              className="accent-[#228B22] cursor-pointer"
                              defaultChecked={true}
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
                              defaultChecked={true}
                              className="accent-[#228B22] cursor-pointer"
                            />
                            <label
                              htmlFor=""
                              className="ml-[6px] text-[14px] text-[#6B7280]"
                            >
                              Quote
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Current Password</p>
                        <div className="flex gap-3 items-center">
                          <p className="font-semibold">Adebowal_80</p>
                          <button
                            className="text-[#116B89] font-semibold mx-auto bg-[#F9FAFB]  rounded-[4px] px-[11px] py-[5px] "
                            onClick={() => setChangeP(true)}
                          >
                            Change
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activities">
                  <div className="mx-9 mt-8">
                    <RecentTable data={recent} columns={columns} />
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

export default SingleMember;

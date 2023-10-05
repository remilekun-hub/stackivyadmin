import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import userImg from "../assets/profileimg.png";
import { RecentType, recent } from "@/dummy/Recent";
import RecentTable from "@/components/Tables/RecentTable";
import { ColumnDef } from "@tanstack/react-table";
import edit from "../assets/editA.png";
import { XCircleIcon } from "lucide-react";
import { useState, useRef, ChangeEvent, useEffect, FormEvent } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { MemberType, base_url } from "../../types";
import { userSlice } from "../Hooks/user";
import { format, parseISO } from "date-fns";
import { useNavigate } from "react-router-dom";

function SingleMember() {
  const { id } = useParams();
  const navigate = useNavigate();
  const user = userSlice((state) => state.user);
  const fileRef = useRef<HTMLInputElement>(null);
  const [changeP, setChangeP] = useState(false);
  const [image, setImage] = useState<File | null>(null);
  const [editA, setEditA] = useState(false);
  const [member, setMember] = useState<MemberType>();
  const [updateMember, setUpdateMember] = useState({
    first_name: "",
    last_name: "",
    title: "",
    phone: "",
    email: "",
  });
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [permissions, setPermissions] = useState<string[]>([]);
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

  useEffect(() => {
    const controller = new AbortController();
    const getMembers = async () => {
      if (!id) return;
      try {
        toast.loading("Getting member", { id: "singlemember" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/member/${id}`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          toast.success("Request Successful", { id: "singlemember" });
          setMember(data.members);
          setUpdateMember(data.members);
          setPermissions(data.members.permissions);
        }
        if (data.code !== 200) {
          toast.error("coludn't fetch member", { id: "singlemember" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getMembers();
    return () => {
      toast.dismiss("singlemember");
      controller.abort();
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    if (changeP) {
      document.body.classList.add("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [changeP]);

  useEffect(() => {
    if (editA) {
      document.body.classList.add("overflow-y-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [editA]);

  const onUpdatePassword = async () => {
    if (!password) return;
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/member/${member?.admin_id}/password`,
        { password },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setMessage(data.message);
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
    } finally {
      setPassword("");
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 2000);
    }
  };

  const handleUpdateMember = async (e: FormEvent) => {
    e.preventDefault();
    if (!member || !updateMember) return;
    const form_data = new FormData();

    try {
      setIsLoading(true);
      if (image) {
        form_data.append("image", image);
      }

      form_data.append("first_name", updateMember.first_name);
      form_data.append("last_name", updateMember.last_name);
      form_data.append("title", updateMember.title);
      form_data.append("phone", updateMember.phone);
      form_data.append("email", updateMember.email);
      // form_data.append("permissions", JSON.stringify(permissions));

      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/member/${member?.admin_id}`,
        form_data,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        setMessage(data.message);
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section className="">
      {changeP && (
        <div className="flex w-screen h-screen justify-center px-10 fixed top-0 left-0 z-[999999999999999999] items-center bg-black/60">
          <div className="bg-white w-[300px] sm:w-[450px] rounded-[24px] p-10">
            <div className="flex justify-between items-center">
              <h1 className="font-semibold">Change Password</h1>
              <XCircleIcon
                className="w-6 h-6 text-[#9CA3AF] cursor-pointer"
                onClick={() => {
                  setPassword("");
                  setChangeP(false);
                }}
              />
            </div>
            <div className="mt-6">
              <p className="mb-2 text-[#9CA3AF]">New Password</p>
              <input
                type="text"
                name=""
                className="text-black outline-none rounded-[8px] border-[1px] border-[#E6E6E6] px-5 py-4 w-full"
                placeholder="Enter New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="bg-[#116B89]  ml-auto mt-10 text-center rounded-full text-white py-3  px-7 block"
                onClick={onUpdatePassword}
                disabled={isLoading}
              >
                <div className="inline-flex justify-center text-center items-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin   h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          stroke-width="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center mt-2">{message}</p>
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
              <form onSubmit={handleUpdateMember}>
                <div className="grid grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="firstname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="First Name"
                    defaultValue={updateMember.first_name}
                    onChange={(e) =>
                      setUpdateMember({
                        ...updateMember,
                        first_name: e.target.value,
                      })
                    }
                    required
                  />
                  <input
                    type="text"
                    name="Lastname"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="Last Name"
                    defaultValue={updateMember.last_name}
                    required
                    onChange={(e) =>
                      setUpdateMember({
                        ...updateMember,
                        last_name: e.target.value,
                      })
                    }
                  />
                  {/* <input
                    type="text"
                    name="Username"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="User Name"
      
                    required
                  /> */}
                  <input
                    type="email"
                    name="email"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    placeholder="Email"
                    defaultValue={updateMember.email}
                    required
                    onChange={(e) =>
                      setUpdateMember({
                        ...updateMember,
                        email: e.target.value,
                      })
                    }
                  />
                  <input
                    type="text"
                    name="phonenumber"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 h-[68px] font-semibold"
                    placeholder="Phone Number"
                    defaultValue={updateMember.phone}
                    required
                    onChange={(e) =>
                      setUpdateMember({
                        ...updateMember,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="grid grid-cols-2 gap-6 mt-6">
                  <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    className="outline-none rounded-[4px] border-[1px] border-[#F0F0F0] px-5 py-4 font-semibold"
                    defaultValue={updateMember.title}
                    required
                    onChange={(e) =>
                      setUpdateMember({
                        ...updateMember,
                        title: e.target.value,
                      })
                    }
                  />

                  <div
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
                      className="hidden"
                      ref={fileRef}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.target.files) {
                          setImage(e.target.files[0]);
                        }
                      }}
                    />
                    <p>{image?.name}</p>
                  </div>
                </div>

                <div className="my-8 flex gap-6">
                  <div className="flex flex-wrap gap-1">
                    <input
                      type="checkbox"
                      name=""
                      id=""
                      className="accent-[#116B89] cursor-pointer"
                      defaultChecked={
                        permissions.includes("Dashboard") ||
                        permissions.includes("dashboard")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Dashboard"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Dashboard"
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Career") ||
                        permissions.includes("career")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Career"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Career"
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Startup") ||
                        permissions.includes("startup")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Startup"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Startup"
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Quotes") ||
                        permissions.includes("quotes")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Quotes"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != ("Quotes" || "quotes")
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Marketing") ||
                        permissions.includes("marketing")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Marketing"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Marketing"
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Member") ||
                        permissions.includes("member")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Member"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Member"
                          );
                          console.log({ filteredPermissions });
                          setPermissions(filteredPermissions);
                        }
                      }}
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
                      defaultChecked={
                        permissions.includes("Account") ||
                        permissions.includes("account")
                      }
                      onChange={(e) => {
                        if (e.target.checked === true) {
                          setPermissions([...permissions, "Account"]);
                        } else {
                          const filteredPermissions = permissions.filter(
                            (p) => p != "Account"
                          );
                          setPermissions(filteredPermissions);
                        }
                      }}
                    />
                    <label
                      htmlFor=""
                      className="ml-[6px] text-[14px] text-[#6B7280]"
                    >
                      Account
                    </label>
                  </div>
                </div>

                <button
                  className="bg-[#116B89]  ml-auto mt-10 text-center rounded-full text-white py-3  px-7 block"
                  disabled={isLoading}
                >
                  <div className="inline-flex justify-center text-center items-center">
                    {isLoading ? (
                      <span>
                        <svg
                          className="animate-spin   h-6 w-6 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                      </span>
                    ) : (
                      "Save Update"
                    )}
                  </div>
                </button>
                <p className="text-center mt-2">{message}</p>
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

          {member ? (
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
                            src={member.image}
                            alt="user image"
                            className="w-[90px] h-[90px] mb-8 mx-auto object-cover object-center rounded-full"
                          />
                          <button
                            className="absolute right-0 top-[30px] text-white bg-[#116B89] flex items-center px-4 py-1 rounded-[4px]"
                            onClick={() => setEditA(true)}
                          >
                            <img src={edit} className="w-[13px] h-[13px]" />
                            <span className="ml-2"> Edit</span>
                          </button>
                        </div>

                        <div className="mb-4 text-center">
                          <span className="font-semibold">
                            {member.first_name}
                          </span>
                          <span className="font-semibold ml-2">
                            {member.last_name}
                          </span>
                        </div>

                        <div className="flex justify-center">
                          <button className="text-[#116B89] font-semibold mx-auto bg-[#F9FAFB]  rounded-[4px] px-[11px] py-[5px] ">
                            {member.title}
                          </button>
                        </div>
                      </div>
                      <div className="mt-[70px]">
                        <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                          <p className="text-[#9CA3AF]">Email</p>
                          <p className="font-semibold">{member.email}</p>
                        </div>
                        <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                          <p className="text-[#9CA3AF]">Phone Number</p>
                          <p className="font-semibold">{member.phone}</p>
                        </div>
                        <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                          <p className="text-[#9CA3AF]">Joined Since</p>
                          <p className="font-semibold">
                            {" "}
                            {format(
                              parseISO(member.adminInfo.date_created),
                              "d/MM/yyyy"
                            )}
                          </p>
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
                                checked={member.permissions.includes(
                                  "dashboard" ||
                                    member.permissions.includes("Dashboard")
                                )}
                                readOnly
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
                                checked={member.permissions.includes(
                                  "career" ||
                                    member.permissions.includes("Career")
                                )}
                                readOnly
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
                                checked={
                                  member.permissions.includes("startup") ||
                                  member.permissions.includes("Startup")
                                }
                                readOnly
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
                                checked={
                                  member.permissions.includes("Quotes") ||
                                  member.permissions.includes("quotes")
                                }
                                className="accent-[#228B22] cursor-pointer"
                                readOnly
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
                            <p className="font-semibold"></p>
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
          ) : null}
        </div>
      </main>
    </section>
  );
}

export default SingleMember;

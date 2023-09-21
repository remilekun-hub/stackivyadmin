import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import userImg from "../assets/profileimg.png";
// import { RecentType } from "@/dummy/Recent";
import { ColumnDef } from "@tanstack/react-table";
import RecentTable from "@/components/Tables/RecentTable";
import { AccountType } from "types";
import axios from "axios";
import toast from "react-hot-toast";
import { userSlice } from "@/Hooks/user";
import { base_url, recentLogs } from "../../types";
import { parseISO, format } from "date-fns";

function Account() {
  const user = userSlice((state) => state.user);
  const [account, setAccount] = useState<AccountType>();

  useEffect(() => {
    const controller = new AbortController();
    const getAccountInfo = async () => {
      try {
        toast.loading("Getting Account Info", { id: "account" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/account`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        if (data.code === 200) {
          toast.success("Request Successful", { id: "account" });
          setAccount(data.data);
        }
        if (data.code !== 200) {
          toast.error("coludn't get account info", { id: "account" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getAccountInfo();
    return () => {
      toast.dismiss("account");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const columns: ColumnDef<recentLogs>[] = [
    {
      accessorKey: "Date",
      header: "Date",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <div className="w-[400px]">
              {" "}
              {format(parseISO(data.date_created), "d/MM/yyyy")}
            </div>
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
            <div className=" text-[#2563EB]">{data.ip_address}</div>
          </>
        );
      },
    },

    { accessorKey: "message", header: "MESSAGE" },
  ];
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Account</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="mx-auto">
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
                      <img
                        src={userImg}
                        alt="user image"
                        className="w-[90px] h-[90px] mb-8 mx-auto"
                      />
                      <p className="mb-4 text-center font-semibold">
                        {account?.account_information.name
                          ? account?.account_information.name
                          : "John Doe"}
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
                          {account?.account_information.email
                            ? account?.account_information.email
                            : "-"}
                        </p>
                      </div>
                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Phone Number</p>
                        <p className="font-semibold">08168463526</p>
                      </div>

                      <div className="flex justify-between items-center mb-10 gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Joined Since</p>
                        <p className="font-semibold">
                          {account?.account_information.adminInfo.date_created
                            ? format(
                                parseISO(
                                  account?.account_information.adminInfo
                                    .date_created
                                ),
                                "d/MM/yyyy"
                              )
                            : "-"}
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="activities">
                  <div className="mx-9 mt-8">
                    {account && (
                      <RecentTable
                        data={account.recent_logs}
                        columns={columns}
                      />
                    )}
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

export default Account;

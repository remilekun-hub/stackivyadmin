import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import userImg from "../assets/profileimg.png";
import { RecentType, recent } from "@/dummy/Recent";
import { ColumnDef } from "@tanstack/react-table";
import RecentTable from "@/components/Tables/RecentTable";

function Account() {
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
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Account</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
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
                      <div className="flex justify-between items-center gap-4 flex-wrap">
                        <p className="text-[#9CA3AF]">Joined Since</p>
                        <p className="font-semibold">10/12/2023</p>
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

export default Account;

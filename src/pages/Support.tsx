import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { pending } from "../dummy/pendingSupport";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, CheckCircle2 } from "lucide-react";
import { PendingType } from "@/dummy/pendingSupport";
import SupportTable from "@/components/Tables/SupportTable";
import { useNavigate } from "react-router-dom";

function Support() {
  const navigate = useNavigate();
  const columns: ColumnDef<PendingType>[] = [
    {
      accessorKey: "user",
      header: "USER",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <div className="flex items-center gap-4">
            <img src={data.user.img} alt="user " className="w-6 h-6" />
            <p>{data.user.name}</p>
          </div>
        );
      },
    },
    { accessorKey: "email", header: "EMAIL" },
    { accessorKey: "subject", header: "SUBJECT COMPLAIN" },
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
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => navigate(`/support/complaints/${data.id}`)}
              >
                <Eye className="text-[#9CA3AF] w-4 h-4" />
                <span className="text-black">View</span>
              </DropdownMenuItem>

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4">
                <CheckCircle2 className="w-3 h-3 text-[#228B22]" />
                <span className="text-black">Resolve</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Support</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] h-screen pb-10">
          <div className="mx-auto">
            <Tabs defaultValue="pending" className="w-full mx-auto">
              <div className="">
                <TabsList className="flex pb-0 gap-9 w-[300px] justify-center mx-auto h-[100px]">
                  <TabsTrigger value="pending" className="pb-5 px-0">
                    Pending
                  </TabsTrigger>
                  <TabsTrigger value="resolved" className="pb-5 px-0">
                    Resolved
                  </TabsTrigger>
                </TabsList>
                <hr className="mt-[-24px] mx-9" />
              </div>
              <div className="w-full mt-10">
                <TabsContent value="pending">
                  <div className="mx-9 mt-8 ">
                    <SupportTable columns={columns} data={pending} />
                  </div>
                </TabsContent>

                <TabsContent value="resolved">
                  <div className="mx-9 mt-8 ">
                    <SupportTable columns={columns} data={pending} />
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

export default Support;

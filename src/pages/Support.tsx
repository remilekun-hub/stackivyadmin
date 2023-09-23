import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { MoreHorizontal, Eye, CheckCircle2 } from "lucide-react";
import SupportTable from "@/components/Tables/SupportTable";
import { useNavigate } from "react-router-dom";
import { SupportType, base_url } from "../../types";
import { userSlice } from "@/Hooks/user";
import toast from "react-hot-toast";
import axios from "axios";

function Support() {
  const user = userSlice((state) => state.user);
  const navigate = useNavigate();
  const [support, setSupport] = useState<SupportType[]>([]);
  const columns: ColumnDef<SupportType>[] = [
    {
      accessorKey: "name",
      header: "USER",
    },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "subject",
      header: "SUBJECT COMPLAIN",
      cell: ({ row }) => {
        const data = row.original;

        return <div className="w-[250px] truncate">{data.subject}</div>;
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
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => navigate(`/support/complaints/${data.id}`)}
              >
                <Eye className="text-[#9CA3AF] w-4 h-4" />
                <span className="text-black">View</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-4"
                onClick={() => resolveSupport(data.id)}
              >
                <CheckCircle2 className="w-3 h-3 text-[#228B22]" />
                <span className="text-black">Resolve</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const resolvedCol: ColumnDef<SupportType>[] = [
    {
      accessorKey: "name",
      header: "USER",
    },
    { accessorKey: "email", header: "EMAIL" },
    {
      accessorKey: "subject",
      header: "SUBJECT COMPLAIN",
      cell: ({ row }) => {
        const data = row.original;

        return <div className="w-[250px] truncate">{data.subject}</div>;
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
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => navigate(`/support/complaints/${data.id}`)}
              >
                <Eye className="text-[#9CA3AF] w-4 h-4" />
                <span className="text-black">View</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  useEffect(() => {
    const controller = new AbortController();
    const getSupport = async () => {
      try {
        toast.loading("Getting support data", { id: "support" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/support`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        if (data.code === 200) {
          toast.success("Request Successful", { id: "support" });
          setSupport(data.data);
        }
        if (data.code !== 200) {
          toast.error("coludn't fetch support data", { id: "support" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getSupport();
    return () => {
      toast.dismiss("support");
      toast.dismiss("resolve");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const pending = support?.filter((s) => s.status === "pending");
  const resolved = support?.filter((s) => s.status === "resolved");

  const resolveSupport = async (supportId: string | number) => {
    try {
      toast.loading("resolving support..", { id: "resolve" });
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/support/${supportId}`,
        { status: "resolved" },
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );
      if (data.code === 200) {
        toast.success("support resolved", { id: "resolve" });
        setTimeout(() => {
          navigate(0);
        }, 2000);
      }
      if (data.code !== 200) {
        toast.error("coludn't resolve support", { id: "resolve" });
      }
    } catch (error) {
      console.log(error);
    }
  };

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
                    <SupportTable columns={resolvedCol} data={resolved} />
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

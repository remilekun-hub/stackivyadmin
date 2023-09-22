import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import chev from "../assets/chev.png";
// import chev2 from "../assets/chev2.png";
import { ColumnDef } from "@tanstack/react-table";
import { GuideType, base_url } from "../../types";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import { parseISO, format } from "date-fns";
import BlogTable from "@/components/BlogTable";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { userSlice } from "@/Hooks/user";

function Guides() {
  const user = userSlice((state) => state.user);
  const navigate = useNavigate();
  const [guide, setGuide] = useState<GuideType[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const getBlogs = async () => {
      try {
        toast.loading("getting guides ..", { id: "guide" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/guide`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        if (!data) {
          toast.error("something went wrong", { id: "guide" });
        }
        if (data.code === 200) {
          toast.success("Request Successful", { id: "guide" });

          setGuide(data.guides);
        }
        if (data.code !== 200) {
          toast.error("coludn't get guides", { id: "guide" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
    return () => {
      toast.dismiss("guide");
      toast.dismiss("deleteguide");
      controller.abort();
    };
  }, []); //eslint-disable-line
  const columns: ColumnDef<GuideType>[] = [
    { accessorKey: "title", header: "TITLE" },
    {
      accessorKey: "author",
      header: "AUTHOR",
    },
    {
      accessorKey: "category",
      header: "CATEGORY",
      cell: ({ row }) => {
        const guide = row.original;
        return (
          <div className="flex items-center gap-2">
            <span>{guide.categories.join(", ")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "tags",
      header: "TAGS",
      cell: ({ row }) => {
        const guide = row.original;
        return (
          <div className="flex items-center gap-2">
            <span>{guide.tags.join(", ")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "DATE",
      cell: ({ row }) => {
        const guide = row.original;
        return (
          <div className="flex flex-col gap-[px]">
            <span>{format(parseISO(guide.date_created), "d/MM/yyyy")}</span>
            <span className="text-[#9CA3AF] font-medium">
              {format(parseISO(guide.date_created), "hh:mm a")}
            </span>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const guide = row.original;

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
                className="cursor-pointer flex items-center gap-2"
                onClick={() => navigate(`/guide/edit?id=${guide.guide_id}`)}
              >
                <span>Edit</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-2"
                onClick={() => deleteGuide(guide.guide_id)}
              >
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const deleteGuide = async (id: string) => {
    try {
      toast.loading("Deleting guide ..", { id: "deleteguide" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/marketing/guide/${id}`,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (!data) {
        toast.error("something went wrong", { id: "deleteguide" });
      }
      if (data.code === 200) {
        toast.success("guide deleted successfully", { id: "deleteguide" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
      if (data.code !== 200) {
        toast.error("coludn't delete guide", { id: "deleteguide" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        toast.dismiss("deleteguide");
      }, 4000);
    }
  };

  return (
    <section className="">
      <Navbar>
        <div className="flex items-center gap-[6px]">
          <h1 className="font-bold text-[24px]">Content -</h1>
          <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
            Guides
          </span>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="rounded-[16px] bg-white h-full mx-auto max-w-[1500px]">
          <div className="pt-10 pb-6 px-4 lg:px-7 flex justify-between">
            <div className=" gap-3 hidden sm:flex">
              {/* <div className="flex gap-3 items-center">
                <h1>All (0)</h1>
                <span>
                  <img src={chev} className="w-2 h-2" />
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <h1 className="text-[#D1D5DB]">Published (0)</h1>
                <span>
                  <img src={chev2} className="w-2 h-2" />
                </span>
              </div>

              <div className="flex gap-3 items-center">
                <h1 className="text-[#D1D5DB]">Drafts (0)</h1>
                <span>
                  <img src={chev2} className="w-2 h-2 grayscale-0" />
                </span>
              </div> */}
            </div>
            <div className="mr-2">
              <Link
                to={"/guides/create"}
                className="bg-[#116B89] text-white py-4 px-6 rounded-full font-normal"
              >
                Create New Guide +
              </Link>
            </div>
          </div>
          {/* main contents here */}
          <div className="mt-4 pb-6 px-4 lg:px-7 mr-2">
            <BlogTable columns={columns} data={guide} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Guides;

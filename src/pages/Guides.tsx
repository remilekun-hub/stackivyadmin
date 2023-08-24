import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import chev from "../assets/chev.png";
import chev2 from "../assets/chev2.png";
import { ColumnDef } from "@tanstack/react-table";
import { BlogType } from "@/dummy/blog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { blog } from "../dummy/blog";
import BlogTable from "@/components/BlogTable";

function Guides() {
  const columns: ColumnDef<BlogType>[] = [
    { accessorKey: "title", header: "TITLE" },
    {
      accessorKey: "author",
      header: "AUTHOR",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <div className="flex items-center gap-2">
            <img src={blog.authorimg} alt={blog.author} className="w-6 h-6" />
            <span>{blog.author}</span>
          </div>
        );
      },
    },
    { accessorKey: "category", header: "CATEGORY" },
    { accessorKey: "tags", header: "TAGS" },
    {
      accessorKey: "date",
      header: "DATE",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <div className="flex flex-col gap-[px]">
            <span>{blog.date}</span>
            <span className="text-[#9CA3AF] font-medium">{blog.time}</span>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const blog = row.original;

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
                // onClick={() => navigate(`/startup/${blog.id}`)}
              >
                <span>Delete Post</span>
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
              <div className="flex gap-3 items-center">
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
              </div>
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
            <BlogTable columns={columns} data={blog} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Guides;

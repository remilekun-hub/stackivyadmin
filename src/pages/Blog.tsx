import glassIcon2 from "../assets/search-two.png";
import chev from "../assets/chev.png";
import chev2 from "../assets/chev2.png";
import calendar from "../assets/calendar-2.png";
import arrowDown2 from "../assets/arrow-down2.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ColumnDef } from "@tanstack/react-table";
import { BlogType } from "@/dummy/blog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";

import { blog } from "../dummy/blog";
import BlogTable from "@/components/BlogTable";

function Blog() {
  console.log(location);

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
                className="cursor-pointer flex items-center  gap-2"
                // onClick={() => navigate(`/startup/${applicant.id}`)}
              >
                <span>Icon here</span> <span>View Details</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer flex items-center gap-2">
                <span>icon here</span> <span>Delete Applicant</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  return (
    <section className="">
      <div className="flex-1  mx-auto">
        <Navbar>
          <div className="flex items-center gap-[6px]">
            <h1 className="font-bold text-[24px]">Content -</h1>
            <span className="text-[#116B89] mt-[6px] text-[14px leading-[16.8px] font-medium">
              Blogs
            </span>
          </div>
        </Navbar>

        <main className=" p-4 lg:px-6 lg:py-7 bg-[#F3F4F6]">
          <div className="rounded-[16px] bg-white min-h-screen mx-auto max-w-[1500px]">
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
                  to={"/blog/create"}
                  className="bg-[#116B89] text-white py-4 px-6 rounded-full font-normal"
                >
                  Create New Blog +
                </Link>
              </div>
            </div>

            <div className="flex px-4 lg:px-7 items-center">
              <div className="flex items-center w-full justify-between">
                <div className="flex  items-center">
                  <div className="max-w-sm  space-y-6">1</div>
                  <div className="flex gap-2 items-center  px-4 py-2">
                    <img src={calendar} className="w-6 h-6 font-bold" />
                    <div>2</div>
                    <img src={arrowDown2} className="w-4 h-4 " />
                  </div>
                </div>

                <div className="hidden mr-2 lg:flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4  mt-5 rounded-[4px] overflow-hidden">
                  <img src={glassIcon2} className="w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search for something here"
                    className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 pb-6 px-4 lg:px-7 mr-2">
              <BlogTable columns={columns} data={blog} />
            </div>
          </div>
        </main>
      </div>
    </section>
  );
}

export default Blog;

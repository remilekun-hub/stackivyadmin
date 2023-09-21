import { useEffect, useState } from "react";
// import chev from "../assets/chev.png";
// import chev2 from "../assets/chev2.png";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ColumnDef } from "@tanstack/react-table";
import { BlogType } from "../../types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import toast from "react-hot-toast";
import BlogTable from "@/components/BlogTable";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import { base_url } from "../../types";
import { parseISO, format } from "date-fns";
import { useNavigate } from "react-router-dom";

function Blog() {
  const user = userSlice((state) => state.user);
  const navigate = useNavigate();
  const [blog, setBlog] = useState<BlogType[]>([]);
  useEffect(() => {
    const controller = new AbortController();
    const getBlogs = async () => {
      try {
        toast.loading("getting blog posts ..", { id: "blog" });
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/marketing/blog`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );
        if (!data) {
          toast.error("something went wrong", { id: "blog" });
        }
        if (data.code === 200) {
          toast.success("Request Successful", { id: "blog" });

          setBlog(data.blogs);
        }
        if (data.code !== 200) {
          toast.error("coludn't get blog posts", { id: "blog" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBlogs();
    return () => {
      toast.dismiss("blog");
      toast.dismiss("deleteblog");
      controller.abort();
    };
  }, []); //eslint-disable-line

  const columns: ColumnDef<BlogType>[] = [
    { accessorKey: "title", header: "TITLE" },
    {
      accessorKey: "author",
      header: "AUTHOR",
    },
    {
      accessorKey: "category",
      header: "CATEGORY",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <div className="flex items-center gap-2">
            <span>{blog.categories.join(", ")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "tags",
      header: "TAGS",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <div className="flex items-center gap-2">
            <span>{blog.tags.join(", ")}</span>
          </div>
        );
      },
    },
    {
      accessorKey: "date",
      header: "DATE",
      cell: ({ row }) => {
        const blog = row.original;
        return (
          <div className="flex flex-col gap-[px]">
            <span>{format(parseISO(blog.date_created), "d/MM/yyyy")}</span>
            <span className="text-[#9CA3AF] font-medium">
              {format(parseISO(blog.date_created), "hh:mm a")}
            </span>
          </div>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const blog = row.original;

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
                onClick={() => navigate(`/blog/edit?id=${blog.blog_id}`)}
              >
                <span>Edit Post</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-2"
                onClick={() => deleteBlogPost(blog.blog_id)}
              >
                <span>Delete Post</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const deleteBlogPost = async (id: string) => {
    try {
      toast.loading("Deleting post ..", { id: "deleteblog" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/marketing/blog/${id}`,
        {
          headers: { Authorization: `Bearer ${user?.token}` },
        }
      );

      if (!data) {
        toast.error("something went wrong", { id: "deleteblog" });
      }
      if (data.code === 200) {
        toast.success("blog post deleted successfully", { id: "deleteblog" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      }
      if (data.code !== 200) {
        toast.error("coludn't delete blog post", { id: "deleteblog" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        toast.dismiss("deleteblog");
      }, 4000);
    }
  };
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

        <main className=" p-4 lg:px-6 lg:py-7 bg-[#F3F4F6] min-h-screen">
          <div className="rounded-[16px] bg-white min-h-screen mx-auto max-w-[1500px]">
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
                  to={"/blog/create"}
                  className="bg-[#116B89] text-white py-4 px-6 rounded-full font-normal"
                >
                  Create New Blog +
                </Link>
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

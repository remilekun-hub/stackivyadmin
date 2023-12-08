import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import eye from "../assets/edit22.png";
import trash from "../assets/trash.png";
import { userSlice } from "@/Hooks/user";
import { StarUpType, base_url } from "../../types";
import StartUpTable from "@/components/StartUpTable";
import { useFetcher } from "@/util/usefetch";
import Spinner from "@/components/Spinner";
import CustomError from "@/components/CustomError";
import axios from "axios";

function Startup() {
  const user = userSlice((state) => state.user);
  const deleteStartUp = async (id: string | number) => {
    return;
    try {
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/startup/entry/${id}`,
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigate = useNavigate();
  const columns: ColumnDef<StarUpType>[] = [
    { accessorKey: "startup_name", header: "STARTUP NAME" },
    { accessorKey: "startup_industry", header: "STARTUP INDUSTRY" },
    { accessorKey: "startup_country", header: "STARTUP COUNTRY" },
    { accessorKey: "person_name", header: "PERSON NAME" },
    { accessorKey: "contact_email", header: "CONTACT EMAIL" },
    { accessorKey: "phone", header: "PHONE NUMBER" },

    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const startup = row.original;

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
                className="cursor-pointer flex items-center  gap-4"
                onClick={() => navigate(`/startup/${startup.id}`)}
              >
                <span>
                  <img src={eye} className="w-4 h-4" />
                </span>{" "}
                <span className="text-black">View Details</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center justify-center gap-4"
                onClick={() => deleteStartUp(startup.id)}
              >
                <span className="mb-[5px]">
                  <img src={trash} className="w-4 h-4" />
                </span>{" "}
                <span className="text-black">Delete</span>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];

  const { data, error, isLoading } = useFetcher(
    `${base_url}/api/v1/stackivy/admin/startup`,
    user?.token
  );
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Starup</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        {isLoading && <Spinner />}
        {error && <CustomError />}
        {data && (
          <div className="max-w-[1500px] mx-auto min-h-screen  bg-white rounded-[16px] p-7">
            <div>
              <StartUpTable columns={columns} data={data.data} />
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

export default Startup;

import StartUpTable from "@/components/StartUpTable";
import Navbar from "../components/Navbar";
import { StarupType, startup } from "@/dummy/startup";
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

function Startup() {
  const navigate = useNavigate();
  const columns: ColumnDef<StarupType>[] = [
    { accessorKey: "name", header: "STARTUP NAME" },
    { accessorKey: "industry", header: "STARTUP INDUSTRY" },
    { accessorKey: "country", header: "STARTUP COUNTRY" },
    { accessorKey: "person", header: "PERSON NAME" },
    { accessorKey: "email", header: "CONTACT EMAIL" },
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

              <DropdownMenuItem className="cursor-pointer flex items-center gap-4">
                <span className="mb-[5px]">
                  <img src={trash} className="w-4 h-4" />
                </span>{" "}
                <span className="text-black">Delete</span>
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
          <h1 className="font-bold text-[24px]">Starup</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] p-7">
          {/* <div className="flex justify-between py-5 mb-3">header here</div> */}
          <div>
            <StartUpTable columns={columns} data={startup} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Startup;

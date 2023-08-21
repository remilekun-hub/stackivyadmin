import CustomDataTable from "../components/CustomDataTable";
import Navbar from "../components/Navbar";
import { applicants } from "@/dummy/applicants";
import { Applicant } from "@/dummy/applicants";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function Applications() {
  const navigate = useNavigate();

  const columns: ColumnDef<Applicant>[] = [
    { accessorKey: "firstName", header: "FIRST NAME" },
    { accessorKey: "lastName", header: "LAST NAME" },
    { accessorKey: "email", header: "EMAIL" },
    { accessorKey: "phonenumber", header: "PHONE NUMBER" },
    { accessorKey: "date", header: "DATE" },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const applicant = row.original;

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
                onClick={() => navigate(`/career/applicant/${applicant.id}`)}
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
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto  bg-white rounded-[16px] p-7">
          <div className="flex justify-between py-5 mb-3">header here</div>
          <div>
            <CustomDataTable columns={columns} data={applicants} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Applications;

import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
  ColumnFiltersState,
} from "@tanstack/react-table";
import glassIcon2 from "../assets/search-two.png";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "./ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

function StartUpTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      columnFilters,
    },
  });

  return (
    <div>
      <div className="flex items-center w-full justify-between mb-5">
        {/* <h1 className="ml-1 text-[15px] font-semibold">All Startups</h1> */}

        <div className="hidden mr-2 lg:flex items-center gap-3 border-[1px] border-[#F3F4F6] pl-4  mt-5 rounded-[4px] overflow-hidden">
          <img src={glassIcon2} className="w-5 h-5" />
          <input
            type="text"
            placeholder="Search for something here"
            className="p-3 outline-0 border-0 text-black  placeholder:text-[#9CA3AF]  w-[250px]"
            value={
              (table.getColumn("startup_name")?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn("startup_name")
                ?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      <div className=" rounded-t-[12px] overflow-hidden">
        <Table>
          <TableHeader className="bg-[#F4F4F4] h-[80px]">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="h-[60px] text-black font-bold cursor-pointer"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>

        <div className="flex mt-5 items-center justify-center space-x-4 py-4">
          <Button
            size="sm"
            className="bg-[#116B89] hover:bg-[#116B89]"
            onClick={() => table.previousPage()}
            // disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeftIcon className="w-4 h-4" />
            Previous
          </Button>
          <Button
            className="bg-[#116B89] hover:bg-[#116B89]"
            size="sm"
            onClick={() => table.nextPage()}
            // disabled={!table.getCanNextPage()}
          >
            Next
            <ChevronRightIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default StartUpTable;

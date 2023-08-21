import React from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[]
// }

function ApplicationTable() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  type Applicant = {
    // id: string;
    firstName: string;
    lastName: string;
    email: string;
    phonenumber: string;
    date: string;
  };

  const applicants: Applicant[] = [
    {
      // id: "1",
      firstName: "Akande",
      lastName: "Olabode",
      email: "AkandeOlabodeDaniel656@gmail.com",
      phonenumber: "08024567802",
      date: "10/4/2023",
    },
  ];

  const columns: ColumnDef<Applicant>[] = [
    { accessorKey: "FirstName", header: "FIRST NAME" },
    { accessorKey: "LastName", header: "LAST NAME" },
    { accessorKey: "Email", header: "EMAIL" },
    { accessorKey: "PhoneNumber", header: "PHONE NUMBER" },
    { accessorKey: "Date", header: "Date" },
  ];

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
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
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default ApplicationTable;

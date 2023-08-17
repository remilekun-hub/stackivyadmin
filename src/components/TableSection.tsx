// import {useState} from "react"
import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
} from "@tremor/react";
import { blog } from "../dummy/blog";

function TableSection() {
  // const [showOptions, setShowOptions] = useState(false)
  return (
    <section>
      <Table className=" rounded-t-[10px]">
        <TableHead className=" ">
          <TableRow className=" h-[65px] bg-[#F4F4F4]">
            <TableHeaderCell className="text-[#999999]">TITLE</TableHeaderCell>
            <TableHeaderCell className="text-[#999999]">AUTHOR</TableHeaderCell>
            <TableHeaderCell className="text-[#999999]">
              CATEGORY
            </TableHeaderCell>
            <TableHeaderCell className="text-[#999999]">TAGS</TableHeaderCell>
            <TableHeaderCell className="text-[#999999]">DATE</TableHeaderCell>
            <TableHeaderCell className="text-[#999999]">ACTION</TableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {blog.map((item) => (
            <TableRow key={item.id} className="cursor-pointer">
              <TableCell className="py-8 text-black font-medium leading-[15px]  ">
                <p className=" text-black inline-block max-w-[200px] truncate">
                  {item.title}
                </p>
              </TableCell>
              <TableCell className="flex items-center gap-3">
                <div>
                  <img src={item.authorimg} className="w-8 h-8" />
                </div>
                <Text className="text-black font-medium leading-[15px]">
                  {item.author}
                </Text>
              </TableCell>
              <TableCell>
                <Text className="text-black font-medium leading-[15px]">
                  {item.category}
                </Text>
              </TableCell>
              <TableCell className="text-black font-medium leading-[15px]">
                {item.tags}
              </TableCell>
              <TableCell className="text-black font-medium leading-[15px]">
                <div className="flex flex-col">
                  <Text className="text-black">{item.date}</Text>
                  <Text className="text-[#9CA3AF]">{item.time}</Text>
                </div>
              </TableCell>
              <TableCell className="text-black font-medium leading-[15px] relative">
                <input
                  id={item.id}
                  className="ml-3 w-[20px] outline-none border-none cursor-pointer hidden"
                />
                <p>...</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </section>
  );
}

export default TableSection;

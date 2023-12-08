import Navbar from "../components/Navbar";
import { ColumnDef } from "@tanstack/react-table";
import { enquiryType, enquiryData } from "../../types";
import CustomDataTable from "@/components/CustomDataTable";
import { XCircle } from "lucide-react";
import Modal from "@/components/Modal";
import { useState } from "react";

function Enquiry() {
  const columns: ColumnDef<enquiryType>[] = [
    { accessorKey: "first_name", header: "FIRST NAME" },
    { accessorKey: "last_name", header: "LAST NAME" },
    { accessorKey: "phone", header: "MOBILE NUMBER" },
    { accessorKey: "email", header: "EMAIL" },
    { accessorKey: "destination", header: "DESTINATION" },
    { accessorKey: "category", header: "CATEGORY" },
    { accessorKey: "company", header: "COMPANY NAME" },
    {
      accessorKey: "website",
      header: "COMPANY WEBSITE",
      cell: ({ row }) => {
        const data = row.original;

        return <span className="text-[#2563EB]">{data.website}</span>;
      },
    },
    { accessorKey: "overview", header: "COMPANY OVERVIEW" },

    {
      id: "actions",
      header: "ACTION",
      cell: () => {
        // const startup = row.original;

        return (
          <span
            className="text-[#116B89] underline"
            onClick={() => setModal(true)}
          >
            Message
          </span>
        );
      },
    },
  ];
  const [modal, setModal] = useState(false);

  const MessageModal = () => (
    <Modal>
      <div className="bg-white rounded-[16px] h-[300px] p-7 w-[808px]">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-black font-semibold">Investment and Planning</h1>
          <div></div>
          <XCircle
            className="w-4 h-4 text-gray-400 cursor-pointer"
            onClick={() => setModal(false)}
          />
        </div>
        <div>
          {/* <p className="text-[#818181]">{singlePendingData?.message}</p> */}
          <p className="text-[#818181]">
            Lorem ipsum dolor sit amet consectetur. Ipsum lorem ullamcorper
            vitae amet non. Amet elementum tellus eleifend varius quam id
            egestas urna. Volutpat ut non viverra et cras vitae morbi nibh.
            Sagittis praesent ut integer diam suspendisse bibendum iaculis
            justo. Tempor nisl id habitasse facilisis. Lobortis in pellentesque
            viverra aliquet. Nunc pellentesque cras ut ut placerat nec
            suspendisse. Duis mattis diam eu risus. A augue placerat elementum
            eget purus id viverra in. Enim pellentesque nunc et nunc habitant
            consectetur vitae in. Duis hendrerit placerat non molestie ultrices.
            Eget sem sapien vestibulum imperdiet tempus facilisis amet sit urna.
            Tincidunt nulla nam lectus in amet purus in.
          </p>
        </div>
      </div>
    </Modal>
  );

  return (
    <section className="">
      {modal && <MessageModal />}
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Enquiry</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        {/* {isLoading && <Spinner />}
      {error && <CustomError />} */}

        <div className="max-w-[1500px] mx-auto min-h-screen  bg-white rounded-[16px] p-7">
          <div>
            <CustomDataTable columns={columns} data={enquiryData} />
          </div>
        </div>
      </main>
    </section>
  );
}

export default Enquiry;

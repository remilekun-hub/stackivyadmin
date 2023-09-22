import { parseISO, format } from "date-fns";
import { recent } from "../../types";
import { Link } from "react-router-dom";

type DataType = {
  data: recent[] | undefined;
};

function RecentWebinarsList({ data }: DataType) {
  return (
    <div className="bg-white rounded-[16px] border-[1px] border-[#E5E7EB] py-9">
      <div className="flex justify-between px-9 pb-4 border-b-[1px] border-[#F9FAFB]">
        <h1 className="text-[#6B7280] font-bold">Recent Webinars</h1>
        <Link to={"/webinars"} className="text-[#116B89] text-[13px] underline">
          View Webinars
        </Link>
      </div>
      <div className="px-9 mt-4 flex flex-col gap-6">
        {data &&
          data
            .reverse()
            .slice(0, 4)
            .map((webinar: recent, i) => (
              <div className="flex justify-between gap-3 items-center" key={i}>
                <p className="max-w-[80%] truncate">
                  {webinar.title}
                  {/* <span className="bg-[#F3F4F6] py-[6px] px-2 text-[12px] rounded-[2px] ml-[3px]">
          Savings
        </span> */}
                </p>

                <div className="">
                  <p className="font-bold text-[14px]">
                    {" "}
                    {format(parseISO(webinar.date_created), "d/MM/yyyy")}
                  </p>
                  <p className="text-[#9CA3AF] text-[12px] text-right">
                    {format(parseISO(webinar.date_created), "hh:mm a")}
                  </p>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default RecentWebinarsList;

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import pen from "../assets/edit-2.png";
import { XCircleIcon } from "lucide-react";
import { SingleWebinarType } from "../../types";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import { base_url } from "../../types";

function SingleWebinar({
  id,
  title,
  summary,
  webinar_info,
  image,
  deleted,
}: SingleWebinarType) {
  const user = userSlice((state) => state.user);
  const navigate = useNavigate();

  const handleCloseWebinar = async () => {
    toast.loading("processing...", { id: "deleteWebinar" });
    await axios
      .delete(`${base_url}/api/v1/stackivy/admin/marketing/webinar/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then(() => {
        toast.success("webinar closed successfully", { id: "deleteWebinar" });
        setTimeout(() => {
          navigate(0);
        }, 3000);
      })
      .catch(() =>
        toast.error("something went wrong", { id: "deleteWebinar" })
      );
  };

  let meridian: "AM" | "PM";
  const getMeridian = () => {
    const hour = Number(webinar_info.time.slice(0, 2));
    if (hour < 12) {
      meridian = "AM";
    } else if (hour === 12) {
      meridian = "PM";
    } else meridian = "PM";

    return meridian;
  };

  return (
    <div className="rounded-[8px]  border-[1px] border-[#F3F4F6] mb-10">
      <Tabs defaultValue="title" className="py-5 overflow-auto ">
        <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
          <TabsList className="flex gap-2 justify-start ">
            <TabsTrigger value="title" className="text-[14px] py-4 leading-5">
              Title
            </TabsTrigger>
            <TabsTrigger value="summary" className="text-[13px] py-4 leading-5">
              Summary
            </TabsTrigger>

            <TabsTrigger value="info" className="text-[13px] py-4 leading-5">
              Webinar Info
            </TabsTrigger>
            <TabsTrigger value="Image" className="text-[13px] py-4 leading-5">
              Image
            </TabsTrigger>
          </TabsList>
          <div className={`${deleted ? "hidden" : "flex"} gap-5 pr-5`}>
            <div
              className="flex gap-2 items-center cursor-pointer"
              onClick={handleCloseWebinar}
            >
              <XCircleIcon className="w-3 h-3 text-[#EF4444]" />
              <span className="font-bold">Close Webinar</span>
            </div>
            <div>
              <Link
                to={`/webinars/edit?id=${id}&title=${title}&summary=${summary}&date=${webinar_info.date}&time=${webinar_info.time}&location=${webinar_info.location}&speakers=${webinar_info.speakers}&image=${image.file_url}`}
                className="flex gap-2 items-center"
              >
                <img src={pen} alt="trash icon" className="w-4 h-4 mb-1" />
                <span className="font-bold">Edit </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="pt-6 px-5">
          <TabsContent value="title" className="pb-2">
            <h1 className="mag"> {title}</h1>
          </TabsContent>
          <TabsContent value="summary" className="pb-2">
            <div className="font-semibold pb-4 text-[14px]">
              <p className="leading-5">{summary}</p>
            </div>
          </TabsContent>
          <TabsContent value="info" className="pb-2">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Date
                </h1>
                <h2 className="font-bold">{webinar_info.date}</h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Time
                </h1>
                <h2 className="font-bold">
                  {webinar_info.time} {getMeridian()}
                </h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Location
                </h1>
                <h2 className="font-bold text-[#2563EB]">
                  {webinar_info.location}
                </h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Speakers
                </h1>
                <h2 className="font-bold">
                  {webinar_info.speakers.join(", ")}
                </h2>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Image">
            <div>
              <img
                src={image.file_url}
                alt="webinar"
                className="w-[350px] h-[350px] object-contain"
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SingleWebinar;

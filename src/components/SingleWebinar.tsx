import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import pen from "../assets/edit-2.png";
import { XCircleIcon } from "lucide-react";
import webinar from "../assets/webinar image.png";

function SingleWebinar() {
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
          <div className="flex gap-5 pr-5">
            <div className="flex gap-2 items-center">
              <XCircleIcon className="w-3 h-3 text-[#EF4444]" />
              <span className="font-bold">Close Event</span>
            </div>
            <div>
              <div className="flex gap-2 items-center">
                <img src={pen} alt="trash icon" className="w-4 h-4 mb-1" />
                <span className="font-bold">Edit </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-5">
          <TabsContent value="title" className="pb-2">
            <h1 className="mag"> Ardilla Product Lunch</h1>
          </TabsContent>
          <TabsContent value="summary" className="pb-2">
            <div className="font-semibold pb-4 text-[14px]">
              <p className="leading-5">
                Stackivy is dedicated to offering financial products that help
                you with everyday solutions, and our latest product is Ardilla —
                Your Access To More. With Ardilla, you can access more tools and
                resources that help you become financially free. With Ardilla,
                you can
              </p>
              <p className="mt-4 leading-5">
                Challenges of sustainable practices in Africa
              </p>
              <p>Is Africa ripe for sustainable products?</p>
              <p className="leading-5">
                How do we tackle the challenges of sustainable financial
                solutions in Africa
              </p>
            </div>
          </TabsContent>
          <TabsContent value="info" className="pb-2">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Date
                </h1>
                <h2 className="font-bold">10th May, 2023</h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Time
                </h1>
                <h2 className="font-bold">2:00 PM</h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Location
                </h1>
                <h2 className="font-bold text-[#2563EB]">Google Meet</h2>
              </div>

              <div className="px-5 py-7 rounded-[8px] border-[1px] border-[#E5E7EB] w-full h-[106px]">
                <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                  Speakers
                </h1>
                <h2 className="font-bold">
                  Oyinye Dallas, Kadiri Moyosore, Ojieh Anita
                </h2>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="Image">
            <div>
              <img
                src={webinar}
                alt="webinar"
                className="w-[300px] h-[300px]"
              />
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SingleWebinar;

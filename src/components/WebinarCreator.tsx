import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";

function WebinarCreator() {
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
        </div>
        <div className="pt-6 px-5">
          <TabsContent value="title" className="pb-2">
            <input
              type="text"
              name="title"
              className="outline-none mag py-2 "
              placeholder="Enter Title"
            />
          </TabsContent>
          <TabsContent value="summary" className="pb-2">
            <textarea
              placeholder="Enter Summary"
              className="w-full outline-none h-[200px]"
            />
          </TabsContent>
          <TabsContent value="info" className="pb-2">
            <div className="grid md:grid-cols-3 gap-10">
              <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                <input
                  type="date"
                  name="date"
                  className="outline-none p-3 cursor-pointer w-full"
                />
              </div>

              <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                <input
                  type="time"
                  name="time"
                  className="outline-none p-3 cursor-pointer w-full"
                  placeholder="Enter Time"
                />
              </div>
              <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                <input
                  type="url"
                  name="website"
                  className="outline-none p-3 cursor-pointer w-full"
                  placeholder="Enter Location Link"
                />
              </div>
            </div>
            <div className="rounded-[4px] w-full border-[1px] border-[#F0F0F0] p-3 mt-6">
              <input
                type="text"
                placeholder="Enter Names of Speakers"
                className="outline-none p-3 cursor-pointer w-full "
              />
            </div>
          </TabsContent>
          <TabsContent value="Image">
            <div className="flex justify-center items-center border-[1px] h-[300px] rounded-[8px] border-dashed border-[#116B89]">
              <button className="text-[#116B89] font-semibold">
                + Upload Document
              </button>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default WebinarCreator;

import JobBox from "@/components/JobBox";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingleJobTab from "@/components/SingleJobTab";
import { Link } from "react-router-dom";

function JobPosts() {
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] mx-auto">
          <div className="grid md:grid-cols-3 gap-5 lg:gap-[30px]">
            <JobBox bg="#FFF4CC" border="#FFCA0D" activeJob={0} />
            <JobBox bg="#D4F7E1" border="#22C55E" activeJob={0} />
            <JobBox bg="#FBD0D0" border="#EF4444" activeJob={0} />
          </div>

          <div className="bg-white rounded-[16px] mt-[30px] pt-3">
            <div className="flex justify-between p-7 border-b-[1px] border-[#F3F4F6]">
              <h1 className="text-[18px] font-bold leading-5">Manage Jobs</h1>
              <div>
                <Link
                  to="/career/job-posts/create"
                  className="rounded-full px-7 py-4 text-white bg-[#116B89]"
                >
                  Add new job Post +{" "}
                </Link>
              </div>
            </div>
            <div className="p-7">
              <Tabs defaultValue="activejobs" className="">
                <TabsList className="flex gap-10 justify-start">
                  <TabsTrigger
                    value="activejobs"
                    className="text-[14px] py-4 leading-6"
                  >
                    Active Jobs{" "}
                    <span className="text-[#9CA3AF] ml-2">(10 applied)</span>
                  </TabsTrigger>
                  <TabsTrigger
                    value="draftedjobs"
                    className="text-[14px]  py-4 leading-6"
                  >
                    Drafted Jobs
                  </TabsTrigger>
                  <TabsTrigger
                    value="closedjobs"
                    className=" text-[14px] py-4 leading-6"
                  >
                    Closed Jobs{" "}
                    <span className="ml-2 text-[#9CA3AF]">
                      (10 Jun - 30 Jun)
                    </span>
                  </TabsTrigger>
                </TabsList>
                <div className="pt-6 mt-5">
                  <TabsContent value="activejobs">
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                  </TabsContent>
                  <TabsContent value="draftedjobs">
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                  </TabsContent>
                  <TabsContent value="closedjobs">
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                    <SingleJobTab />
                  </TabsContent>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default JobPosts;

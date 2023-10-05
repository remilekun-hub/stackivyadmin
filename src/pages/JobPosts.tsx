import JobBox from "@/components/JobBox";
import Navbar from "../components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingleJobTab from "@/components/SingleJobTab";
import { Link } from "react-router-dom";
import jobicon1 from "../assets/jobicon1.png";
import jobicon2 from "../assets/jobicon2.png";
import jobicon3 from "../assets/jobicon3.png";
import { base_url } from "../../types";
import useSWR from "swr";
import { userSlice } from "@/Hooks/user";
import axios from "axios";
import { Loader } from "@mantine/core";

function JobPosts() {
  const user = userSlice((state) => state.user);
  const fetcher = (url: string) =>
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${user?.token}`,
        },
      })
      .then((res) => res.data);

  const { data, error, isLoading } = useSWR(
    `${base_url}/api/v1/stackivy/admin/career/manage_job_posts`,
    fetcher
  );

  console.log({ data, error, isLoading });
  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] min-h-screen p-4 lg:px-6 lg:py-7">
        {error && (
          <p className="flex justify-center">Error while fetching data.</p>
        )}

        {isLoading && (
          <p className="flex justify-center">
            <Loader color="#116B89" />
          </p>
        )}

        {data && (
          <div className="max-w-[1500px] mx-auto">
            <div className="grid md:grid-cols-3 gap-5 lg:gap-[30px]">
              <JobBox
                bg="#FFF4CC"
                border="#FFCA0D"
                activeJob={data.statistics[0].total_active_job_posts}
                icon={jobicon1}
                title="Total Posted job"
              />
              <JobBox
                bg="#D4F7E1"
                border="#22C55E"
                activeJob={data.statistics[1].total_draft_job_posts}
                icon={jobicon2}
                title="Total Drafted job"
              />
              <JobBox
                bg="#FBD0D0"
                border="#EF4444"
                activeJob={data.statistics[2].total_closed_job_posts}
                icon={jobicon3}
                title="Total Closed Jobs"
              />
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
                      className="text-[14px] py-4 leading-6 px-0"
                    >
                      Active Jobs{" "}
                      <span className="text-[#9CA3AF] ml-2">
                        ({data.active_job_posts.length} applied)
                      </span>
                    </TabsTrigger>
                    <TabsTrigger
                      value="draftedjobs"
                      className="text-[14px]  py-4 leading-6 px-0"
                    >
                      Drafted Jobs
                    </TabsTrigger>
                    <TabsTrigger
                      value="closedjobs"
                      className=" text-[14px] py-4 leading-6 px-0"
                    >
                      Closed Jobs{" "}
                      {/* <span className="ml-2 text-[#9CA3AF]">
                        (10 Jun - 30 Jun)
                      </span> */}
                    </TabsTrigger>
                  </TabsList>
                  <div className="pt-6 mt-5">
                    <TabsContent value="activejobs">
                      {data.active_job_posts.map((job) => (
                        <SingleJobTab key={job.job_post_id} {...job} />
                      ))}
                    </TabsContent>
                    <TabsContent value="draftedjobs">
                      {data.draft_job_posts.map((job) => (
                        <SingleJobTab key={job.job_post_id} {...job} />
                      ))}
                    </TabsContent>
                    <TabsContent value="closedjobs">
                      {data.closed_job_posts.map((job) => (
                        <SingleJobTab key={job.job_post_id} {...job} />
                      ))}
                    </TabsContent>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

export default JobPosts;

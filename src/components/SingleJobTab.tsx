import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import trash from "../assets/trash.png";
import pen from "../assets/edit-2.png";
import { SingleJobType, base_url } from "../../types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { userSlice } from "@/Hooks/user";
import toast from "react-hot-toast";

function SingleJobTab({
  job_post_id,
  title,
  description,
  requirements_and_skills,
  responsibilities,
  application_questions,
  job_and_work_place_type,
  uploads,
  isDeleted,
}: SingleJobType) {
  const navigate = useNavigate();
  const user = userSlice((state) => state.user);

  const deleteJobPost = async () => {
    try {
      toast.loading("deleting job", { id: "deleteJob" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/career/job_posts/${job_post_id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        navigate(0);
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.dismiss("deleteJob");
    }
  };
  return (
    <div className="rounded-[8px]  border-[1px] border-[#F3F4F6] mb-10">
      <Tabs defaultValue="jobtitle" className="py-5 overflow-auto ">
        <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
          <TabsList className="flex gap-2 justify-start ">
            <TabsTrigger
              value="jobtitle"
              className="text-[14px] py-4 leading-5"
            >
              Job Title
            </TabsTrigger>
            <TabsTrigger
              value="description"
              className="text-[13px] py-4 leading-5"
            >
              Description
            </TabsTrigger>
            <TabsTrigger
              value="responsibilities"
              className="text-[13px] py-4 leading-5"
            >
              Responsibilities
            </TabsTrigger>
            <TabsTrigger value="req" className="text-[13px] py-4 leading-5">
              Requirements and Skills
            </TabsTrigger>
            <TabsTrigger value="jobtype" className="text-[13px] py-4 leading-5">
              JobType/Work Place Type
            </TabsTrigger>
            <TabsTrigger value="appq" className="text-[13px] py-4 leading-5">
              Application Questions
            </TabsTrigger>
            <TabsTrigger value="upload" className="text-[13px] py-4 leading-5">
              Upload
            </TabsTrigger>
          </TabsList>
          <div className="flex gap-5 pr-5">
            <div
              className={`flex gap-2 items-center cursor-pointer ${
                isDeleted && "hidden"
              } `}
              onClick={deleteJobPost}
            >
              <img src={trash} alt="trash icon" className="w-4 h-4 mb-1" />
              <span className="font-bold">Delete</span>
            </div>
            <div
              onClick={() => {
                navigate(`/career/job-posts/${job_post_id}/edit`);
              }}
            >
              <div className="flex gap-2 items-center cursor-pointer">
                <img src={pen} alt="trash icon" className="w-4 h-4 mb-1" />
                <span className="font-bold">Edit </span>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-6 px-5">
          <TabsContent value="jobtitle" className="pb-2">
            {title}
          </TabsContent>
          <TabsContent value="description" className="pb-2">
            <p className="text-[#6B7280]">{description}</p>
          </TabsContent>
          <TabsContent value="responsibilities" className="pb-2">
            {responsibilities.map((r, i) => (
              <li className="list" key={i}>
                <span>{r}</span>
              </li>
            ))}
          </TabsContent>
          <TabsContent value="req" className="pb-2">
            {requirements_and_skills.map((r, i) => (
              <li className="list" key={i}>
                <span>{r}</span>
              </li>
            ))}
          </TabsContent>

          <TabsContent
            value="jobtype"
            className="flex space-x-6 items-center pb-2"
          >
            <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] w-[323px] h-[106px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                Job Type
              </h1>
              <h2 className="font-bold">{job_and_work_place_type.job_type}</h2>
            </div>

            <div className="h-[106px] w-[1px] bg-[#F6F7F8]" />
            <div className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] w-[323px] h-[106px]">
              <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                Work Place Type
              </h1>
              <h2 className="font-bold">
                {job_and_work_place_type.work_place_type}
              </h2>
            </div>
          </TabsContent>
          <TabsContent value="appq" className="pb-3 h-full">
            <div className="grid md:grid-cols-3 gap-9 ">
              {application_questions.map((q, i) => (
                <div
                  className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]"
                  key={i}
                >
                  <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                    Q{i + 1}
                  </h1>
                  <h2 className="font-bold">
                    {q.question}{" "}
                    {q.compulsory && (
                      <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                    )}
                  </h2>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="upload">
            <div className="grid md:grid-cols-3 gap-9 ">
              {uploads.map((u, i) => (
                <div
                  className="px-5 py-6 rounded-[8px] border-[1px] border-[#E5E7EB] h-[106px]"
                  key={i}
                >
                  <h1 className="text-[#9CA3AF] mb-2 text-[12px] leading-5">
                    Document {i + 1}
                  </h1>
                  <h2 className="font-bold">
                    {u.file}{" "}
                    {u.compulsory && (
                      <span className="text-[#D1D5DB] ml-2">(Compulsory)</span>
                    )}
                  </h2>
                </div>
              ))}
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}

export default SingleJobTab;

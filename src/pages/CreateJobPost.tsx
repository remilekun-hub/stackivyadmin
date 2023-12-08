import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import JobPostModal from "../components/JobPostModal";
import SaveDrafts from "@/components/SaveDrafts";
import {
  JobDataType,
  jobType,
  base_url,
  settingType,
  questionType,
  DocumentType,
} from "../../types";
import { XIcon } from "lucide-react";
import axios from "axios";
import { userSlice } from "../Hooks/user";
import toast from "react-hot-toast";

function CreateJobPost() {
  const user = userSlice((state) => state.user);
  const [jobPostModal, setJobPostModal] = useState(false);
  const [isSaveDrafts, setIsSaveDrafts] = useState(false);
  const [responsibility, setResponsibility] = useState("");
  const [requirement, setRequirement] = useState("");
  const [jobData, setJobData] = useState<JobDataType>({
    title: "",
    description: "",
    responsibilities: [],
    requirements_and_skills: [],
    job_and_work_place_type: {
      job_type: "",
      work_place_type: "",
    },
    application_questions: [],
    uploads: [],
  });
  const [questionData, setQuestionData] = useState<questionType[]>([]);
  const [jobTypeData, setJobTypeData] = useState<jobType[]>([]);
  const [workTypeData, setWorkTypeData] = useState<settingType[]>([]);
  const [docTypeData, setDocTypeData] = useState<DocumentType[]>([]);
  const [message, setMessage] = useState("");

  // useEffect(() => {
  //   const job = sessionStorage.getItem("jobData");
  //   if (job) {
  //     setJobData(JSON.parse(job));
  //   }
  // }, []); //eslint-disable-line

  useEffect(() => {
    const controller = new AbortController();
    const getJobData = async () => {
      try {
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/career/configs/job_type`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            // signal: controller.signal,
          }
        );
        console.log(data);
        if (data.code === 200) {
          setJobTypeData(data.job_type);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getJobData();
    return () => {
      controller.abort();
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    const controller = new AbortController();
    const getWorkType = async () => {
      try {
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/career/configs/job_work_place_type`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          setWorkTypeData(data.work_place_type);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getWorkType();
    return () => {
      controller.abort();
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    const controller = new AbortController();
    const getQuestions = async () => {
      try {
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/career/configs/job_application_question`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          setQuestionData(data.application_questions);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getQuestions();
    return () => {
      controller.abort();
    };
  }, []); //eslint-disable-line

  useEffect(() => {
    const controller = new AbortController();
    const getDocType = async () => {
      try {
        const { data } = await axios.get(
          `${base_url}/api/v1/stackivy/admin/career/configs/job_document_upload`,
          {
            headers: { Authorization: `Bearer ${user?.token}` },
            signal: controller.signal,
          }
        );

        if (data.code === 200) {
          setDocTypeData(data.upload_type);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getDocType();
    return () => {
      controller.abort();
    };
  }, []); //eslint-disable-line

  // useEffect(() => {
  //   sessionStorage.setItem("jobData", JSON.stringify(jobData));
  //   return () => {
  //     sessionStorage.removeItem("jobData");
  //   };
  // }, [jobData]);

  const createJobPost = async () => {
    if (
      !jobData.title ||
      !jobData.description ||
      !jobData.job_and_work_place_type.job_type ||
      !jobData.job_and_work_place_type.work_place_type ||
      jobData.application_questions.length == 0 ||
      jobData.responsibilities.length == 0 ||
      jobData.requirements_and_skills.length == 0 ||
      jobData.uploads.length == 0
    ) {
      toast.error("All fields must be filled");
      return;
    }
    try {
      toast.loading("creating jobpost...", { id: "jobpost" });
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/job_posts`,
        { ...jobData, saved: true },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        setJobData({
          title: "",
          description: "",
          responsibilities: [],
          requirements_and_skills: [],
          job_and_work_place_type: {
            job_type: "",
            work_place_type: "",
          },
          application_questions: [],
          uploads: [],
        });
        setJobPostModal(true);
      }
      console.log(data);
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss("jobpost");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const createDraft = async () => {
    if (
      !jobData.title ||
      !jobData.description ||
      !jobData.job_and_work_place_type.job_type ||
      !jobData.job_and_work_place_type.work_place_type ||
      jobData.application_questions.length == 0 ||
      jobData.responsibilities.length == 0 ||
      jobData.requirements_and_skills.length == 0 ||
      jobData.uploads.length == 0
    ) {
      toast.error("All fields must be filled");
      return;
    }
    try {
      toast.loading("creating jobpost...", { id: "jobpost" });
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/job_posts`,
        { ...jobData, saved: false },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        setJobData({
          title: "",
          description: "",
          responsibilities: [],
          requirements_and_skills: [],
          job_and_work_place_type: {
            job_type: "",
            work_place_type: "",
          },
          application_questions: [],
          uploads: [],
        });
        setJobPostModal(true);
      }
      console.log(data);
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      toast.dismiss("jobpost");

      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  return (
    <section className="">
      {jobPostModal && <JobPostModal setJobPostModal={setJobPostModal} />}

      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          {isSaveDrafts && <SaveDrafts setIsSaveDrafts={setIsSaveDrafts} />}

          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link
              to="/career/manage-job-posts"
              className="flex items-center gap-[2px]"
            >
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Add New Jobs</h1>
            </Link>

            <div className="flex gap-5">
              <button
                className="px-6 py-3 text-white bg-[#116B89] rounded-full outline-none"
                onClick={() => {
                  createJobPost();
                }}
              >
                Post Job
              </button>
              <button
                className="text-[#116B89] font-medium"
                onClick={createDraft}
              >
                Save As Draft
              </button>
            </div>
          </div>
          <div className="px-8 pt-10">
            <div className="rounded-[8px] border-[1px] border-[#E5E7EB]">
              <Tabs defaultValue="jobtitle" className="py-5 overflow-auto ">
                <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
                  <TabsList className="flex justify-start ">
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
                    <TabsTrigger
                      value="req"
                      className="text-[13px] py-4 leading-5"
                    >
                      Requirements and Skills
                    </TabsTrigger>
                    <TabsTrigger
                      value="jobtype"
                      className="text-[13px] py-4 leading-5"
                    >
                      JobType/Work Place Type
                    </TabsTrigger>
                    <TabsTrigger
                      value="appq"
                      className="text-[13px] py-4 leading-5"
                    >
                      Application Questions
                    </TabsTrigger>
                    <TabsTrigger
                      value="upload"
                      className="text-[13px] py-4 leading-5"
                    >
                      Upload
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="pt-6 px-5">
                  <TabsContent value="jobtitle" className="pb-2">
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Job Title"
                      className="w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      value={jobData.title}
                      onChange={(e) =>
                        setJobData({ ...jobData, title: e.target.value })
                      }
                    />
                  </TabsContent>
                  <TabsContent value="description" className="">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Description"
                      defaultValue={jobData.description}
                      onChange={(e) =>
                        setJobData({ ...jobData, description: e.target.value })
                      }
                    ></textarea>
                  </TabsContent>
                  <TabsContent value="responsibilities" className="pb-2">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Responsibilities"
                      value={responsibility}
                      onChange={(e) => setResponsibility(e.target.value)}
                    ></textarea>
                    <button
                      className="block ml-auto px-6 py-3 mt-6 text-white bg-[#116B89] rounded-full outline-none"
                      onClick={() => {
                        if (!responsibility) return;
                        setJobData({
                          ...jobData,
                          responsibilities: [
                            ...jobData.responsibilities,
                            responsibility,
                          ],
                        });
                        setResponsibility("");
                      }}
                    >
                      Add Responsibility
                    </button>
                    <div>
                      {jobData.responsibilities.map((r, i) => (
                        <div
                          className="cursor-pointer mb-2 flex flex-wrap items-center gap-4"
                          key={i}
                        >
                          <p className="bg-[#116B89]/50 p-2">{r}</p>
                          <XIcon
                            className="cursor-pointer"
                            onClick={() => {
                              const filter = jobData.responsibilities.filter(
                                (f) => f != r
                              );
                              setJobData({
                                ...jobData,
                                responsibilities: filter,
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="req" className="pb-2">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Requirements and Skills"
                      value={requirement}
                      onChange={(e) => setRequirement(e.target.value)}
                    ></textarea>
                    <button
                      className="block ml-auto px-6 py-3 mt-6 text-white bg-[#116B89] rounded-full outline-none"
                      onClick={() => {
                        if (!requirement) return;
                        setJobData({
                          ...jobData,
                          requirements_and_skills: [
                            ...jobData.requirements_and_skills,
                            requirement,
                          ],
                        });
                        setRequirement("");
                      }}
                    >
                      Add Requirement
                    </button>
                    <div>
                      {jobData.requirements_and_skills.map((r, i) => (
                        <div
                          className="cursor-pointer mb-2 flex flex-wrap items-center gap-4"
                          key={i}
                        >
                          <p className="bg-[#116B89]/50 p-2">{r}</p>
                          <XIcon
                            className="cursor-pointer"
                            onClick={() => {
                              const filter =
                                jobData.requirements_and_skills.filter(
                                  (f) => f != r
                                );
                              setJobData({
                                ...jobData,
                                requirements_and_skills: filter,
                              });
                            }}
                          />
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="jobtype" className="flex flex-col pb-2">
                    <Select
                      onValueChange={(value) =>
                        setJobData({
                          ...jobData,
                          job_and_work_place_type: {
                            work_place_type:
                              jobData.job_and_work_place_type.work_place_type,
                            job_type: value,
                          },
                        })
                      }
                    >
                      <SelectTrigger className="w-full py-8 px-5 mb-6">
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Job Type</SelectLabel>
                          {jobTypeData.map((job) => (
                            <SelectItem value={job.job_type} key={job.id}>
                              {job.job_type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select
                      onValueChange={(value) =>
                        setJobData({
                          ...jobData,
                          job_and_work_place_type: {
                            job_type: jobData.job_and_work_place_type.job_type,
                            work_place_type: value,
                          },
                        })
                      }
                    >
                      <SelectTrigger className="w-full py-8 px-5">
                        <SelectValue placeholder="Work Place Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Work Place Type</SelectLabel>
                          {workTypeData.map((work) => (
                            <SelectItem
                              value={work.work_place_type}
                              key={work.id}
                            >
                              {work.work_place_type}
                            </SelectItem>
                          ))}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TabsContent>
                  <TabsContent value="appq" className="pb-3 h-full">
                    <div className="flex flex-col">
                      {questionData.map((qd, i) => (
                        <div className="flex flex-col gap-2 mb-5" key={i}>
                          <Select
                            onValueChange={(value) => {
                              setJobData({
                                ...jobData,
                                application_questions: [
                                  ...jobData.application_questions,
                                  { question: value, compulsory: false },
                                ],
                              });
                            }}
                          >
                            <SelectTrigger className="w-full py-8 px-5 mb-1">
                              <SelectValue
                                placeholder={`Question ${i + 1} Q${i + 1}`}
                              />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>{`Question ${i + 1} Q${
                                  i + 1
                                }`}</SelectLabel>
                                {questionData.map((q, i) => (
                                  <SelectItem value={q.question} key={i}>
                                    {q.question}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className=" accent-[#116B89] w-4 h-4 cursor-pointer "
                              onChange={(e) => {
                                if (e.target.checked === true) {
                                  console.log({ qd });
                                  const isExist =
                                    jobData.application_questions.find(
                                      (ap) => ap.question === qd.question
                                    );
                                  console.log({ isExist });
                                  if (isExist) {
                                    const updated =
                                      jobData.application_questions.map((up) =>
                                        up === isExist
                                          ? {
                                              question: isExist.question,
                                              compulsory: true,
                                            }
                                          : up
                                      );
                                    setJobData({
                                      ...jobData,
                                      application_questions: updated,
                                    });
                                  }
                                } else {
                                  const isExist =
                                    jobData.application_questions.find(
                                      (ap) => ap.question === qd.question
                                    );
                                  if (isExist) {
                                    const updated =
                                      jobData.application_questions.map((up) =>
                                        up === isExist
                                          ? {
                                              question: isExist.question,
                                              compulsory: false,
                                            }
                                          : up
                                      );
                                    setJobData({
                                      ...jobData,
                                      application_questions: updated,
                                    });
                                  }
                                }
                              }}
                            />
                            <span className="ml-2 text-[14px] text-[#6B7280]">
                              Compulsory
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>

                  <TabsContent value="upload">
                    <div className="flex flex-col">
                      {docTypeData.map((d, i) => (
                        <div className="flex flex-col gap-2 mb-5" key={i}>
                          <Select
                            onValueChange={(value) => {
                              setJobData({
                                ...jobData,
                                uploads: [
                                  ...jobData.uploads,
                                  { file: value, compulsory: false },
                                ],
                              });
                            }}
                          >
                            <SelectTrigger className="w-full py-8 px-5 mb-1">
                              <SelectValue placeholder="Choose Document" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Choose Document</SelectLabel>
                                {docTypeData.map((q, i) => (
                                  <SelectItem value={q.file} key={i}>
                                    {q.file}
                                  </SelectItem>
                                ))}
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                          <div className="flex items-center">
                            <input
                              type="checkbox"
                              name=""
                              id=""
                              className=" accent-[#116B89] w-4 h-4 cursor-pointer "
                              onChange={(e) => {
                                if (e.target.checked === true) {
                                  const isExist = jobData.uploads.find(
                                    (ap) => ap.file === d.file
                                  );

                                  if (isExist) {
                                    const updated = jobData.uploads.map((up) =>
                                      up === isExist
                                        ? {
                                            file: isExist.file,
                                            compulsory: true,
                                          }
                                        : up
                                    );
                                    setJobData({
                                      ...jobData,
                                      uploads: updated,
                                    });
                                  }
                                } else {
                                  const isExist = jobData.uploads.find(
                                    (ap) => ap.file === d.file
                                  );
                                  if (isExist) {
                                    const updated = jobData.uploads.map((up) =>
                                      up === isExist
                                        ? {
                                            file: isExist.file,
                                            compulsory: false,
                                          }
                                        : up
                                    );
                                    setJobData({
                                      ...jobData,
                                      uploads: updated,
                                    });
                                  }
                                }
                              }}
                            />
                            <span className="ml-2 text-[14px] text-[#6B7280]">
                              Compulsory
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  <p className="text-center mt-2">{message}</p>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CreateJobPost;

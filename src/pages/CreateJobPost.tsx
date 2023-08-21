import { useState } from "react";
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

function CreateJobPost() {
  const [jobPostModal, setJobPostModal] = useState(false);
  const [isSaveDrafts, setIsSaveDrafts] = useState(false);
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
                onClick={() => setJobPostModal(true)}
              >
                Post Job
              </button>
              <button className="text-[#116B89] font-medium">
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
                      name=""
                      id=""
                      placeholder="Enter Job Title"
                      className="w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                    />
                  </TabsContent>
                  <TabsContent value="description" className="">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Description"
                    ></textarea>
                  </TabsContent>
                  <TabsContent value="responsibilities" className="pb-2">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Responsibilities"
                    ></textarea>
                  </TabsContent>
                  <TabsContent value="req" className="pb-2">
                    <textarea
                      className="h-[150px] w-full outline-none border-[1px] boreder-[#E5E7EB] p-5 rounded-[4px]"
                      placeholder="Enter Requirements and Skills"
                    ></textarea>
                  </TabsContent>

                  <TabsContent value="jobtype" className="flex flex-col pb-2">
                    <Select>
                      <SelectTrigger className="w-full py-8 px-5 mb-6">
                        <SelectValue placeholder="Job Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Job Type</SelectLabel>
                          <SelectItem value="On-Site">On-Site</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>

                    <Select>
                      <SelectTrigger className="w-full py-8 px-5">
                        <SelectValue placeholder="Work Place Type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Work Place Type</SelectLabel>
                          <SelectItem value="On-Site">On-Site</SelectItem>
                          <SelectItem value="Hybrid">Hybrid</SelectItem>
                          <SelectItem value="Remote">Remote</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </TabsContent>
                  <TabsContent value="appq" className="pb-3 h-full">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue placeholder="First Name" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Job Type</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue
                              placeholder="Question 2 (Q2)"
                              className=""
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Question 2 (Q2)</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue
                              placeholder="Question 3 (Q3)"
                              className=""
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Question 3 (Q3)</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>{" "}
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue
                              placeholder="Question 4 (Q4)"
                              className=""
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Question 4 (Q4)</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue
                              placeholder="Question 5 (Q5)"
                              className=""
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Question 5 (Q5)</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>{" "}
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue
                              placeholder="Question 6 (Q6)"
                              className=""
                            />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Question 6 (Q6)</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="LastName">
                                Last Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="upload">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue placeholder="CV" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>CV</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <Select>
                          <SelectTrigger className="w-full py-8 px-5 mb-6">
                            <SelectValue placeholder="Choose Document" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Document</SelectLabel>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                              <SelectItem value="firstname">
                                First Name
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <div>
                          <input
                            type="checkbox"
                            name=""
                            id=""
                            className="accent-[#116B89] cursor-pointer "
                          />{" "}
                          <span className="text-[#6B7280] text-[14px]">
                            Compulsory
                          </span>
                        </div>
                      </div>
                    </div>
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

export default CreateJobPost;

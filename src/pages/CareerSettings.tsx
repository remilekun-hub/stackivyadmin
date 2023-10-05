import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "../components/Navbar.tsx";
import CustomDataTable from "@/components/CustomDataTable.tsx";
import edit22 from "../assets/edit22.png";
import del22 from "../assets/del22.png";
import close from "../assets/close-circle.png";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu.tsx";
import { Button } from "@/components/ui/button.tsx";
import { MoreHorizontal } from "lucide-react";
import { ColumnDef } from "@tanstack/react-table";
import axios from "axios";
import {
  base_url,
  settingType,
  jobType,
  DocumentType,
  questionType,
} from "../../types";
import { userSlice } from "../Hooks/user";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CareerSettimgs() {
  const [createJob, setCreateJob] = useState(false);
  const [createJobType, setCreateJobType] = useState(false);
  const [createDoc, setCreateDoc] = useState(false);
  const [createQuestion, setCreateQuestion] = useState(false);
  const [editWpt, setEditWpt] = useState(false);
  const [editJt, setEditJt] = useState(false);
  const [editdt, setEditdt] = useState(false);
  const [editQuestion, setEditQuestion] = useState(false);
  const [compulsory, setCompulsory] = useState(false);
  const [singleWpt, setSingleWpt] = useState<settingType>();
  const [singleJt, setSingleJt] = useState<jobType>();
  const [singleDt, setSingleDt] = useState<DocumentType>();
  const [singleQt, setSingleQt] = useState<questionType>();
  const [workTypeData, setWorkTypeData] = useState<settingType[]>([]);
  const [jobTypeData, setJobTypeData] = useState<jobType[]>([]);
  const [docTypeData, setDocTypeData] = useState<DocumentType[]>([]);
  const [questionData, setQuestionData] = useState<questionType[]>([]);

  const DocColumns: ColumnDef<DocumentType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const doc = row.original;
        return (
          <>
            <div className="w-[300px]">{doc.file}</div>
          </>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const doc = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => {
                  const s = docTypeData.find((d) => d.id === doc.id);
                  if (s) {
                    setSingleDt(s);
                    setEditdt(true);
                    if (singleDt) {
                      setCompulsory(singleDt?.compulsory);
                    }
                  }
                }}
              >
                <span>
                  <img src={edit22} className="w-3 h-3" />
                </span>{" "}
                <span>Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-3"
                onClick={() => deleteDocType(doc.id)}
              >
                <span>
                  <img src={del22} className="w-3 h-3" />
                </span>{" "}
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const JobColumns: ColumnDef<jobType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const jobtype = row.original;
        return (
          <>
            <div className="w-[300px]">{jobtype.job_type}</div>
          </>
        );
      },
    },
    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => {
                  const j = jobTypeData.find((j) => j.id === data.id);
                  if (j) {
                    setSingleJt(j);
                    setEditJt(true);
                  }
                }}
              >
                <span>
                  <img src={edit22} className="w-3 h-3" />
                </span>{" "}
                <span>Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-3"
                onClick={() => deleteJobType(data.id)}
              >
                <span>
                  <img src={del22} className="w-3 h-3" />
                </span>{" "}
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const columns: ColumnDef<settingType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const setting = row.original;
        return (
          <>
            <div className="w-[300px]">{setting.work_place_type}</div>
          </>
        );
      },
    },

    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const setting = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => {
                  const s = workTypeData.find((w) => w.id === setting.id);
                  if (s) {
                    setSingleWpt(s);
                    setEditWpt(true);
                  }
                }}
              >
                <span>
                  <img src={edit22} className="w-3 h-3" />
                </span>{" "}
                <span>Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-3"
                onClick={() => deleteWorkPlace(setting.id)}
              >
                <span>
                  <img src={del22} className="w-3 h-3" />
                </span>{" "}
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const questionColumns: ColumnDef<questionType>[] = [
    {
      accessorKey: "name",
      header: "NAME",
      cell: ({ row }) => {
        const data = row.original;
        return (
          <>
            <div className="w-[300px]">{data.question}</div>
          </>
        );
      },
    },

    {
      id: "actions",
      header: "ACTION",
      cell: ({ row }) => {
        const data = row.original;

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem
                className="cursor-pointer flex items-center  gap-3"
                onClick={() => {
                  const q = questionData.find((q) => q.id === data.id);
                  if (q) {
                    setSingleQt(q);
                    setEditQuestion(true);
                  }
                }}
              >
                <span>
                  <img src={edit22} className="w-3 h-3" />
                </span>{" "}
                <span>Edit</span>
              </DropdownMenuItem>

              <DropdownMenuItem
                className="cursor-pointer flex items-center gap-3"
                onClick={() => deleteQuestion(data.id)}
              >
                <span>
                  <img src={del22} className="w-3 h-3" />
                </span>{" "}
                <span>Delete</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        );
      },
    },
  ];
  const [isLoading, setIsLoading] = useState(false);
  const user = userSlice((state) => state.user);
  const [workPlaceType, setWorkPlaceType] = useState("");
  const [jobType, setJobType] = useState("");
  const [docType, setDocType] = useState("");
  const [newWorkPlaceType, setNewWorkPlaceType] = useState("");
  const [newJobType, setNewJobType] = useState("");
  const [newDocType, setNewDocType] = useState("");
  const [newQuestion, setNewQuestion] = useState("");
  const [question, setQuestion] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const createWorkPlace = async () => {
    if (!workPlaceType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_work_place_type`,
        { work_place_type: workPlaceType },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      setMessage(data.message);
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      setWorkPlaceType("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  const handleCreateJobType = async () => {
    if (!jobType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_type`,
        { job_type: jobType },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      setJobType("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const createDocType = async () => {
    if (!docType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_document_upload`,
        { file: docType, compulsory: compulsory },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      setWorkPlaceType("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };
  const postQuestion = async () => {
    if (!question) return;
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_application_question`,
        { question: question, compulsory: compulsory },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      setMessage(error.response.data.message);
      console.log(error);
    } finally {
      setIsLoading(false);
      setCompulsory(false);
      setQuestion("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

  const deleteWorkPlace = async (id: string) => {
    try {
      toast.loading("deleting workplace type", { id: "workplaceType" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_work_place_type/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      toast.dismiss("workplaceType");
    }
  };

  const deleteJobType = async (id: string) => {
    try {
      toast.loading("deleting jobtype", { id: "jobType" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_type/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      toast.dismiss("jobType");
    }
  };
  const deleteDocType = async (id: string) => {
    try {
      toast.loading("deleting Document type", { id: "DocType" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_document_upload/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      toast.dismiss("DocType");
    }
  };
  const deleteQuestion = async (id: string) => {
    try {
      toast.loading("deleting Question", { id: "question" });
      const { data } = await axios.delete(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_application_question/${id}`,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      toast.dismiss("question");
    }
  };

  const updateWorkPlaceType = async () => {
    if (!newWorkPlaceType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_work_place_type/${singleWpt?.id}`,
        { work_place_type: newWorkPlaceType },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );

      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setNewWorkPlaceType("");
    }
  };
  const updateJobType = async () => {
    if (!newJobType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_type/${singleJt?.id}`,
        { job_type: newJobType },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log(data);
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setNewJobType("");
    }
  };
  const updateDocType = async () => {
    if (!newDocType) return;
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_document_upload/${singleDt?.id}`,
        { file: newDocType, compulsory: compulsory },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setNewDocType("");
    }
  };

  const updateQuestion = async () => {
    if (!newQuestion) return;
    try {
      setIsLoading(true);
      const { data } = await axios.patch(
        `${base_url}/api/v1/stackivy/admin/career/configs/job_application_question/${singleQt?.id}`,
        { question: newQuestion, compulsory: compulsory },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      if (data.code === 200) {
        navigate(0);
      }
    } catch (
      error: any //eslint-disable-line
    ) {
      console.log(error);
    } finally {
      setIsLoading(false);
      setNewQuestion("");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }
  };

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
        toast.loading("fetching data", { id: "workplaceType" });
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
      } finally {
        toast.dismiss("workplaceType");
      }
    };
    getWorkType();
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
  return (
    <section>
      {editWpt && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Edit Work Place Type</h1>
              <div className="cursor-pointer" onClick={() => setEditWpt(false)}>
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Work Place Type</p>
              <input
                disabled={isLoading}
                type="text"
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={newWorkPlaceType}
                onChange={(e) => {
                  setNewWorkPlaceType(e.target.value);
                }}
              />
              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={updateWorkPlaceType}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center">{message}</p>
            </div>
          </div>
        </div>
      )}

      {editJt && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Edit Job Type</h1>
              <div className="cursor-pointer" onClick={() => setEditJt(false)}>
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Job Type</p>
              <input
                disabled={isLoading}
                type="text"
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={newJobType}
                onChange={(e) => {
                  setNewJobType(e.target.value);
                }}
              />
              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={updateJobType}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center">{message}</p>
            </div>
          </div>
        </div>
      )}

      {editdt && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Edit Document Type</h1>
              <div className="cursor-pointer" onClick={() => setEditdt(false)}>
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Document Type</p>
              <input
                disabled={isLoading}
                type="text"
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-3 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={newDocType}
                onChange={(e) => {
                  setNewDocType(e.target.value);
                }}
              />
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="accent-[#116B89] cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setCompulsory(true);
                    } else {
                      setCompulsory(false);
                    }
                  }}
                />{" "}
                <span>Compulsory</span>
              </div>

              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={updateDocType}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center">{message}</p>
            </div>
          </div>
        </div>
      )}

      {editQuestion && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Edit Document Type</h1>
              <div
                className="cursor-pointer"
                onClick={() => setEditQuestion(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Document Type</p>
              <input
                disabled={isLoading}
                type="text"
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-3 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={newQuestion}
                onChange={(e) => {
                  setNewQuestion(e.target.value);
                }}
              />
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="accent-[#116B89] cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setCompulsory(true);
                    } else {
                      setCompulsory(false);
                    }
                  }}
                />{" "}
                <span>Compulsory</span>
              </div>

              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={updateQuestion}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center">{message}</p>
            </div>
          </div>
        </div>
      )}

      {createJob && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Work Place Type</h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateJob(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Work Place Type</p>
              <input
                disabled={isLoading}
                type="text"
                name=""
                id=""
                placeholder="Enter Name of Work Place Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={workPlaceType}
                onChange={(e) => {
                  setWorkPlaceType(e.target.value);
                }}
              />
              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={createWorkPlace}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center">{message}</p>
            </div>
          </div>
        </div>
      )}

      {createJobType && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Job Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateJobType(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Job Type</p>
              <input
                type="text"
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                placeholder="Enter Name of Job Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
              />

              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={handleCreateJobType}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center mt-2">{message}</p>
            </div>
          </div>
        </div>
      )}
      {createDoc && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Document Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateDoc(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Document Type</p>
              <input
                type="text"
                value={docType}
                onChange={(e) => setDocType(e.target.value)}
                placeholder="Enter Name of Document Type"
                className="w-full outline-none rounded-[4px] mb-3 border-[1px] py-3 px-5 border-[#F3F4F6]"
              />
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="accent-[#116B89] cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setCompulsory(true);
                    } else {
                      setCompulsory(false);
                    }
                  }}
                />{" "}
                <span>Compulsory</span>
              </div>
              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={createDocType}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
              <p className="text-center mt-2">{message}</p>
            </div>
          </div>
        </div>
      )}
      {createQuestion && (
        <div className="flex justify-center fixed inset-0 items-center z-[99999999999999] h-screen w-full bg-black/70">
          <div className="rounded-[24px] bg-white w-[450px]  p-10">
            <div className="flex justify-between border-b-[1px] border-[#F3F4F6] pb-5">
              <h1 className="font-bold">Create Question Type </h1>
              <div
                className="cursor-pointer"
                onClick={() => setCreateQuestion(false)}
              >
                <img src={close} className="w-4 h-4" />
              </div>
            </div>

            <div className="mt-10">
              <p className="mb-4">Name Of Question Type</p>
              <input
                type="text"
                placeholder="Enter Name of Question Type"
                className="w-full outline-none rounded-[4px] mb-6 border-[1px] py-3 px-5 border-[#F3F4F6]"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <div className="mb-4">
                <input
                  type="checkbox"
                  className="accent-[#116B89] cursor-pointer"
                  onChange={(e) => {
                    if (e.target.checked === true) {
                      setCompulsory(true);
                    } else {
                      setCompulsory(false);
                    }
                  }}
                />{" "}
                <span>Compulsory</span>
              </div>
              <button
                className="bg-[#116B89]  ml-auto mt-4 text-center rounded-full w-[120px] h-[50px] text-white py-3  px-7 block"
                disabled={isLoading}
                onClick={postQuestion}
              >
                <div className="inline-flex justify-center items-center text-center">
                  {isLoading ? (
                    <span>
                      <svg
                        className="animate-spin  h-6 w-6 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                    </span>
                  ) : (
                    "Save"
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Career</h1>
        </div>
      </Navbar>

      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="mx-auto">
            <Tabs defaultValue="workplace" className="w-full mx-auto">
              <div className=" mx-9">
                <TabsList className="flex gap-8 w-[300px] justify-center mx-auto h-[100px]">
                  <TabsTrigger value="workplace" className="pb-5 px-0">
                    Work Place Type
                  </TabsTrigger>
                  <TabsTrigger value="jobtypetab" className="pb-5 px-0">
                    Job Type
                  </TabsTrigger>
                  <TabsTrigger value="documents" className="pb-5 px-0">
                    Documents
                  </TabsTrigger>
                  <TabsTrigger value="questions" className="pb-5 px-0">
                    Questions
                  </TabsTrigger>
                </TabsList>
                <hr className="bg-[#F3F4F6] mt-[-25px]" />
              </div>
              <div className="w-[600px] mx-auto">
                <TabsContent value="workplace">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateJob(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={columns} data={workTypeData} />
                  </div>
                </TabsContent>
                <TabsContent value="jobtypetab">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateJobType(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={JobColumns} data={jobTypeData} />
                  </div>
                </TabsContent>
                <TabsContent value="documents">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateDoc(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable columns={DocColumns} data={docTypeData} />
                  </div>
                </TabsContent>
                <TabsContent value="questions">
                  <div className="flex justify-end mt-10 ">
                    <button
                      className="px-7 text-white py-3 bg-[#116B89] rounded-full"
                      onClick={() => setCreateQuestion(true)}
                    >
                      Add +{" "}
                    </button>
                  </div>
                  <div className="mt-6">
                    <CustomDataTable
                      columns={questionColumns}
                      data={questionData}
                    />
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </main>
    </section>
  );
}

export default CareerSettimgs;

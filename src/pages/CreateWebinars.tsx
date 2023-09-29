import { ChangeEvent, useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import backbtn from "../assets/arrow-left.png";
import { Link } from "react-router-dom";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/SingleJobCustomTab";
import { XCircleIcon, XIcon } from "lucide-react";
import axios from "axios";
import { base_url, WebinarType } from "../../types";
import { userSlice } from "@/Hooks/user";
import toast from "react-hot-toast";

function CreateWebinars() {
  const user = userSlice((state) => state.user);
  const filePickerRef = useRef<HTMLInputElement>(null);
  const [speakerName, setSpeakerName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [selectedFile, setSelectedFile] = useState("");

  const [webinarData, setWebinarData] = useState<WebinarType>({
    title: "",
    summary: "",
    webinar_info: {
      date: "",
      time: "",
      location: "",
      speakers: [],
    },
  });

  const handleChangeWebinar = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setWebinarData({
      ...webinarData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    const WebinarData = sessionStorage.getItem("webinarData");
    if (WebinarData) {
      const parsedWebinar = JSON.parse(WebinarData);
      setWebinarData(parsedWebinar);
      return;
    }
    sessionStorage.setItem("webinarData", JSON.stringify(webinarData));
  }, []); //eslint-disable-line
  useEffect(() => {
    sessionStorage.setItem("webinarData", JSON.stringify(webinarData));
  }, [webinarData]);

  const addImageToPost = (e: ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.files && e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
      setFile(e.target.files[0]);
    }
    reader.onload = (r) => {
      if (typeof r.target?.result === "string") {
        setSelectedFile(r.target?.result);
      }
    };
  };

  const createWebinar = async () => {
    try {
      toast.loading("creating webinar...", { id: "createWebinar" });
      const form_data = new FormData();
      form_data.append("title", webinarData.title);
      form_data.append("summary", webinarData.summary);

      form_data.append(
        "webinar_info",
        JSON.stringify(webinarData.webinar_info)
      );
      if (file) {
        form_data.append("image", file);
      }

      const { data } = await axios.post(
        `${base_url}/api/v1/stackivy/admin/marketing/webinar`,
        form_data,
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      console.log({ data });
      if (data.code === 200) {
        toast.success("Success..", { id: "createWebinar" });
        setWebinarData({
          title: "",
          summary: "",
          webinar_info: { date: "", time: "", location: "", speakers: [] },
        });
        setFile(null);
        setSelectedFile("");
      }
      if (data.code != 200) {
        toast.error("couldn't create webinar...", { id: "createWebinar" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    return () => {
      toast.dismiss("createWebinar");
    };
  }, []);

  return (
    <section className="">
      <Navbar>
        <div className="flex items-center">
          <h1 className="font-bold text-[24px]">Webinars</h1>
        </div>
      </Navbar>
      <main className="bg-[#F3F4F6] h-full p-4 lg:px-6 lg:py-7">
        <div className="max-w-[1500px] relative  mx-auto bg-white rounded-[16px] min-h-screen pb-10">
          <div className="flex justify-between border-b-[2px] border-b-[#F3F4F6] items-center h-[100px] px-8">
            <Link to="/webinars" className="flex items-center gap-[2px]">
              <img src={backbtn} className="w-6 h-6" />
              <h1 className="text-[18px] font-medium">Add New Webinar</h1>
            </Link>
            <button
              className="bg-[#116B89] px-6 text-white py-2 rounded-full"
              onClick={createWebinar}
            >
              Create Webinar
            </button>
          </div>
          <div className="px-10 py-8">
            <div className="rounded-[8px]  border-[1px] border-[#F3F4F6] mb-10">
              <Tabs defaultValue="title" className="py-5 overflow-auto ">
                <div className="flex justify-between items-center border-b-[1px] border-[#F3F4F6]">
                  <TabsList className="flex gap-2 justify-start ">
                    <TabsTrigger
                      value="title"
                      className="text-[14px] py-4 leading-5"
                    >
                      Title
                    </TabsTrigger>
                    <TabsTrigger
                      value="summary"
                      className="text-[13px] py-4 leading-5"
                    >
                      Summary
                    </TabsTrigger>

                    <TabsTrigger
                      value="info"
                      className="text-[13px] py-4 leading-5"
                    >
                      Webinar Info
                    </TabsTrigger>
                    <TabsTrigger
                      value="Image"
                      className="text-[13px] py-4 leading-5"
                    >
                      Image
                    </TabsTrigger>
                  </TabsList>
                </div>
                <div className="pt-6 px-5">
                  <TabsContent value="title" className="pb-2">
                    <input
                      type="text"
                      name="title"
                      className="outline-none mag py-2 w-full"
                      placeholder="Enter Title"
                      defaultValue={webinarData.title}
                      onChange={handleChangeWebinar}
                    />
                  </TabsContent>
                  <TabsContent value="summary" className="pb-2">
                    <textarea
                      placeholder="Enter Summary"
                      name="summary"
                      className="w-full outline-none h-[200px]"
                      defaultValue={webinarData.summary}
                      onChange={handleChangeWebinar}
                    />
                  </TabsContent>
                  <TabsContent value="info" className="pb-2">
                    <div className="grid md:grid-cols-3 gap-10">
                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="date"
                          name="date"
                          defaultValue={webinarData.webinar_info.date}
                          className="outline-none p-3 cursor-pointer w-full"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinarData({
                              ...webinarData,
                              webinar_info: {
                                ...webinarData.webinar_info,
                                [e.target.name]: e.target.value,
                              },
                            });
                          }}
                        />
                      </div>

                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="time"
                          name="time"
                          className="outline-none p-3 cursor-pointer w-full"
                          placeholder="Enter Time"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinarData({
                              ...webinarData,
                              webinar_info: {
                                ...webinarData.webinar_info,
                                time: e.target.value,
                              },
                            });
                          }}
                          defaultValue={webinarData.webinar_info.time}
                        />
                      </div>
                      <div className="rounded-[4px] border-[1px] border-[#F0F0F0] p-3">
                        <input
                          type="url"
                          name="location"
                          className="outline-none p-3 w-full"
                          placeholder="Enter Location Link"
                          onChange={(e: ChangeEvent<HTMLInputElement>) => {
                            setWebinarData({
                              ...webinarData,
                              webinar_info: {
                                ...webinarData.webinar_info,
                                [e.target.name]: e.target.value,
                              },
                            });
                          }}
                          defaultValue={webinarData.webinar_info.location}
                        />
                      </div>
                    </div>
                    <div className="rounded-[4px] w-full border-[1px] border-[#F0F0F0] h-[80px] p-3 mt-6 flex items-center">
                      {webinarData.webinar_info.speakers.map((s) => (
                        <div
                          key={s}
                          className="mr-3 flex items-center p-3 bg-gray-100"
                        >
                          <h1>{s}</h1>{" "}
                          <span
                            className="ml-2 cursor-pointer"
                            onClick={() => {
                              const deleteSpeaker =
                                webinarData.webinar_info.speakers.filter(
                                  (ss) => ss !== s
                                );
                              setWebinarData({
                                ...webinarData,
                                webinar_info: {
                                  ...webinarData.webinar_info,
                                  speakers: deleteSpeaker,
                                },
                              });
                            }}
                          >
                            <XIcon />
                          </span>
                        </div>
                      ))}
                    </div>

                    <input
                      type="text"
                      placeholder="Enter Name of Speaker"
                      className="outline-none mt-4 min-w-[350px] border-[1px] border-[#f0f0f0] p-4"
                      value={speakerName}
                      onChange={(e) => setSpeakerName(e.target.value)}
                    />
                    <button
                      className="bg-[#116B89] px-6 py-3 rounded-full text-white ml-4"
                      onClick={() => {
                        if (!speakerName) return;
                        setWebinarData({
                          ...webinarData,
                          webinar_info: {
                            ...webinarData.webinar_info,
                            speakers: [
                              ...webinarData.webinar_info.speakers,
                              speakerName,
                            ],
                          },
                        });
                        setSpeakerName("");
                      }}
                    >
                      Add Speaker
                    </button>
                  </TabsContent>
                  <TabsContent value="Image">
                    <div>
                      {selectedFile ? (
                        <div className="w-[350px] h-[350px] relative">
                          <img
                            src={selectedFile}
                            className="w-[350px] h-[350px] object-contain"
                          />
                          <XCircleIcon
                            className="absolute right-[-30px] top-0 cursor-pointer Z-[800] text-[#9CA3AF]"
                            onClick={() => setSelectedFile("")}
                          />
                        </div>
                      ) : (
                        <div className="flex justify-center items-center border-[1px] h-[300px] rounded-[8px] border-dashed border-[#116B89]">
                          <button
                            className="text-[#116B89] font-semibold"
                            onClick={() => {
                              if (filePickerRef && filePickerRef.current) {
                                filePickerRef.current.click();
                              }
                            }}
                          >
                            + Upload Document
                          </button>
                          <input
                            type="file"
                            className="hidden"
                            ref={filePickerRef}
                            onChange={addImageToPost}
                          />
                        </div>
                      )}
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

export default CreateWebinars;
